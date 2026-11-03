import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle, PenLine, PlayCircle, RotateCcw } from 'lucide-react';
import { subjects } from '@/lib/courses';
import { syllabus } from '@/lib/syllabus';
import { subjectStyle } from '@/lib/subject-style';
import { whatsappLink } from '@/lib/contact';
import heroStudent from '../../public/images/hero-student.jpg';
import stepPhone from '../../public/images/step-phone.jpg';
import stepLaptop from '../../public/images/step-laptop.jpg';
import stepWriting from '../../public/images/step-writing.jpg';
import studentLaptop from '../../public/images/student-laptop.jpg';
import ssStudents from '../../public/images/ss-students.jpg';
import tutorCall from '../../public/images/tutor-video-call.jpg';
import './landing.css';

const headline = ['Get', 'ready', 'for', 'WAEC,', 'one', 'topic', 'at', 'a', 'time.'];

const steps = [
  { image: stepPhone, title: 'Pick a subject', text: 'See every topic in the course, laid out in the order you’ll study it.', alt: 'A student reading on her phone' },
  { image: stepLaptop, title: 'Learn, then check yourself', text: 'Watch a short lesson, go through the worked example, then answer three quick questions.', alt: 'A student studying at a laptop' },
  { image: stepWriting, title: 'Sit the practice exam', text: 'Answer questions from the whole course and get your score straight away.', alt: 'A student writing answers in a notebook' },
];

const points = [
  { icon: PlayCircle, title: 'Short lessons', text: 'Each topic is a short explanation, a worked example and a video, small enough for a bus ride.' },
  { icon: PenLine, title: 'Know straight away', text: 'Quizzes are marked the moment you tap. Right answers are circled, so you see exactly where you went wrong.' },
  { icon: RotateCcw, title: 'Pick up where you stopped', text: 'Your progress is saved on your phone, so you can come back to the same lesson tomorrow.' },
];

const faqs = [
  { q: 'Do I need to create an account?', a: 'No. Open a subject and start. Your progress is saved in your phone’s browser.' },
  { q: 'Which exam is Kuzify for?', a: 'The West African Senior School Certificate Examination (WASSCE), set by WAEC. Lessons follow the topics in the WAEC syllabus.' },
  { q: 'Will it work on my phone?', a: 'Yes. Kuzify was designed for phones first and works in any modern browser.' },
  { q: 'Who writes the questions?', a: 'Quizzes and practice exams are original Kuzify questions. We also link to real WAEC questions with examiners’ comments.' },
  { q: 'Can I get a human tutor?', a: 'Yes. Message us on WhatsApp and we’ll match you with a vetted Kuzify tutor for one-to-one lessons over video.' },
];

const delay = (i: number) => ({ '--i': i }) as React.CSSProperties;

