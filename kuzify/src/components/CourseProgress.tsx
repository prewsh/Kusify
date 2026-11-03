'use client';

import { useEffect, useState } from 'react';
import { loadProgress } from '@/lib/progress';

export default function CourseProgress({ subjectId, total }: { subjectId: string; total: number }) {
  const [done, setDone] = useState<number>();

  useEffect(() => setDone(Object.keys(loadProgress(subjectId)?.scores ?? {}).length), [subjectId]);

  if (!done) return null;
  return <span className="card-progress">
    <span className="progress-track" aria-hidden="true"><span style={{ width: `${100 * done / total}%` }} /></span>
    {done === total ? 'All quizzes done' : `${done} of ${total} done`}
  </span>;
}
