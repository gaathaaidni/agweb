import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">AIDNI GLOBAL</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Innovation Driven. Globally Focused. We specialize in strategic consulting, cross-border business development, and innovative SaaS solutions through our Gaatha ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors text-sm">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Our Ecosystem */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Our Ecosystem</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/gaatha-suite" className="hover:text-white transition-colors text-sm">Gaatha Suite</Link></li>
              <li><Link href="/phoenix" className="hover:text-white transition-colors text-sm">Phoenix</Link></li>
              <li><a href="https://gaatha.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">GaathaAI</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6 text-blue-400">Contact Details</h3>
            <div className="flex items-start space-x-3 text-slate-300">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
              <p className="text-sm">407-408, Patel Avenue, SG highway, Ahmedabad. India</p>
            </div>
            <div className="flex items-start space-x-3 text-slate-300">
              <Phone className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
              <div className="text-sm space-y-1">
                <p>+91 79 3590 8656</p>
                <p>+91 98257 28291</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-slate-300">
              <Mail className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
              <div className="text-sm space-y-1">
                <p>info@aidniglobal.in</p>
                <p>office@aidniglobal.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>Copyright © 2026 Aidni Global LLP Designed by Hardikkumar Gajjar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;