import { BookOpen, Cross, Dna, FlaskConical, Landmark, Languages, ScrollText, Sigma, Sprout, Zap, type LucideIcon } from 'lucide-react';
import type { SubjectId } from './courses';

// Each subject gets its own colour and icon so courses are easy to tell apart.
export const subjectStyle: Record<SubjectId, { icon: LucideIcon; color: string; soft: string }> = {
  mathematics: { icon: Sigma, color: '#2563eb', soft: '#e0e9fd' },
  english: { icon: Languages, color: '#7c3aed', soft: '#ece4fd' },
  chemistry: { icon: FlaskConical, color: '#0d8f7e', soft: '#dcf3ef' },
  government: { icon: Landmark, color: '#be185d', soft: '#fce7f3' },
  biology: { icon: Dna, color: '#397449', soft: '#e2f0e2' },
  physics: { icon: Zap, color: '#315b9d', soft: '#e4edf9' },
  agriculture: { icon: Sprout, color: '#675e24', soft: '#f2efd9' },
  'literature-in-english': { icon: BookOpen, color: '#8c4173', soft: '#f6e5f1' },
  'nigerian-history': { icon: ScrollText, color: '#895021', soft: '#f8e9d9' },
  'christian-religious-studies': { icon: Cross, color: '#514591', soft: '#ece8fa' },
};

export const subjectVars = (id: SubjectId) =>
  ({ '--subject': subjectStyle[id].color, '--subject-soft': subjectStyle[id].soft }) as React.CSSProperties;
