import { useState } from 'react';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import SelectPage from '@/components/SelectPage';
import SkillsPage from '@/components/SkillsPage';
import TestPage from '@/components/TestPage';
import ReportPage from '@/components/ReportPage';
import LoadingScreen from '@/components/LoadingScreen';
import Confetti from '@/components/Confetti';
import { generateAIReport, getRoadmap } from '@/lib/aiEngine';
import type { AIReport, RoadmapDay } from '@/lib/aiEngine';
import type { AnswerMap, Page, Selection } from '@/data';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selection, setSelection] = useState<Selection>({ branch: '', company: '' });
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [skills, setSkills] = useState<string[]>([]);
  const [targetRole, setTargetRole] = useState('');
  const [report, setReport] = useState<AIReport | null>(null);
  const [roadmap, setRoadmap] = useState<RoadmapDay[]>([]);

  const go = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitTest = () => {
    go('loading');
    window.setTimeout(() => {
      setReport(generateAIReport(skills, selection.branch, targetRole, selection.company, answers));
      setRoadmap(getRoadmap(selection.company, selection.branch, targetRole));
      go('report');
    }, 2000);
  };

  const backHome = () => {
    setSelection({ branch: '', company: '' });
    setAnswers({});
    setSkills([]);
    setTargetRole('');
    setReport(null);
    setRoadmap([]);
    go('home');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {page === 'report' && report && report.readinessScore > 80 && <Confetti />}
      <Header onNavigate={go} />
      <main className="flex-1">
        {page === 'home' && <HomePage onStart={() => go('select')} />}
        {page === 'about' && <AboutPage />}
        {page === 'select' && (
          <SelectPage
            selection={selection}
            onChange={(update) => setSelection((s) => ({ ...s, ...update }))}
            onContinue={() => go('skills')}
          />
        )}
        {page === 'skills' && (
          <SkillsPage
            branch={selection.branch}
            skills={skills}
            onToggleSkill={(s) =>
              setSkills((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
            }
            onClearSkills={() => setSkills([])}
            targetRole={targetRole}
            onSelectRole={setTargetRole}
            onContinue={() => go('test')}
          />
        )}
        {page === 'test' && (
          <TestPage
            answers={answers}
            onAnswer={(id, value) => setAnswers((a) => ({ ...a, [id]: value }))}
            onSubmit={submitTest}
          />
        )}
        {page === 'loading' && <LoadingScreen />}
        {page === 'report' && report && (
          <ReportPage
            report={report}
            roadmap={roadmap}
            branch={selection.branch}
            company={selection.company}
            onBackHome={backHome}
          />
        )}
      </main>
      <footer className="border-t border-gray-200 py-5 px-4">
        <p className="mx-auto max-w-[1100px] text-center sm:text-left text-sm text-gray-500">
          SkillGap AI — Free placement readiness check for college students.
        </p>
      </footer>
    </div>
  );
}
