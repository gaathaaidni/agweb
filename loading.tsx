export default function GaathaAiLoading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="text-lg text-gray-600">Loading Gaatha AI...</p>
      </div>
    </div>
  );
}