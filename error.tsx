'use client';

import { useEffect } from 'react';

export default function GaathaAiError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-red-50 text-red-800 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Something went wrong with Gaatha AI!</h2>
      <p className="mb-6">{error.message}</p>
      <button
        className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}