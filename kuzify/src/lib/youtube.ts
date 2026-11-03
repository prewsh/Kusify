import type { Module, Resource } from './courses';

type SearchItem = {
  id?: { videoId?: string };
  snippet?: { title?: string; channelTitle?: string; description?: string };
};

const stopWords = new Set(['about', 'after', 'among', 'and', 'from', 'into', 'lesson', 'their', 'them', 'with']);

function bestMatch(items: SearchItem[], lessonTitle: string) {
  const terms = [...new Set(lessonTitle.toLowerCase().match(/[a-z]{3,}/g) ?? [])]
    .filter((term) => !stopWords.has(term));
  const matches = items.flatMap((item) => {
    const id = item.id?.videoId;
    const title = item.snippet?.title ?? '';
    if (!id || !/^[\w-]{11}$/.test(id) || /#shorts?\b/i.test(title)) return [];
    const titleText = title.toLowerCase();
    const context = `${titleText} ${item.snippet?.description ?? ''}`.toLowerCase();
    const inTitle = terms.filter((term) => titleText.includes(term)).length;
    const inContext = terms.filter((term) => context.includes(term)).length;
    if (!inTitle || inContext < Math.min(2, terms.length)) return [];
    return [{ item, id, score: inTitle * 3 + inContext }];
  });
  return matches.sort((left, right) => right.score - left.score)[0];
}

export async function sourceVideo(module: Module): Promise<Module> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key || !module.videoQuery) return module;

  const queries = [...new Set([module.videoQuery, module.videoQuery.replace(/\s+WAEC$/, '')])];
  try {
    for (const q of queries) {
      const params = new URLSearchParams({
        key, q, part: 'snippet', type: 'video', maxResults: '8',
        videoEmbeddable: 'true', videoSyndicated: 'true',
        safeSearch: 'strict', relevanceLanguage: 'en', regionCode: 'NG',
      });
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`, {
        next: { revalidate: 86400 },
        signal: AbortSignal.timeout(3000),
      });
      if (!response.ok) {
        console.warn('YouTube lesson search returned', response.status);
        return module;
      }

      const { items = [] }: { items?: SearchItem[] } = await response.json();
      const match = bestMatch(items, module.title);
      if (!match) continue;

      const url = `https://www.youtube.com/watch?v=${match.id}`;
      if (module.resources.some((entry) => entry.url === url)) return module;
      const resource: Resource = {
        kind: 'Watch', title: match.item.snippet?.title ?? module.title,
        publisher: match.item.snippet?.channelTitle ?? 'YouTube', url,
      };
      return { ...module, resources: [...module.resources, resource] };
    }
  } catch {
    console.warn('YouTube lesson search was unavailable');
  }
  return module;
}
