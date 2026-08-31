'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();
  const isEcosystemPage = pathname.includes('gaatha') || pathname.includes('phoenix');

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="relative flex items-center group h-14">
              <div className="relative w-full h-full flex items-center">
                <Image
                  src="/images/logos/aidni-logo.webp"
                  alt="Aidni Global"
                  width={120}
                  height={120}
                  sizes="40px"
                  className={`absolute left-0 h-9 md:h-11 w-auto object-contain transition-all duration-500 ease-in-out brightness-0 invert group-hover:opacity-80 ${isEcosystemPage ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
                  loading="lazy"
                />
                <Image
                  src="/images/logos/gaatha-phoenix-logo.png"
                  alt="Gaatha & Phoenix Ecosystem"
                  width={120}
                  height={120}
                  sizes="56px"
                  className={`absolute left-0 h-12 md:h-14 w-auto object-contain transition-all duration-500 ease-in-out group-hover:opacity-80 ${isEcosystemPage ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Innovation Driven. Globally Focused. We specialize in strategic consulting, cross-border business development, and innovative SaaS solutions through our Gaatha ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Our Ecosystem */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Our Ecosystem</h3>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/gaatha-ai" className="hover:text-white transition-colors text-sm">Gaatha AI</Link></li>
              <li><Link href="/gaatha-suite" className="hover:text-white transition-colors text-sm">Gaatha Suite</Link></li>
              <li><Link href="/sentira-ai" className="hover:text-white transition-colors text-sm">Sentira AI</Link></li>
              <li><Link href="/phoenix" className="hover:text-white transition-colors text-sm">Phoenix</Link></li>
              <li><Link href="/csr" className="hover:text-white transition-colors text-sm">CSR</Link></li>
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
                <p>gaatha.aidni@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>Copyright © {new Date().getFullYear()} Aidni Global LLP • Designed by Hardikkumar Gajjar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;