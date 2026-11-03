// Study progress lives in this browser only. Quiz choices are reshuffled on every visit,
// so we keep scores per lesson rather than the answers themselves.
export type Progress = { lesson: number; scores: Record<number, number>; exam?: number };

const key = (subjectId: string) => `kuzify:progress:${subjectId}`;

export function loadProgress(subjectId: string): Progress | null {
  try {
    const saved = JSON.parse(localStorage.getItem(key(subjectId)) ?? 'null');
    return saved && typeof saved.lesson === 'number' && typeof saved.scores === 'object' ? saved : null;
  } catch {
    return null;
  }
}

export function saveProgress(subjectId: string, progress: Progress) {
  try {
    localStorage.setItem(key(subjectId), JSON.stringify(progress));
  } catch {
    // Private browsing or full storage: progress just won't persist.
  }
}

export function clearProgress(subjectId: string) {
  try {
    localStorage.removeItem(key(subjectId));
  } catch {
    // Nothing to clear.
  }
}
