'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Play, RotateCcw, X } from 'lucide-react';
import type { Course, Question, Resource } from '@/lib/courses';
import { clearProgress, loadProgress, saveProgress } from '@/lib/progress';
import { subjectStyle, subjectVars } from '@/lib/subject-style';

type Attempt = { answers: Record<number, number>; graded: boolean };
const newAttempt = (): Attempt => ({ answers: {}, graded: false });

function ResourceLink({ resource }: { resource: Resource }) {
  const Icon = resource.kind === 'Read' ? BookOpen : Play;
  return <a className="resource" href={resource.url} target="_blank" rel="noreferrer">
    <Icon size={18} /><span><strong>{resource.title}</strong><small>{resource.publisher} · {resource.kind}</small></span><ArrowUpRight size={17} />
  </a>;
}

function LessonResource({ resource }: { resource: Resource }) {
  if (resource.kind !== 'Watch') return <details><summary>Source reading · {resource.publisher}</summary><ResourceLink resource={resource} /></details>;
  const id = new URL(resource.url).searchParams.get('v');
  if (!id || !/^[\w-]{11}$/.test(id)) return null;
  return <figure className="lesson-video">
    <iframe title={resource.title} src={`https://www.youtube-nocookie.com/embed/${id}`} loading="lazy"
      allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
    <figcaption>{resource.title} · {resource.publisher}</figcaption>
  </figure>;
}

function Objective({ questions, attempt, onChange }: {
  questions: Question[]; attempt: Attempt; onChange: (attempt: Attempt) => void;
}) {
  const score = questions.filter((question, index) => question.answer === attempt.answers[index]).length;
  const remaining = questions.length - Object.keys(attempt.answers).length;
  return <div className="objective">
    {questions.map((question, index) => <fieldset key={index} disabled={attempt.graded}>
      <legend><span className="question-number">{index + 1}</span>{question.prompt}</legend>
      {question.choices.map((choice, option) => {
        const picked = attempt.answers[index] === option;
        const state = !attempt.graded ? '' : option === question.answer ? ' is-correct' : picked ? ' is-wrong' : '';
        return <label className={`choice${state}`} key={option}>
          <input type="radio" name={`question-${index}`} checked={picked}
            onChange={() => onChange({ ...attempt, answers: { ...attempt.answers, [index]: option } })} />
          <span>{choice}</span>
          {state === ' is-correct' && <Check className="choice-mark" size={18} aria-label="Correct answer" />}
          {state === ' is-wrong' && <X className="choice-mark" size={18} aria-label="Your answer" />}
        </label>;
      })}
    </fieldset>)}
    {attempt.graded ? <p className={`score${score === questions.length ? ' is-perfect' : ''}`} role="status"><strong>{score} / {questions.length}</strong> {score === questions.length ? 'All correct. Well done!' : 'Check the green answers above before you move on.'}</p> :
      <div className="check-row">
        <button className="primary" disabled={remaining > 0}
          onClick={() => onChange({ ...attempt, graded: true })}>{questions.length > 10 ? "Submit practice exam" : "Check answers"} <ArrowRight size={17} /></button>
        {remaining > 0 && <span className="caption">{remaining} question{remaining === 1 ? '' : 's'} left</span>}
      </div>}
  </div>;
}

