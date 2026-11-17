import { CheckCircle2, Clock, ShieldCheck, Smartphone, Laptop, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    icon: Clock,
    title: 'Takes just 2 minutes',
    text: 'Five quick questions. No lengthy sign-up, no paperwork.',
  },
  {
    icon: CheckCircle2,
    title: 'Made for Kerala placements',
    text: 'Questions match what companies in Kochi and beyond actually ask.',
  },
  {
    icon: ShieldCheck,
    title: 'Completely free',
    text: 'No fees, no account needed. Check your readiness in one go.',
  },
];

export default function HomePage({ onStart }: { onStart: () => void }) {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        {/* Hero */}
        <section className="text-center py-10 sm:py-16 lg:py-20">
          <span className="inline-flex items-center gap-1.5 bg-navy-50 text-navy-700 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full border border-navy-100">
            <Sparkles className="w-3.5 h-3.5" />
            Free skill check for Kerala college students
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto">
            Find Your Placement Skill Gap in 2 Minutes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Answer 5 simple questions and get a clear report of what to improve before your next campus interview.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 sm:py-3.5 rounded-lg bg-navy-800 text-white text-base sm:text-lg font-semibold hover:bg-navy-700 active:bg-navy-900 transition-colors duration-150"
            >
              Start Skill Check
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-1.5 text-gray-500 text-sm">
            <Smartphone className="w-4 h-4 hidden sm:block" />
            <Laptop className="w-4 h-4 hidden sm:block" />
            <span>Works on mobile, tablet and desktop</span>
          </div>
        </section>

        {/* Feature cards */}
        <section className="pb-10 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-gray-100 rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy-800 text-white">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
