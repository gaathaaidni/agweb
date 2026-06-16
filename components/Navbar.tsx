
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const productLinks = [
    { name: 'Gaatha Suite', href: '/gaatha-suite', internal: true },
    { name: 'Phoenix', href: '/phoenix', internal: true },
    { name: 'PostPilot', href: '/post-pilot', internal: true },
    { name: 'Media Manager', href: '/media-manager', internal: true },
    { name: 'GaathaAI', href: '/gaatha-ai', internal: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              AIDNI GLOBAL
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-blue-900 font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-200 mx-2" />
            {productLinks.map((link) =>
              link.internal ? (
                <Link key={link.name} href={link.href} className="text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-sm font-medium">
                  {link.name}
                </a>
              )
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-900 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-gray-100" />
              {productLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;