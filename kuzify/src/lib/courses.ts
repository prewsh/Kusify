import { additionalExamBank } from './additional-exam-bank';
import { examBank } from './exam-bank';
import { syllabus } from './syllabus';
import { courseReferences, lessonReferences } from './waec-course-references';

const allExamQuestions = { ...examBank, ...additionalExamBank };

export type Resource = { title: string; publisher: string; url: string; kind: 'Read' | 'Watch' };
export type Question = { prompt: string; choices: string[]; answer: number };
export type Module = {
  title: string;
  note: string;
  example: string;
  videoQuery: string;
  resources: Resource[];
  quiz: Question[];
};

export const subjects = [
  { id: 'mathematics', name: 'General Mathematics', description: 'Number, algebra, geometry and data' },
  { id: 'english', name: 'English Language', description: 'Lexis, grammar, comprehension, writing and orals' },
  { id: 'chemistry', name: 'Chemistry', description: 'Matter, reactions, organic and practical chemistry' },
  { id: 'government', name: 'Government', description: 'Political institutions, Nigerian history and international relations' },
  { id: 'biology', name: 'Biology', description: 'Cells, life processes, inheritance and ecology' },
  { id: 'physics', name: 'Physics', description: 'Mechanics, heat, waves, electricity and atoms' },
  { id: 'agriculture', name: 'Agriculture', description: 'Soil, crop production, livestock and farm management' },
  { id: 'literature-in-english', name: 'Literature-in-English', description: 'Prose, drama, poetry and analysis of prescribed texts' },
  { id: 'nigerian-history', name: 'Nigerian History', description: 'Early societies, colonial rule, independence and post-independence Nigeria' },
  { id: 'christian-religious-studies', name: 'Christian Religious Studies', description: 'Biblical narratives, discipleship and Christian ethics' },
] as const;

export type SubjectId = typeof subjects[number]['id'];

const papers: Record<SubjectId, { title: string; path: string; theory: string }> = {
  mathematics: {
    title: 'General Mathematics · 2023, Question 2', path: 'Mathematics/maths240mq2.html',
    theory: 'Three exercise books and two pens cost ₦1,900. Two exercise books and three pens cost ₦1,600. Form two equations, find both prices and check your solution.',
  },
  english: {
    title: 'English Language Paper 2 · 2023, Question 1', path: 'English/Engl240mq1.html',
    theory: 'Write a report to your principal about a school reading club meeting. Include its purpose, what happened and one recommendation. Review your draft for concord and consistent tense.',
  },
  chemistry: {
    title: 'Chemistry · 2023, Question 1', path: 'Chemistry/Chem240mq1.html',
    theory: 'Explain how magnesium forms a doubly charged ion. Balance Mg + O₂ → MgO and explain how the equation shows conservation of atoms.',
  },
  government: {
    title: 'Government Paper 2 · 2022, Question 8', path: 'Government/Govt235mq8.html',
    theory: 'Explain two ways federalism can help government respond to local needs in Nigeria. Illustrate each point with a practical example.',
  },
  'biology': {
    title: 'Biology past papers and examiner reports', path: 'Biology/Biomain.html',
    theory: 'Explain how the structure of a leaf helps it photosynthesise. Describe how water reaches the leaf and how sugars leave it.',
  },
  'physics': {
    title: 'Physics past papers and examiner reports', path: 'Physics/physmain.html',
    theory: 'A 4 kg trolley accelerates uniformly from rest to 6 m/s in 3 s. Calculate acceleration, resultant force and final kinetic energy, giving units.',
  },
  'agriculture': {
    title: 'Agriculture past papers and examiner reports', path: 'Agriculture/Agricmain.html',
    theory: 'Recommend two ways to reduce soil erosion on a sloping farm and explain how each method works.',
  },
  'literature-in-english': {
    title: 'Literature-in-English past papers and examiner reports', path: 'Literature/litEmain.html',
    theory: 'Using a prescribed text, explain how the writer develops a conflict in two scenes or passages. Support your interpretation with evidence.',
  },
  'nigerian-history': {
    title: 'Nigerian History past papers and examiner reports', path: 'History/histmain.html',
    theory: 'Explain two ways nationalist organisations advanced self-government in Nigeria. Support each point with an example.',
  },
  'christian-religious-studies': {
    title: 'Christian Religious Studies past papers and examiner reports', path: 'CRK/CRSmain.html',
    theory: 'Retell the main events of the Good Samaritan in Luke 10:25–37 and explain two implications for helping others.',
  },
};

const focusedVideoQueries: Record<string, string> = {
  'Support, movement and skeletons': 'human skeleton joints antagonistic muscles biology',
  'Climate, farm ecosystems and land use': 'agricultural ecology climate factors crop production agricultural science',
};

