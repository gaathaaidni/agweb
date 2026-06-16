import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aidni Global | Innovation Driven. Globally Focused.",
  description: "Strategic consulting, cross-border business development, and innovative SaaS platforms under the Gaatha ecosystem.",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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