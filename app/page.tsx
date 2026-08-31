import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart3, Globe2, Handshake, LineChart, Search, ShieldCheck, type LucideIcon } from 'lucide-react';

const services: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: 'Market Entry & Strategy', text: 'Evaluate international opportunities, competitors, feasibility, and practical go-to-market plans.', Icon: Globe2 },
  { title: 'Business Development', text: 'Build commercial networks through distributor identification, partner development, and local representation.', Icon: Handshake },
  { title: 'Market Research & Insights', text: 'Sector analysis, pricing studies, demand forecasting, and competitive benchmarking for confident decisions.', Icon: Search },
  { title: 'Investor & Financial Advisory', text: 'Project evaluation, investor introductions, financial structuring guidance, and cross-border facilitation.', Icon: LineChart },
];

const ecosystem = [
  { name: 'Gaatha AI', url: 'https://gaatha.tech', description: 'AI-guided discovery, learning, and decision support designed for clarity and meaningful user outcomes.', type: 'Product', accent: 'from-blue-600 to-cyan-500' },
  { name: 'Gaatha Suite', url: 'https://gaathasuite.gaatha.tech', description: 'An integrated operating system for finance, sales, operations, payroll, and service teams in one place.', type: 'Product', accent: 'from-indigo-600 to-blue-500' },
  { name: 'Sentira AI', url: 'https://sentira.gaatha.tech', description: 'Visual intelligence for CCTV and monitoring infrastructure, enabling faster awareness and response.', type: 'Product', accent: 'from-violet-600 to-fuchsia-500' },
  { name: 'Phoenix', url: 'https://phoenix.gaatha.tech', description: 'Global opportunity pathways for investment, migration, and international growth strategies.', type: 'Product', accent: 'from-amber-500 to-orange-500' },
  { name: 'CGS', url: 'https://cgs.gaatha.tech', description: 'Consumer-rights advocacy and welfare action focused on awareness, protection, and public trust.', type: 'CSR', accent: 'from-emerald-500 to-teal-500' },
  { name: 'MANS', url: 'https://mans.gaatha.tech', description: 'Women’s safety, protection, and empowerment initiatives rooted in dignity, support, and legal access.', type: 'CSR', accent: 'from-pink-500 to-rose-500' },
  { name: 'CCT', url: 'https://cct.gaatha.tech', description: 'Community-driven development programs in education, healthcare, environment, and social care.', type: 'CSR', accent: 'from-green-600 to-lime-500' },
];

const steps = ['Market Study & Feasibility', 'Strategic Planning', 'Partner Identification', 'Execution & Follow-up', 'Long-term Support'];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#60a5fa,transparent_30%),radial-gradient(circle_at_80%_10%,#22d3ee,transparent_25%)]" />
        <div className="section-container relative py-24 lg:py-32 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Built for global growth
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-blue-200">Innovation Driven. Globally Focused.</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Build smarter. Grow globally. Create lasting impact.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">Aidni Global helps founders, SMEs, investors, and strategic partners expand through advisory excellence, AI-powered platforms, and a connected ecosystem designed for measurable growth.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-blue-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">Book a consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              <Link href="/gaatha-suite" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 font-bold text-white transition hover:bg-white/10">Explore our ecosystem</Link>
            </div>
            <div className="mt-10 grid max-w-xl gap-5 sm:grid-cols-3">
              {[
                ['20+', 'Global markets'],
                ['4', 'Core product pillars'],
                ['7', 'CSR & social initiatives'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-blue-200">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-white/10 shadow-[0_20px_50px_rgba(96,165,250,0.3)]">
              <Image 
                src="/images/hero-bg.png" 
                alt="Aidni Global Ecosystem" 
                width={800} 
                height={600} 
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
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

      <section className="bg-slate-50 py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="kicker">Our Ecosystem</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Purpose-built platforms for growth, intelligence, and impact</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ecosystem.map((item, index) => (
              <article key={item.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700">{item.type}</span>
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-slate-900">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center font-bold text-blue-700 transition group-hover:text-blue-900">Visit website <ArrowRight className="ml-2 h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
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