export default function CourseWorkspace({ course }: { course: Course }) {
  const [lesson, setLesson] = useState(0);
  const [mode, setMode] = useState<'lesson' | 'exam'>('lesson');
  const [attempts, setAttempts] = useState<Record<number, Attempt>>({});
  const [exam, setExam] = useState<Attempt>(newAttempt);
  const [theory, setTheory] = useState('');
  const [videoResults, setVideoResults] = useState<Record<number, Resource[]>>({});
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [examScore, setExamScore] = useState<number>();
  const [restored, setRestored] = useState(false);
  const result = useRef<HTMLElement>(null);

  const active = course?.modules[lesson];
  const subjectId = course?.subjectId;
  const hasVideoResult = videoResults[lesson] !== undefined;
  const hasCuratedVideo = active?.resources.some(({ kind }) => kind === 'Watch') ?? false;

  useEffect(() => {
    if (!subjectId || mode !== 'lesson' || hasVideoResult || hasCuratedVideo) return;
    const controller = new AbortController();
    fetch(`/api/course/video?subject=${subjectId}&lesson=${lesson}`, { signal: controller.signal })
      .then(async (response) => response.ok ? await response.json() as Resource[] : [])
      .then((videos) => {
        if (!controller.signal.aborted) setVideoResults((previous) => ({ ...previous, [lesson]: videos }));
      })
      .catch(() => {
        if (!controller.signal.aborted) setVideoResults((previous) => ({ ...previous, [lesson]: [] }));
      });
    return () => controller.abort();
  }, [subjectId, lesson, mode, hasVideoResult, hasCuratedVideo]);

  useEffect(() => {
    const saved = loadProgress(course.subjectId);
    if (saved) {
      setLesson(Math.min(saved.lesson, course.modules.length - 1));
      setScores(saved.scores);
      setExamScore(saved.exam);
    }
    setRestored(true);
  }, [course.subjectId, course.modules.length]);

  useEffect(() => {
    if (restored) saveProgress(course.subjectId, { lesson, scores, exam: examScore });
  }, [restored, course.subjectId, lesson, scores, examScore]);

  const completed = Object.keys(scores).length;
  const SubjectIcon = subjectStyle[course.subjectId].icon;

  function gradeOf(questions: Question[], attempt: Attempt) {
    return questions.filter((question, index) => question.answer === attempt.answers[index]).length;
  }

  function resetProgress() {
    clearProgress(course.subjectId);
    setScores({});
    setExamScore(undefined);
    setAttempts({});
    setExam(newAttempt());
    openLesson(0);
  }

  function openLesson(index: number) {
    setLesson(index);
    setMode('lesson');
    setOutlineOpen(false);
    result.current?.focus();
  }

  function openExam() {
    setMode('exam');
    setOutlineOpen(false);
    result.current?.focus();
  }

  return (
      <section className="course wrap" ref={result} tabIndex={-1} style={subjectVars(course.subjectId)}>
        <div className="course-head">
          <span className="subject-badge"><SubjectIcon size={26} /></span>
          <div>
            <p className="eyebrow">{course.modules.length} LESSONS · PRACTICE EXAM</p>
            <h1>{course.title}</h1>
          </div>
        </div>
        <div className="progress">
          <div className="progress-track" aria-hidden="true"><span style={{ width: `${100 * completed / course.modules.length}%` }} /></div>
          <span>{completed} of {course.modules.length} quizzes done{examScore !== undefined && ` · exam ${examScore}/${course.exam.length}`}</span>
          {(completed > 0 || examScore !== undefined) && <button className="reset" onClick={resetProgress} aria-label="Reset progress for this course"><RotateCcw size={15} /></button>}
        </div>
        <div className="course-layout">
          <button className="outline-toggle" aria-expanded={outlineOpen} aria-controls="course-outline" onClick={() => setOutlineOpen(!outlineOpen)}>
            <span><small>{mode === 'exam' ? 'FULL COURSE REVIEW' : `LESSON ${lesson + 1} OF ${course.modules.length}`}</small>{mode === 'exam' ? 'Final practice exam' : active.title}</span>
            <ChevronDown size={20} />
          </button>
          <nav id="course-outline" className="course-outline" data-open={outlineOpen} aria-label="Course outline">
            <p className="eyebrow">COURSE OUTLINE</p>
            {course.modules.map((module, index) => <button key={module.title} aria-current={mode === 'lesson' && lesson === index ? 'step' : undefined} onClick={() => openLesson(index)}>
              <span className="step-number">{scores[index] !== undefined ? <Check size={14} aria-label="Quiz completed" /> : String(index + 1).padStart(2, '0')}</span> {module.title}
            </button>)}
            <button className="exam-step" aria-current={mode === 'exam' ? 'step' : undefined} onClick={openExam}><span className="step-number"><Check size={14} aria-hidden="true" /></span> Final practice exam</button>
          </nav>
          <div className="course-main">
            {mode === 'lesson' ? <article className="module" key={lesson}>
              <span className="eyebrow">LESSON {lesson + 1} OF {course.modules.length}</span>
              <h2>{active.title}</h2>
              <p>{active.note}</p>
              <div className="feedback"><strong>Worked example</strong>{active.example}</div>
              {[...active.resources, ...(videoResults[lesson] ?? [])].map((resource) => <LessonResource key={resource.url} resource={resource} />)}
              {!hasCuratedVideo && <p role="status" className="caption">
                {!hasVideoResult ? 'Finding a video for this lesson…' : videoResults[lesson].length === 0 ? 'No video for this lesson yet. The explanation and worked example above cover it.' : ''}
              </p>}
              <section className="topic-quiz">
                <h3>Quick quiz</h3>
                <Objective questions={active.quiz} attempt={attempts[lesson] ?? newAttempt()} onChange={(attempt) => {
                  setAttempts({ ...attempts, [lesson]: attempt });
                  if (attempt.graded) setScores({ ...scores, [lesson]: gradeOf(active.quiz, attempt) });
                }} />
              </section>
            </article> : <article className="module">
              <span className="eyebrow">FULL COURSE REVIEW</span>
              <h2>Final practice exam</h2>
              <p>{course.exam.length} multiple-choice questions from all {course.modules.length} lessons, then one written question. You’ll see your score as soon as you submit.</p>
              <p className="caption">Original Kuzify practice questions</p>
              <Objective questions={course.exam} attempt={exam} onChange={(attempt) => {
                setExam(attempt);
                if (attempt.graded) setExamScore(gradeOf(course.exam, attempt));
              }} />
              <section className="topic-quiz">
                <h3>Written question</h3>
                <p>{course.theory}</p>
                <label htmlFor="theory">Write your answer or working here</label>
                <textarea id="theory" value={theory} onChange={(event) => setTheory(event.target.value)} />
                <details><summary>Compare with a real WAEC question and the examiner’s comments</summary><ResourceLink resource={course.pastPaper} /></details>
              </section>
            </article>}
            <div className="lesson-pager">
              {mode === 'exam' ? <button className="secondary" onClick={() => openLesson(course.modules.length - 1)}><ArrowLeft size={17} /> Back to lessons</button> : <>
                <button className="secondary" disabled={lesson === 0} onClick={() => openLesson(lesson - 1)}><ArrowLeft size={17} /> Previous</button>
                {lesson + 1 < course.modules.length
                  ? <button className="primary" onClick={() => openLesson(lesson + 1)}>Next lesson <ArrowRight size={17} /></button>
                  : <button className="primary" onClick={openExam}>Final exam <ArrowRight size={17} /></button>}
              </>}
            </div>
          </div>
        </div>
      </section>

  );
}
