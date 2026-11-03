import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { supportEmail, whatsappLink } from '@/lib/contact';

const navLinks = [
  { href: '/courses', label: 'Subjects' },
  { href: '/#how', label: 'How it works' },
  { href: '/#tutors', label: 'Tutors' },
  { href: '/#faq', label: 'FAQ' },
];

function Brand() {
  return <Link href="/" className="brand" aria-label="Kuzify home"><Image className="brand-logo" src="/kuzify-logo.svg" width={89} height={100} alt="Kuzify" priority /></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><div className="wrap header-inner">
    <Brand />
    <nav className="desktop-nav" aria-label="Main navigation">
      {navLinks.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
    </nav>
    <Link className="primary header-cta" href="/courses">Start studying <ArrowUpRight size={15} /></Link>
    <MobileMenu links={navLinks} />
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap">
    <div className="footer-grid">
      <div><Brand /><p>WAEC revision for Nigerian secondary school students, plus vetted remote tutors for families.</p></div>
      <div><h2>Study</h2><Link href="/courses">All subjects</Link><Link href="/courses/mathematics">Mathematics</Link><Link href="/courses/english">English</Link></div>
      <div><h2>Kuzify</h2><Link href="/#how">How it works</Link><Link href="/#tutors">Tutors</Link><Link href="/#faq">FAQ</Link></div>
      <div><h2>Contact</h2><a href={`mailto:${supportEmail}`}>{supportEmail}</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div>
    </div>
    <div className="footer-note"><span>© {new Date().getFullYear()} Kuzify</span><span>Independent study resource. Not affiliated with WAEC.</span></div>
  </div></footer>;
}
