export const metadata = {
  title: 'Sentira AI',
  description: 'Intelligent video monitoring and visual intelligence by Aidni Global.',
};

const features = [
  'AI-driven CCTV monitoring and event detection',
  'Real-time visual intelligence for security and operations',
  'Smart alerts for unusual activity, incidents, and risk patterns',
  'Scalable deployment for enterprise, infrastructure, and commercial environments',
];

export default function SentiraAIPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 text-white">
        <div className="section-container">
          <p className="kicker text-blue-300">Sentira AI</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Intelligent video monitoring for safer operations</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Sentira AI transforms everyday camera feeds into active visual intelligence, helping organizations detect, respond, and learn from meaningful events faster.
          </p>
          <a
            href="https://sentira.gaatha.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-slate-950"
          >
            Visit Sentira AI
          </a>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">What it does</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">From passive surveillance to active decision support</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Sentira AI is designed to turn CCTV and monitoring networks into more valuable operational assets. By using intelligent event detection and visual analytics, organizations can improve awareness and reduce response delays.
            </p>
          </div>
          <div className="rounded-3xl bg-blue-50 p-8">
            <ul className="space-y-4 text-slate-700">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
