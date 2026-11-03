import Link from 'next/link';

export default function NotFound() {
  return <main className="wrap catalog-page">
    <p className="eyebrow">KUZIFY COURSE LIBRARY</p>
    <h1>We can’t find that page</h1>
    <p className="intro">It may have moved. Pick a subject and carry on studying.</p>
    <Link href="/courses" className="primary">See all subjects</Link>
  </main>;
}
