import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aidniglobal.in"),
  title: {
    default: "Aidni Global | Innovation Driven. Globally Focused.",
    template: "%s | Aidni Global"
  },
  description: "Strategic consulting, cross-border business development, and innovative SaaS platforms under the Gaatha ecosystem.",
  keywords: ["strategic consulting", "business development", "market entry", "SaaS platforms", "India", "Europe", "UAE", "Gaatha ecosystem"],
  openGraph: {
    title: "Aidni Global",
    description: "Innovation Driven. Globally Focused. Strategic consulting and SaaS platforms.",
    url: "https://aidniglobal.in",
    siteName: "Aidni Global",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aidni Global - Innovation Driven. Globally Focused.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidni Global",
    description: "Innovation Driven. Globally Focused. Strategic consulting and SaaS platforms.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aidni Global",
    "url": "https://aidniglobal.in",
    "logo": "https://aidniglobal.in/icon.png",
    "description": "Innovation Driven. Globally Focused. Strategic consulting and SaaS platforms under the Gaatha ecosystem.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "407-408, Patel Avenue, SG highway",
      "addressLocality": "Ahmedabad",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 79 3590 8656",
        "contactType": "customer service"
      }
    ]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(jsonLd) 
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}