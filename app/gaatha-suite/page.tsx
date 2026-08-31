import ProductJsonLd from '../../components/ProductJsonLd';

const apps = [
  'Gaatha Books – Accounting, invoicing & financial reports',
  'Gaatha CRM – Leads, deals & sales pipeline',
  'Gaatha Inventory – Stock & warehouse management',
  'Gaatha POS – Retail billing & point of sale',
  'Gaatha HR – Employee & role management',
  'Gaatha Payroll – Salary automation & payslips',
  'Gaatha Pay – Payments, invoices & transactions',
  'Gaatha Desk – Customer support & ticketing',
  'Gaatha Projects – Tasks & project tracking',
];

const pricing = [
  ['Free', '€0', 'Basic tools, limited users'],
  ['Basic', '€14 / month', 'Core business applications'],
  ['Business', '€29 / month', 'All apps, unlimited users'],
  ['Enterprise', '€59 / month', 'Advanced automation & priority support'],
];

export const metadata = {
  title: 'Gaatha Suite',
  description: 'Gaatha Suite is a unified business management platform for startups, MSMEs, and growing enterprises.',
};

export default function GaathaSuitePage() {
  return (
    <main>
      <ProductJsonLd
        name="Gaatha Suite"
        description="An all-in-one business management platform designed for startups, MSMEs, and growing enterprises."
        url="/gaatha-suite"
      />

      <section className="bg-blue-950 py-20 text-white">
        <div className="section-container">
          <p className="kicker text-blue-300">Gaatha Suite</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">One platform for every business operation</h1>
          <p className="mt-5 max-w-3xl text-xl text-blue-100">
            Built for ambitious businesses that need finance, sales, operations, payroll, and customer service in one connected system.
          </p>
          <a
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-blue-950"
            href="https://gaathasuite.gaatha.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access Gaatha Suite
          </a>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">What it is</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">A smarter way to run your business</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Gaatha Suite brings critical business tools into a single operational dashboard. Instead of managing disconnected software, teams can work from one place across accounting, customer management, inventory, payroll, and service delivery.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {apps.map((app) => (
                <div key={app} className="rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 shadow-sm">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-container">
          <h2 className="text-3xl font-black">Flexible access for growing businesses</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Full access to all modules, no credit card required, unlimited testing and feedback. Built for early adoption and long-term scale.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {pricing.map(([plan, price, inc]) => (
              <div key={plan} className="grid gap-2 border-b border-slate-200 p-5 md:grid-cols-3">
                <b className="text-slate-900">{plan}</b>
                <span className="font-semibold text-slate-800">{price}</span>
                <span className="text-slate-600">{inc}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-700">
            Need help or want to partner? Email <b>gaatha.ai@gmail.com</b> or contact Aidni Global for onboarding and collaboration.
          </p>
        </div>
      </section>
    </main>
  );
}
