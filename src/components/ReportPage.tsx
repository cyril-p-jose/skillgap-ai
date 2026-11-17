import { CheckCircle2, TrendingUp, Lightbulb, CalendarDays } from 'lucide-react';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';
import type { AIReport, RoadmapDay } from '@/lib/aiEngine';

interface Props {
  report: AIReport;
  roadmap: RoadmapDay[];
  branch: string;
  company: string;
  onBackHome: () => void;
}

function ReadinessCircle({ score }: { score: number }) {
  const size = 180;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e4f8c"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl sm:text-5xl font-extrabold text-navy-800">{score}%</span>
        <span className="mt-1 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Readiness</span>
      </div>
    </div>
  );
}

function MatchBar({ pct }: { pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm font-medium text-gray-600">
        <span>Company match</span>
        <span className="text-navy-800 font-semibold">{pct}%</span>
      </div>
      <div className="mt-2 h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-navy-700 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ReportPage({ report, roadmap, branch, company, onBackHome }: Props) {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Your AI Placement Report</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          {branch} student targeting <span className="font-semibold text-gray-900">{company}</span>
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Score card */}
          <div className="bg-gray-100 rounded-xl border border-gray-200 p-6 sm:p-8 flex flex-col items-center text-center">
            <ReadinessCircle score={report.readinessScore} />
            <div className="mt-5 w-full">
              <MatchBar pct={report.matchPercentage} />
            </div>
            <div className="mt-5 flex items-center gap-2 text-gray-700">
              <TrendingUp className="w-5 h-5 text-navy-700" />
              <p className="text-sm sm:text-base font-medium">
                {report.readinessScore >= 80
                  ? 'Great job! You are close to placement-ready.'
                  : report.readinessScore >= 40
                  ? 'Decent base. Fix the gaps below to stand out.'
                  : 'Plenty of room to grow — start with the gaps below.'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Strengths */}
            <div className="bg-green-50 rounded-xl border border-green-200 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-600 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Your Strengths</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {report.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-green-600 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="bg-red-50 rounded-xl border border-red-200 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-red-600 text-white">
                  <TrendingUp className="w-5 h-5 -scale-y-100" />
                </span>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Your Weaknesses</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {report.weaknesses.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company tip */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500 text-white">
                  <Lightbulb className="w-5 h-5" />
                </span>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Company Tip — {company}</h2>
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-800 leading-relaxed">{report.companyTip}</p>
            </div>
          </div>
        </div>

        {/* 7 Day Roadmap */}
        <section className="mt-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 text-white">
              <CalendarDays className="w-5 h-5" />
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Your 7 Day Roadmap</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmap.map((d) => (
              <div
                key={d.day}
                className="bg-gray-100 rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-200"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-800 text-white text-sm font-bold">
                  {d.day}
                </span>
                <h3 className="mt-3 text-base font-semibold text-gray-900">{d.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-start gap-3">
          <button
            onClick={onBackHome}
            className="w-full sm:w-auto px-10 py-4 sm:py-3.5 rounded-lg bg-navy-800 text-white text-base sm:text-lg font-semibold hover:bg-navy-700 active:bg-navy-900 transition-colors duration-150"
          >
            Back to Home
          </button>
          <WhatsAppShareButton
            text={`I scored ${report.readinessScore}% placement readiness for ${company} on SkillGap AI! Check your skill gap too.`}
          />
        </div>
      </div>
    </div>
  );
}