function Ring({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true"><path d="M30 18C70 2 165 4 188 38c16 26-30 52-96 54C30 94 6 70 12 46 18 26 60 10 120 12" /></svg>;
}

export default function Home() {
  const ready = subjects.filter(({ id }) => syllabus[id]?.length);
  const ticker = subjects.map(({ name }) => name);

  return <main className="landing">
    <section className="wrap l-hero">
      <div className="l-hero-copy">
        <p className="l-eyebrow l-in">WAEC revision · no sign-up</p>
        <h1 aria-label="Get ready for WAEC, one topic at a time.">
          {headline.map((word, index) => <Fragment key={word}>
            {word === 'WAEC,'
              ? <><span className="l-word l-circled" aria-hidden="true" style={delay(index)}>WAEC<Ring /></span><span className="l-word" aria-hidden="true" style={delay(index)}>,</span></>
              : <span className="l-word" aria-hidden="true" style={delay(index)}>{word}</span>}
            {index < headline.length - 1 && ' '}
          </Fragment>)}
        </h1>
        <p className="l-lede l-in" style={{ '--d': '.6s' } as React.CSSProperties}>Short video lessons, worked examples and quick quizzes for every WAEC topic. When you’ve finished a subject, sit a full practice exam and see if you’re ready.</p>
        <div className="l-ctas l-in" style={{ '--d': '.75s' } as React.CSSProperties}>
          <Link className="l-btn l-btn-primary" href="/courses">Start studying <ArrowRight size={18} /></Link>
          <a className="l-btn l-btn-ghost" href="#how">See how it works</a>
        </div>
        <ul className="l-proof l-in" style={{ '--d': '.9s' } as React.CSSProperties}>
          {['Works on any phone', 'Lessons in syllabus order', 'Instant quiz marking'].map((item) => <li key={item}><Check size={13} />{item}</li>)}
        </ul>
      </div>
      <div className="l-hero-art">
        <svg className="l-rings" viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="60" /><circle className="sky" cx="80" cy="70" r="66" /></svg>
        <div className="l-dots" aria-hidden="true" />
        <div className="l-photo"><Image src={heroStudent} alt="A student smiling as she studies her notes" priority placeholder="blur" sizes="(min-width: 980px) 520px, 100vw" /></div>
        <div className="l-chip l-chip-lesson" aria-hidden="true"><small>NOW STUDYING</small>Lesson 5 · Simultaneous equations</div>
        <div className="l-chip l-chip-score" aria-hidden="true"><span className="l-tick"><Check size={18} /></span><span><small>QUICK QUIZ</small>3 / 3 correct</span></div>
        <div className="l-chip l-chip-progress" aria-hidden="true"><small>GENERAL MATHEMATICS</small>8 of 12 lessons done<span className="l-bar"><span /></span></div>
      </div>
    </section>

    <div className="l-ticker" aria-hidden="true"><div className="l-track">
      {[0, 1].map((copy) => ticker.map((name) => <span key={`${copy}-${name}`}>{name}<i>✦</i></span>))}
    </div></div>

    <section className="l-block" id="how"><div className="wrap">
      <div className="l-head" data-reveal><p className="l-eyebrow">How it works</p><h2>From first lesson to exam day</h2><p>No timetable to set up and nothing to download. Open a subject and follow it in order.</p></div>
      <div className="l-steps">
        {steps.map((step, index) => <article className="l-step" data-reveal style={delay(index)} key={step.title}>
          <figure><Image src={step.image} alt={step.alt} placeholder="blur" sizes="(min-width: 720px) 33vw, 100vw" /><span className="l-num">{index + 1}</span></figure>
          <div><h3>{step.title}</h3><p>{step.text}</p></div>
        </article>)}
      </div>
    </div></section>

    <section className="l-block l-feature"><div className="wrap l-feature-grid">
      <div className="l-phone-stage" data-reveal>
        <div className="l-phone-photo"><Image src={studentLaptop} alt="A student revising on her laptop" placeholder="blur" sizes="(min-width: 980px) 420px, 80vw" /></div>
        <div className="l-phone" aria-hidden="true"><div className="l-screen">
          <div className="l-screen-top"><span>LESSON 1 OF 12</span><span>MATHS</span></div>
          <strong className="l-screen-title">Number, fractions and percentages</strong>
          <div className="l-q">1. What is 3/4 + 1/6?</div>
          <div className="l-opt">5/12</div>
          <div className="l-opt right">11/12<Ring className="l-opt-ring" /></div>
          <div className="l-opt wrong">7/12</div>
          <div className="l-opt">4/10</div>
          <div className="l-next">Next lesson →</div>
        </div></div>
      </div>
      <div>
        <div className="l-head" data-reveal><p className="l-eyebrow">Built for your phone</p><h2>Revise anywhere, even with a few minutes</h2></div>
        <div className="l-points">
          {points.map(({ icon: Icon, title, text }, index) => <div className="l-point" data-reveal style={delay(index)} key={title}>
            <span className="l-ic"><Icon size={22} /></span><div><h3>{title}</h3><p>{text}</p></div>
          </div>)}
        </div>
      </div>
    </div></section>

    <section className="l-block" id="subjects"><div className="wrap">
      <div className="l-head" data-reveal><p className="l-eyebrow">Subjects</p><h2>Start with the papers you sit first</h2><p>{ready.length} subjects are ready now, and more are being written.</p></div>
      <div className="l-subjects">
        {subjects.map(({ id, name }, index) => {
          const { icon: Icon, color, soft } = subjectStyle[id];
          const lessons = syllabus[id]?.length ?? 0;
          const style = { '--c': color, '--c-soft': soft, '--i': index % 4 } as React.CSSProperties;
          const body = <><span className="l-badge"><Icon size={22} /></span><h3>{name}</h3><small>{lessons ? `${lessons} LESSONS · READY` : 'COMING SOON'}</small></>;
          return lessons
            ? <Link className="l-subj" data-reveal style={style} href={`/courses/${id}`} key={id}>{body}</Link>
            : <div className="l-subj soon" data-reveal style={style} key={id}>{body}</div>;
        })}
      </div>
      <Link className="l-more" href="/courses">See all subjects <ArrowRight size={17} /></Link>
    </div></section>

    <section className="l-ss" aria-labelledby="ss-title">
      <Image src={ssStudents} alt="Secondary school students in uniform celebrating together" placeholder="blur" fill sizes="100vw" />
      <div className="wrap l-ss-copy" data-reveal>
        <p className="l-eyebrow">Made for SS1 to SS3</p>
        <h2 id="ss-title">Start early. Walk into WAEC ready.</h2>
        <p>Whether you’re just starting SS1 or your exam is next month, follow one topic at a time and watch your progress add up.</p>
        <Link className="l-btn l-btn-primary" href="/courses">Choose a subject <ArrowRight size={18} /></Link>
      </div>
    </section>

    <section className="l-block" id="tutors"><div className="wrap">
      <div className="l-tutors" data-reveal><div className="l-tutors-grid">
        <div className="l-tutors-photo"><Image src={tutorCall} alt="A Kuzify tutor teaching over a video call" placeholder="blur" sizes="(min-width: 720px) 50vw, 100vw" /></div>
        <div className="l-tutors-copy">
          <p className="l-eyebrow">Kuzify tutors</p>
          <h2>Want a real teacher alongside the app?</h2>
          <p>Kuzify started by matching families with qualified, vetted teachers across Africa. Book a remote tutor for one-to-one lessons over video, with recordings sent to you after each class.</p>
          <a className="l-btn l-btn-wa" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat with us on WhatsApp</a>
        </div>
      </div></div>
    </div></section>

    <section className="l-block l-faq-block" id="faq"><div className="wrap">
      <div className="l-head" data-reveal><p className="l-eyebrow">Questions</p><h2>Good to know</h2></div>
      <div className="l-faq">
        {faqs.map(({ q, a }, index) => <details data-reveal style={delay(index)} open={index === 0} key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </div></section>

    <section className="wrap"><div className="l-final" data-reveal>
      <svg className="l-final-rings" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="40" /><circle cx="54" cy="47" r="45" className="thin" /></svg>
      <h2>Your next lesson takes five minutes</h2>
      <p>Pick a subject and start where WAEC starts. You can come back to it any time.</p>
      <Link className="l-btn l-btn-navy" href="/courses">Start studying <ArrowRight size={18} /></Link>
    </div></section>
  </main>;
}
