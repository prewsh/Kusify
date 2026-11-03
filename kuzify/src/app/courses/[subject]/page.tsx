import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import CourseWorkspace from '@/components/CourseWorkspace';
import { featured } from '@/lib/catalog';
import { makeCourse, subjects } from '@/lib/courses';

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = subjects.find(({ id }) => id === slug);
  if (!subject) notFound();
  return <main>
    <div className="wrap breadcrumb"><Link href={`/courses?track=${featured[subject.id]}`}><ArrowLeft size={17} /> Back to courses</Link></div>
    <CourseWorkspace key={subject.id} course={makeCourse(subject.id)} />
  </main>;
}
