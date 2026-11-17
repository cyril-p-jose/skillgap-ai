import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-16 sm:py-24 flex flex-col items-center justify-center text-center">
        <Loader2 className="w-12 h-12 sm:w-14 sm:h-14 text-navy-800 animate-spin" />
        <h2 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900">AI is preparing your report...</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Analysing your skills, test answers and target company.
        </p>
      </div>
    </div>
  );
}
