export const metadata = {
  title: 'Gaatha AI',
  description: 'Intelligent guidance, discovery, and AI-powered experiences under the Gaatha ecosystem.',
};

const pillars = [
  'Grounded AI experiences that provide clear, relevant guidance',
  'Human-centered discovery for learning, decision-making, and everyday support',
  'Secure, scalable intelligence designed for modern digital experiences',
  'A bridge between traditional wisdom and practical modern problem solving',
];

export default function GaathaAiPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="section-container">
          <p className="kicker text-blue-200">Gaatha AI</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">AI for clarity, guidance, and smarter decisions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Gaatha AI brings intelligent conversations and thoughtful digital experiences to users looking for better answers, faster discovery, and practical support across life, learning, and business.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="https://gaatha.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-blue-950">
              Visit Gaatha AI
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 font-bold text-white">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Why it matters</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">A modern AI experience built for thoughtful engagement</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Gaatha AI is designed to move beyond generic automation. It is focused on relevance, trust, and clarity — creating digital experiences that feel useful, grounded, and aligned with real human needs.
            </p>
          </div>
          <div className="rounded-3xl bg-blue-50 p-8">
            <ul className="space-y-4 text-slate-700">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

