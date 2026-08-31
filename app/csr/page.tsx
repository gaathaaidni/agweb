export const metadata = {
  title: 'CSR Initiatives',
  description: 'Community support, welfare, and social impact initiatives under the Gaatha ecosystem.',
};

const initiatives = [
  {
    name: 'CGS',
    url: 'https://cgs.gaatha.tech',
    description: 'Chamunda Grahak Suraksha Mandal works to protect consumer rights, raise public awareness, and strengthen welfare-focused action in society.',
  },
  {
    name: 'MANS',
    url: 'https://mans.gaatha.tech',
    description: 'Mahila Atyachar Nivaran Samiti is committed to women’s protection, dignity, legal support, and empowerment across vulnerable communities.',
  },
  {
    name: 'CCT',
    url: 'https://cct.gaatha.tech',
    description: 'Chintan Charitable Trust promotes education, healthcare, environmental responsibility, and inclusive community development.',
  },
];

export default function CSRPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="section-container">
          <p className="kicker text-emerald-200">CSR & Social Impact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">Purpose-led action for people, rights, and community wellbeing</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-100">
            Through the Gaatha ecosystem, we support initiatives that secure consumer rights, protect women, uplift communities, and create a more informed and resilient society.
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {initiatives.map((initiative) => (
            <article key={initiative.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">CSR</span>
              <h2 className="mt-4 text-2xl font-black text-slate-900">{initiative.name}</h2>
              <p className="mt-3 text-slate-600 leading-7">{initiative.description}</p>
              <a
                href={initiative.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900"
              >
                Visit initiative
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
