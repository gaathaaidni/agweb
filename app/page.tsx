import Link from 'next/link';
import { ArrowRight, BarChart3, Globe2, Handshake, LineChart, Search, ShieldCheck, type LucideIcon } from 'lucide-react';

const services: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: 'Market Entry & Strategy', text: 'Evaluate international opportunities, competitors, feasibility, and practical go-to-market plans.', Icon: Globe2 },
  { title: 'Business Development', text: 'Build commercial networks through distributor identification, partner development, and local representation.', Icon: Handshake },
  { title: 'Market Research & Insights', text: 'Sector analysis, pricing studies, demand forecasting, and competitive benchmarking for confident decisions.', Icon: Search },
  { title: 'Investor & Financial Advisory', text: 'Project evaluation, investor introductions, financial structuring guidance, and cross-border facilitation.', Icon: LineChart },
];

const steps = ['Market Study & Feasibility', 'Strategic Planning', 'Partner Identification', 'Execution & Follow-up', 'Long-term Support'];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#60a5fa,transparent_30%),radial-gradient(circle_at_80%_10%,#22d3ee,transparent_25%)]" />
        <div className="section-container relative py-24 lg:py-32">
          <div className="max-w-4xl">
            <p className="kicker text-blue-200">Innovation Driven. Globally Focused.</p>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">Strategy, Technology, and Partnerships for Global Growth</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">We support startups, SMEs, investors, and global partners through strategic consulting, cross-border business development, and innovative SaaS platforms under the Gaatha ecosystem.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-blue-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">Contact Me <ArrowRight className="ml-2 h-5 w-5" /></Link>
              <Link href="/gaatha-suite" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 font-bold text-white transition hover:bg-white/10">Explore Gaatha Suite</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-blue-50 p-8 shadow-inner">
            <BarChart3 className="h-20 w-20 text-blue-700" />
            <h2 className="mt-6 text-3xl font-black text-slate-950">Aidni Global LLP</h2>
            <p className="mt-4 text-slate-600">An international consulting and business development firm helping companies expand into new markets, build distribution networks, and establish strategic global partnerships.</p>
          </div>
          <div>
            <p className="kicker">About us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Local insight with international execution support</h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>At Aidni Global, we combine market research, strategic planning, and on-ground business development to help companies expand across borders.</p>
              <p>Our international network spans India, Europe, the UAE, and Asia-Pacific, enabling local insights, reliable partnerships, and practical execution support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-container">
          <p className="kicker">Our Services</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Strategic support to enter and scale in new markets</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, text, Icon }) => (
              <article key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                <Icon className="h-10 w-10 text-blue-700" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Working Process</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">How We Work</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Our approach blends research, strategy, and execution to deliver measurable results through an expanding international network of partners and representatives across key markets.</p>
          </div>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">{index + 1}</span><span className="font-bold text-slate-800">{step}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-blue-950 py-20 text-white">
        <div className="section-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <ShieldCheck className="h-12 w-12 text-blue-300" />
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">Our Global Presence</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">We connect businesses across India, Europe, the Middle East, and Asia-Pacific, helping organizations access new opportunities and build reliable cross-border partnerships.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15">
            <h3 className="text-2xl font-bold">Stay In Touch</h3>
            <p className="mt-3 text-blue-100">For enquiries, collaborations, or investment support — connect with us anytime.</p>
            <div className="mt-6 space-y-2 font-semibold"><p>📧 office@aidniglobal.in</p><p>📱 +91 90990 28291</p><p>🌐 aidniglobal.in</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
