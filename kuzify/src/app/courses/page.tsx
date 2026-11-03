import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';
import CourseProgress from '@/components/CourseProgress';
import { catalog } from '@/lib/catalog';
import { syllabus } from '@/lib/syllabus';
import { subjectStyle, subjectVars } from '@/lib/subject-style';

export default async function CoursesPage({ searchParams }: { searchParams: Promise<{ track?: string }> }) {
  const { track } = await searchParams;
  const selected = catalog.find(({ id }) => id === track);
  return <main className="wrap catalog-page">
    <p className="eyebrow">WASSCE · NIGERIA</p>
    <h1>{selected?.label ?? 'All subjects'}</h1>
    <p className="intro">{selected?.description ?? 'Pick a subject to start. Each course takes you through the topics in order, with a quiz after every lesson.'}</p>
    <nav className="catalog-tabs" aria-label="Subject tracks">
      <Link href="/courses" aria-current={!selected ? 'page' : undefined}>All tracks</Link>
      {catalog.map(({ id, label }) => <Link key={id} href={`/courses?track=${id}`} aria-current={selected?.id === id ? 'page' : undefined}>{label}</Link>)}
    </nav>
    {(selected ? [selected] : catalog).map((group) => <section className="catalog-group" key={group.id}>
      {!selected && <h2>{group.label}</h2>}
      <div className="catalog-grid">
        {group.courses.map((subject, index) => {
          const Icon = subjectStyle[subject.id].icon;
          return <Link className="subject-card" data-reveal key={subject.id} href={`/courses/${subject.id}`} style={{ ...subjectVars(subject.id), '--i': index } as React.CSSProperties}>
            <span className="subject-badge"><Icon size={22} /></span>
            <span className="eyebrow">{syllabus[subject.id].length} LESSONS · QUIZZES · PRACTICE EXAM</span>
            <h3>{subject.name}</h3><p>{subject.description}</p>
            <CourseProgress subjectId={subject.id} total={syllabus[subject.id].length} />
            <span className="track-action">Start course <ArrowRight size={17} /></span>
          </Link>;
        })}
      </div>
      {group.planned.length > 0 && <details className="planned" open={Boolean(selected)}><summary>Coming soon <span>{group.planned.length}</span></summary><ul>{group.planned.map((name) => <li key={name}><Clock3 size={14} />{name}</li>)}</ul></details>}
    </section>)}
  </main>;
}
