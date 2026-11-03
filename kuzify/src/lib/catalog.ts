import { subjects, type SubjectId } from './courses';

export const tracks = [
  { id: 'core', label: 'Core subjects', description: 'Maths and English: the two papers every candidate sits.' },
  { id: 'science', label: 'Sciences', description: 'Explore Chemistry, Biology, Physics and Agriculture.' },
  { id: 'arts', label: 'Arts & humanities', description: 'Explore Government, Literature, History and Christian Religious Studies.' },
] as const;

export const featured: Record<SubjectId, typeof tracks[number]['id']> = {
  mathematics: 'core', english: 'core', chemistry: 'science', government: 'arts',
  biology: 'science', physics: 'science', agriculture: 'science',
  'literature-in-english': 'arts', 'nigerian-history': 'arts', 'christian-religious-studies': 'arts',
};

const planned = {
  core: [],
  science: ['Further Mathematics', 'Physical Education', 'Health Education', 'Foods & Nutrition', 'Geography', 'Technical Drawing'],
  arts: ['Islamic Studies', 'Hausa / Igbo / Yoruba', 'French', 'Arabic', 'Visual Art', 'Music', 'Home Management', 'Catering Craft'],
};

export const catalog = tracks.map((track) => ({
  ...track,
  courses: subjects.filter(({ id }) => featured[id] === track.id),
  planned: planned[track.id],
}));
