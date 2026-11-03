import type { Resource } from './courses';

const reading = (title: string, publisher: string, url: string): Resource => (
  { title, publisher, url, kind: 'Read' }
);

const prescribedTexts = reading(
  'WASSCE prescribed Literature texts for 2026–2030',
  'WAEC Nigeria',
  'https://waecnigeria.org/sites/default/files/2023-06/LITERATURE-IN-ENG%202026-2030.pdf',
);

export const courseReferences: Record<string, Resource[]> = {
  biology: [
    reading('WASSCE Biology syllabus', 'WAEC syllabus PDF (mirror)', 'https://waecsyllabus.com/download/ssce/BIOLOGY.pdf'),
    reading('Biology 2e subject index', 'OpenStax', 'https://openstax.org/books/biology-2e/pages/index'),
  ],
  physics: [
    reading('WASSCE Physics syllabus', 'WAEC syllabus PDF (mirror)', 'https://waecsyllabus.com/download/ssce/PHYSICS.pdf'),
    reading('College Physics 2e subject index', 'OpenStax', 'https://openstax.org/books/college-physics-2e/pages/index'),
  ],
  agriculture: [
    reading('WASSCE Agricultural Science syllabus', 'WAEC syllabus PDF (mirror)', 'https://waecsyllabus.com/download/ssce/AGRICULTURAL%20SCIENCE.pdf'),
    reading('Agricultural Science questions and examiner reports', 'WAEC e-Learning', 'https://www.waeconline.org.ng/e-Learning/Agriculture/Agricmain.html'),
  ],
  'nigerian-history': [
    reading('WASSCE History syllabus and Nigeria section', 'WAEC syllabus PDF (mirror)', 'https://waecsyllabus.com/download/ssce/HISTORY.pdf'),
    reading('General History of Africa', 'UNESCO', 'https://www.unesco.org/en/general-history-africa'),
  ],
  'christian-religious-studies': [
    reading('WASSCE Christian Religious Studies syllabus', 'WAEC syllabus PDF (mirror)', 'https://waecsyllabus.com/download/ssce/CHRISTIAN%20RELIGIOUS%20STUDIES%20%28NEW%29.pdf'),
  ],
  'literature-in-english': [prescribedTexts],
};

const topicReadings: Record<string, Resource> = {
  'Forces, work and energy': reading('Forces and motion simulation', 'PhET', 'https://phet.colorado.edu/en/simulations/forces-and-motion-basics'),
  'Circuit analysis and electrical energy': reading('Build series and parallel circuits', 'PhET', 'https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc'),
  'Waves, sound and light': reading('Wave on a String simulation', 'PhET', 'https://phet.colorado.edu/en/simulations/wave-on-a-string'),
  'Soil, fertility and conservation': reading('Soil conservation', 'FAO', 'https://www.fao.org/soils-portal/soil-management/soil-conservation/en/'),
  'Soil formation, nutrients and fertilisers': reading('Soils reference library', 'FAO', 'https://www.fao.org/soils-portal/en/'),
  'Irrigation, drainage and farm surveying': reading('Irrigation, drainage and soil salinity', 'FAO', 'https://elearning.fao.org/course/view.php?id=1093'),
  'Antony and Cleopatra — William Shakespeare': reading('Read Antony and Cleopatra', 'Folger Shakespeare Library', 'https://www.folger.edu/explore/shakespeares-works/antony-and-cleopatra/read/'),
};

const passages = [
  'Genesis 1–2; Genesis 9:8–17; Genesis 12:1–9',
  '1 Samuel 16; 2 Samuel 12:1–15; Amos 5',
  'Luke 10:25–37; Matthew 5:1–12',
  'Mark 14–16; Matthew 28',
  'Acts 6:1–7; Acts 9:1–22; James 2:14–26',
  'Genesis 41; Exodus 3; Joshua 1; Judges 4',
  '1 Samuel 2:12–36; 1 Samuel 8:1–9; 1 Samuel 15',
  '2 Samuel 12:1–15; 1 Kings 3:3–15; 1 Kings 12:1–20',
  '1 Kings 18; 1 Kings 21; 2 Kings 5',
  '2 Kings 22–23; Nehemiah 1–2',
  'Daniel 6; Amos 5; Hosea 1–3',
  'Matthew 3:13–17; Matthew 4:1–11',
  'Mark 14–16; Luke 24:13–35',
  'Acts 2; Acts 7; Acts 10; Acts 15',
  'James 2; James 5:13–18',
  '1 Peter 2:11–25; Romans 12',
];

export function lessonReferences(subject: string, index: number, title: string): Resource[] {
  const references = [...(courseReferences[subject] ?? [])];
  const topic = topicReadings[title];
  if (topic) references.unshift(topic);
  if (subject !== 'christian-religious-studies' || !passages[index]) return references;
  const search = encodeURIComponent(passages[index].replaceAll('–', '-'));
  return [
    reading('Bible passages for this lesson (RSV)', 'Bible Gateway', `https://www.biblegateway.com/passage/?search=${search}&version=RSV`),
    ...references,
  ];
}
