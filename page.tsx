import Image from 'next/image';
import { Target, Users, Search, Briefcase, Globe, Mail, Phone } from 'lucide-react';
import BreadcrumbJsonLd from '../../BreadcrumbJsonLd';

export default function AboutPage() {
  const competencies = [
    { title: "Market Entry Strategy", desc: "Go-to-market design, competition analysis, feasibility studies, and expansion planning.", icon: <Target className="w-6 h-6 text-blue-600" /> },
    { title: "Business Development & Partner Search", desc: "Identifying distributors, agents, institutional partners, and B2B opportunities.", icon: <Users className="w-6 h-6 text-blue-600" /> },
    { title: "Market Research & Insights", desc: "Custom sector reports, pricing studies, demand forecasting, and competitive benchmarking.", icon: <Search className="w-6 h-6 text-blue-600" /> },
    { title: "Investor & Financial Advisory", desc: "Investor introductions, project evaluation, and cross-border business facilitation.", icon: <Briefcase className="w-6 h-6 text-blue-600" /> },
    { title: "International Project Management", desc: "On-ground coordination across India, Canada, Europe, and Asia.", icon: <Globe className="w-6 h-6 text-blue-600" /> },
  ];

  const testimonials = [
    { name: "Blessmon Samuel", text: "Clear strategy and end-to-end assistance. Highly recommended for global expansion.", role: "Client", avatar: "/images/testimonials/male-3.jpg" },
    { name: "Jenna Smith", text: "Professional team, deep market insights, and excellent support throughout our expansion process.", role: "Client", avatar: "/images/testimonials/female-3.jpg" },
    { name: "Stevens", text: "Strong network and reliable advisory for cross-border projects.", role: "Client", avatar: "/images/testimonials/male-1.jpg" },
  ];

  return (
    <main className="flex flex-col">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about' }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aidni Global</h1>
          <p className="text-xl text-blue-100">Expanding Businesses Across Borders With Strategic Insight</p>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Aidni Global LLP is an international business development and consulting firm helping companies expand into India, South America, Europe, and the UAE. We specialize in market entry, research, distribution planning, investor facilitation, and cross-border business advisory.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-blue-600 pl-4">
                Our mission is to create sustainable global pathways for SMEs, exporters, startups, technology firms, and investment ventures through clear strategy and hands-on execution.
              </p>
              <p className="text-lg text-gray-700">
                We blend global networks with local expertise, enabling our clients to enter new markets with confidence and clarity.
              </p>
              <div className="pt-4">
                <a href="mailto:office@aidniglobal.in" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
                  <Mail className="w-5 h-5" /> Let&apos;s talk with us: office@aidniglobal.in
                </a>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-2xl h-80 overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src="/images/about/team-photo.jpg" 
                alt="Aidni Global Team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Company Philosophy</h2>
          <h3 className="text-2xl text-blue-800 font-semibold mb-6">We Create Growth, Not Just Strategies</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Aidni Global, we don’t deliver generic consulting reports — we build actionable plans. From industry analysis to distributor onboarding, investor connections, and local representation, we focus on real outcomes that help your business scale globally.
          </p>
          <p className="text-gray-500 italic">
            Our work spans multiple industries including technology, manufacturing, food & retail, logistics, services, and export-driven businesses.
          </p>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((item, index) => (
              <div key={index} className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <p className="text-lg italic mb-8">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/30 shrink-0">
                    <Image 
                      src={t.avatar} 
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-blue-300">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Simple */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Stay In Touch</h2>
        <p className="text-lg text-gray-600 mb-8">For consulting, business development, market research, or investment facilitation, contact us anytime.</p>
        <div className="flex flex-col items-center gap-4 text-xl font-medium">
          <a href="mailto:office@aidniglobal.in" className="flex items-center gap-2 text-blue-600 hover:underline"><Mail /> office@aidniglobal.in</a>
          <a href="tel:+919099028291" className="flex items-center gap-2 text-blue-600 hover:underline"><Phone /> +91 90990 28291</a>
        </div>
      </section>
    </main>
  );
}