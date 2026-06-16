import { Mail, Quote } from 'lucide-react';

const competencies = ['Market Entry Strategy', 'Business Development & Partner Search', 'Market Research & Insights', 'Investor & Financial Advisory', 'International Project Management'];
const testimonials = [
  ['Blessmon Samuel', 'Clear strategy and end-to-end assistance. Highly recommended for global expansion.'],
  ['Jenna Smith', 'Professional team, deep market insights, and excellent support throughout our expansion process.'],
  ['Stevens', 'Strong network and reliable advisory for cross-border projects.'],
];

export const metadata = { title: 'About Us', description: 'About Aidni Global LLP and its cross-border consulting expertise.' };

export default function AboutPage() {
  return <main>
    <section className="bg-slate-950 py-20 text-white"><div className="section-container"><p className="kicker text-blue-300">About Aidni Global</p><h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">Expanding Businesses Across Borders With Strategic Insight</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Aidni Global LLP is an international business development and consulting firm helping companies expand into India, South America, Europe, and the UAE.</p></div></section>
    <section className="section-container py-20 grid gap-12 lg:grid-cols-2"><div><h2 className="text-3xl font-black">We Create Growth, Not Just Strategies</h2><div className="mt-5 space-y-4 text-lg leading-8 text-slate-600"><p>Our mission is to create sustainable global pathways for SMEs, exporters, startups, technology firms, and investment ventures through clear strategy and hands-on execution.</p><p>We do not deliver generic consulting reports — we build actionable plans from industry analysis to distributor onboarding, investor connections, and local representation.</p><p>Our work spans technology, manufacturing, food & retail, logistics, services, and export-driven businesses.</p></div><a href="mailto:office@aidniglobal.in" className="mt-8 inline-flex items-center rounded-full bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"><Mail className="mr-2 h-5 w-5" /> Let's talk with us</a></div><div className="rounded-3xl bg-blue-50 p-8"><p className="kicker">Core Expertise</p><h2 className="mt-3 text-3xl font-black">Our Core Competencies</h2><div className="mt-8 space-y-4">{competencies.map((item) => <div key={item} className="rounded-2xl bg-white p-5 font-bold shadow-sm ring-1 ring-blue-100">{item}</div>)}</div></div></section>
    <section className="bg-slate-50 py-20"><div className="section-container"><p className="kicker">Testimonials</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">What Our Clients Say</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{testimonials.map(([name, text]) => <article key={name} className="rounded-3xl bg-white p-6 shadow-sm"><Quote className="h-8 w-8 text-blue-600" /><p className="mt-4 text-slate-700">“{text}”</p><h3 className="mt-6 font-bold">{name}</h3></article>)}</div></div></section>
  </main>;
}
