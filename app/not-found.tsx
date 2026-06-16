import Link from 'next/link';
import { FileQuestion, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 bg-white">
      <div className="text-center">
        <div className="inline-flex p-4 rounded-full bg-blue-50 text-blue-600 mb-6">
          <FileQuestion size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <Home size={20} />
          Return to Home
        </Link>
      </div>
    </main>
  );
}