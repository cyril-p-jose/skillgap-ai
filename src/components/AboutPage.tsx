import { GraduationCap, CheckCircle2, Wrench, User } from 'lucide-react';

const FEATURES = [
  'Quick 5 question skill test',
  'AI style readiness score',
  'Strengths and weaknesses report',
  'Company match percentage',
  'Company-specific preparation tips',
  '7 day improvement roadmap',
  'Works on mobile, tablet and desktop',
];

const TECH = [
  { name: 'React', purpose: 'User interface' },
  { name: 'TypeScript', purpose: 'Type safety' },
  { name: 'Vite', purpose: 'Build tool and dev server' },
  { name: 'Tailwind CSS', purpose: 'Styling and responsive design' },
  { name: 'Lucide React', purpose: 'Icons' },
];

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-8 sm:py-12">
        {/* Story */}
        <section className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">About SkillGap AI</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            SkillGap AI started with a simple observation: most college students prepare for placements
            without knowing what they are actually missing. This app gives every student a clear picture
            of their skill gaps in 2 minutes — for free, with no sign-up needed.
          </p>
        </section>

        {/* Features */}
        <section className="mt-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 text-white">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Features</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f} className="bg-gray-100 rounded-xl border border-gray-200 p-5 flex items-start gap-3">
                <span className="mt-0.5 w-2.5 h-2.5 rounded-full bg-green-600 shrink-0" />
                <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mt-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 text-white">
              <Wrench className="w-5 h-5" />
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Tech Stack</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH.map((t) => (
              <div key={t.name} className="bg-gray-100 rounded-xl border border-gray-200 p-5">
                <p className="text-base font-semibold text-gray-900">{t.name}</p>
                <p className="mt-1 text-sm text-gray-600">{t.purpose}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Built by */}
        <section className="mt-10">
          <div className="bg-navy-800 rounded-xl p-6 sm:p-8 text-white">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <h2 className="text-lg sm:text-xl font-semibold">Built by Cyril P Jose</h2>
            </div>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
              A free project for Kerala college students preparing for campus placements.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
