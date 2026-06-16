import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aidniglobal.in'),
  title: {
    default: 'Aidni Global | Strategy, Technology, and Global Partnerships',
    template: '%s | Aidni Global',
  },
  description:
    'Aidni Global LLP helps startups, SMEs, investors, and global partners with market entry, business development, investment facilitation, and SaaS platforms.',
  applicationName: 'Aidni Global',
  openGraph: {
    title: 'Aidni Global',
    description: 'Innovation Driven. Globally Focused.',
    url: 'https://aidniglobal.in',
    siteName: 'Aidni Global',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
