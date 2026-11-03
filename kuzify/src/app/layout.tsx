import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Motion from '@/components/Motion';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Kuzify · WAEC revision, lesson by lesson',
  description: 'Short video lessons, worked examples, quick quizzes and practice exams for WAEC candidates in Nigeria.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en-NG" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><div id="main-content">{children}</div><SiteFooter /><Motion /></body></html>;
}
