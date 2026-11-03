import { NextResponse } from 'next/server';
import { makeModule, subjects } from '@/lib/courses';
import { sourceVideo } from '@/lib/youtube';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subject = subjects.find(({ id }) => id === searchParams.get('subject'));
  const index = searchParams.get('lesson');
  const lesson = subject && index !== null && /^\d+$/.test(index) && makeModule(subject.id, Number(index));
  if (!lesson) return NextResponse.json({ error: 'Lesson unavailable.' }, { status: 404 });
  const sourced = await sourceVideo(lesson);
  return NextResponse.json(sourced.resources.filter(({ kind }) => kind === 'Watch'));
}