const curated: Partial<Record<SubjectId, Record<number, Resource[]>>> = {
  mathematics: {
    0: [{ title: 'Converting percent to decimal and fraction', publisher: 'Khan Academy', url: 'https://www.youtube.com/watch?v=-gB1y-PMWfs', kind: 'Watch' }],
    4: [
      { title: 'Solving systems by substitution', publisher: 'OpenStax', url: 'https://openstax.org/books/elementary-algebra-2e/pages/5-2-solving-systems-of-equations-by-substitution', kind: 'Read' },
      { title: 'Solving systems of equations by elimination', publisher: 'Khan Academy', url: 'https://www.youtube.com/watch?v=vA-55wZtLeE', kind: 'Watch' },
    ],
  },
  english: {
    0: [{ title: 'Exam skills: dealing with difficult vocabulary', publisher: 'BBC Learning English', url: 'https://www.youtube.com/watch?v=LloT8lNaWA8', kind: 'Watch' }],
    2: [
      { title: 'Subject–verb agreement', publisher: 'BBC Learning English', url: 'https://downloads.bbc.co.uk/worldservice/learningenglish/grammarchallenge/pdfs/gc_47_subject_verb.pdf', kind: 'Read' },
      { title: 'Subject–verb agreement masterclass', publisher: 'BBC Learning English', url: 'https://www.youtube.com/watch?v=vVPT3pbzHis', kind: 'Watch' },
    ],
    5: [{ title: 'Summary examiner feedback', publisher: 'WAEC e-Learning', url: 'https://www.waeconline.org.ng/e-learning/English/Engl240mq7.html', kind: 'Read' }],
  },
  chemistry: {
    0: [{ title: 'Separation techniques: filtration, evaporation and crystallisation', publisher: 'Cognito', url: 'https://www.youtube.com/watch?v=29Rd-Lly-fw', kind: 'Watch' }],
    3: [{ title: 'Balancing chemical equations', publisher: 'Khan Academy', url: 'https://www.youtube.com/watch?v=TUuABq95BBM', kind: 'Watch' }],
  },
  government: {
    0: [{ title: 'Government authority', publisher: 'Afrilearn Education', url: 'https://www.youtube.com/watch?v=K5Yo_kMKtXU', kind: 'Watch' }],
    2: [{ title: 'Three arms of government and separation of powers', publisher: 'AllCBTs', url: 'https://www.youtube.com/watch?v=wdyEB1v-TUU', kind: 'Watch' }],
  },
  biology: {
    7: [{ title: 'The skeletal system', publisher: 'Crash Course', url: 'https://www.youtube.com/watch?v=rDGqkMHPDqE', kind: 'Watch' }],
    0: [{ title: 'Animal and plant cells', publisher: 'Cognito', url: 'https://www.youtube.com/watch?v=bLeDekGNI_c', kind: 'Watch' }],
  },
  physics: {
    0: [{ title: 'Speed, velocity, distance and displacement', publisher: 'Cognito', url: 'https://www.youtube.com/watch?v=NZvMXcIztuU', kind: 'Watch' }],
  },
  agriculture: {
    6: [{ title: 'Environmental factors affecting agricultural production', publisher: 'Zigmatech', url: 'https://www.youtube.com/watch?v=8bh37Q4D3Wg', kind: 'Watch' }],
    2: [{ title: 'Agricultural Science revision: crop production', publisher: 'E-studylab', url: 'https://www.youtube.com/watch?v=2J-C4jcMcOI', kind: 'Watch' }],
  },
  'nigerian-history': {
    0: [{ title: 'The Nok civilisation', publisher: 'HistoryVille', url: 'https://www.youtube.com/watch?v=vEe0-n8H7-I', kind: 'Watch' }],
  },
  'christian-religious-studies': {
    0: [{ title: 'Genesis 12–50 overview', publisher: 'BibleProject', url: 'https://www.youtube.com/watch?v=F4isSyennFo', kind: 'Watch' }],
  },
  'literature-in-english': {
    0: [{ title: 'Introduction to figures of speech', publisher: 'LearnCity', url: 'https://www.youtube.com/watch?v=H9Dyoho4l-w', kind: 'Watch' }],
  },
};

function shuffle<T>(items: readonly T[]): T[] {
  const pool = [...items];
  for (let index = pool.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[other]] = [pool[other], pool[index]];
  }
  return pool;
}

function makeQuestion(spec: string): Question {
  const [prompt, correct, ...distractors] = spec.split('|');
  const choices = shuffle([correct, ...distractors]);
  return { prompt, choices, answer: choices.indexOf(correct) };
}

export function makeModule(subject: SubjectId, index: number): Module | undefined {
  const spec = syllabus[subject][index];
  if (!spec) return;
  const [title, note, example, questions] = spec;
  return {
    title, note, example,
    videoQuery: focusedVideoQueries[title] ?? (
      subject === 'literature-in-english' && title.includes(' — ')
        ? `${title.replace(' — ', ' ')} analysis`
        : `${title.split(/:/)[0]} ${subjects.find(({ id }) => id === subject)?.name} WAEC`
    ),
    resources: [...(curated[subject]?.[index] ?? []), ...lessonReferences(subject, index, title)],
    quiz: questions.map(makeQuestion),
  };
}

export function makeCourse(subjectId: SubjectId) {
  const subject = subjects.find(({ id }) => id === subjectId)!;
  const modules = syllabus[subjectId].map((_, index) => {
    const lesson = makeModule(subjectId, index)!;
    // The video endpoint retains curated fallbacks while searching on lesson open.
    return courseReferences[subjectId]
      ? { ...lesson, resources: lesson.resources.filter(({ kind }) => kind !== 'Watch') }
      : lesson;
  });
  const paper = papers[subjectId];
  return {
    id: crypto.randomUUID(),
    subjectId,
    title: `WAEC ${subject.name}`,
    subject: subject.name,
    modules,
    exam: shuffle(allExamQuestions[subjectId].flat().map(makeQuestion)),
    theory: paper.theory,
    pastPaper: {
      title: paper.title, publisher: 'WAEC e-Learning', kind: 'Read' as const,
      url: `https://www.waeconline.org.ng/e-learning/${paper.path}`,
    },
  };
}

export type Course = ReturnType<typeof makeCourse>;
