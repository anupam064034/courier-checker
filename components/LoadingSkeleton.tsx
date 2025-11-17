export default function LoadingSkeleton() {
  return (
    <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 animate-pulse">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-gray-200 mx-auto"></div>
        <div className="h-8 bg-gray-200 rounded w-32 mx-auto mt-6"></div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-200 p-6 rounded-xl h-20"></div>
        <div className="bg-gray-200 p-6 rounded-xl h-20"></div>
        <div className="bg-gray-200 p-6 rounded-xl h-20"></div>
      </div>
      <div className="overflow-hidden rounded-lg">
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}
