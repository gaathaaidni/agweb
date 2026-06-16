import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Rocket, Globe, Package, Zap } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbJsonLd from '../../BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Gaatha Suite | All-in-One Business Management Platform",
  description: "Streamline your MSME operations with Gaatha Suite. Integrated tools for accounting, CRM, inventory, and payroll designed for global business growth.",
  alternates: {
    canonical: "/gaatha-suite",
  },
};

const apps = [
  { name: "Nexora Books", desc: "Accounting, invoicing & financial reports" },
  { name: "Nexora CRM", desc: "Leads, deals & sales pipeline" },
  { name: "Nexora Inventory", desc: "Stock & warehouse management" },
  { name: "Nexora POS", desc: "Retail billing & point of sale" },
  { name: "Nexora HR", desc: "Employee & role management" },
  { name: "Nexora Payroll", desc: "Salary automation & payslips" },
  { name: "Nexora Pay", desc: "Payments, invoices & transactions" },
  { name: "Nexora Desk", desc: "Customer support & ticketing" },
  { name: "Nexora Projects", desc: "Tasks & project tracking" },
];

export default function GaathaSuitePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Gaatha Suite', item: '/gaatha-suite' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <Image 
                src="/images/gaatha-suite/cropped-cropped-img-20250519-103858-748.webp" 
                alt="Gaatha Suite Logo"
                fill
                className="rounded-2xl shadow-sm object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">Gaatha Suite</h1>
          <p className="text-2xl text-gray-600 mb-10">One platform. Every business tool you need.</p>
          <div className="flex flex-col items-center gap-4">
            <a href="https://gaathasuite.gaatha.tech" target="_blank" className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center gap-2">
              <Rocket className="w-5 h-5" /> Access Nexora Suite (Beta)
            </a>
            <p className="text-sm text-gray-400">Built by Aidni Global LLP • Serving MSMEs across globe</p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 What is Nexora Suite?</h2>
        <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-center">
          <p>Nexora Suite is an all-in-one business management platform designed for startups, MSMEs, and growing enterprises.</p>
          <p>From accounting to sales, inventory, payroll, and customer support — Nexora brings all your essential business tools into one simple, unified dashboard.</p>
          <p className="font-semibold text-blue-900">No complexity. No unnecessary features. Just software that works the way businesses actually operate.</p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Package className="text-blue-600" /> Included Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div key={app.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">{app.name}</h4>
                  <p className="text-gray-600 text-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-900 rounded-3xl p-12 text-white text-center mb-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 bg-blue-500 text-xs font-bold uppercase tracking-widest rounded-bl-xl">Beta Phase</div>
            <h2 className="text-3xl font-bold mb-6">🧪 Beta Access – 100% Free</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="p-4 bg-white/10 rounded-lg">Full access to all modules</div>
              <div className="p-4 bg-white/10 rounded-lg">No credit card required</div>
              <div className="p-4 bg-white/10 rounded-lg">Unlimited testing & feedback</div>
            </div>
            <p className="text-blue-200 mb-8 font-mono">Free until: 26 April 2026 | Official Launch: 27 April 2026</p>
            <a href="https://gaathasuite.gaatha.tech" target="_blank" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block">
              Start Using Nexora Beta Now
            </a>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">💼 Post-Launch Pricing</h3>
            <p className="text-gray-500 italic">Pricing subject to change at launch.</p>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">Plan</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Price</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-6 py-4 font-medium">Free</td><td className="px-6 py-4 font-bold">€0</td><td className="px-6 py-4 text-gray-600 text-sm">Basic tools, limited users</td></tr>
                <tr><td className="px-6 py-4 font-medium">Basic</td><td className="px-6 py-4 font-bold">€14 / mo</td><td className="px-6 py-4 text-gray-600 text-sm">Core business applications</td></tr>
                <tr className="bg-blue-50/30"><td className="px-6 py-4 font-bold text-blue-600">Business</td><td className="px-6 py-4 font-bold text-blue-600">€29 / mo</td><td className="px-6 py-4 text-gray-600 text-sm">All apps, unlimited users</td></tr>
                <tr><td className="px-6 py-4 font-medium">Enterprise</td><td className="px-6 py-4 font-bold">€59 / mo</td><td className="px-6 py-4 text-gray-600 text-sm">Advanced automation & priority support</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3"><Zap className="text-yellow-400" /> Our Vision</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-12">
            At Aidni Global LLP, our vision is to build a complete SaaS ecosystem that empowers millions of businesses worldwide. Nexora Suite is our first major step toward democratizing business automation.
          </p>
        </div>
      </section>
    </main>
  );
}