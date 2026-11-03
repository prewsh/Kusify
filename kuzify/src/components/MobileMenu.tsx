'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  return <details className="mobile-menu">
    <summary aria-label="Menu"><Menu className="menu-open" size={22} /><X className="menu-close" size={22} /></summary>
    <nav aria-label="Mobile navigation" onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}>
      {links.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
      <Link className="primary" href="/courses">Start studying <ArrowUpRight size={15} /></Link>
    </nav>
  </details>;
}
