import { skillsForBranchRole } from '@/data';

export interface AIReport {
  readinessScore: number;
  strengths: string[];
  weaknesses: string[];
  matchPercentage: number;
  companyTip: string;
}

export interface RoadmapDay {
  day: number;
  title: string;
  text: string;
}

const GENERIC_STRENGTHS = [
  'You completed the full skill check — that initiative itself sets you apart.',
  'You are clear about your target role, which makes your preparation focused.',
  'You still have time before placement season — a steady week of practice goes a long way.',
];

const GENERIC_WEAKNESSES = [
  'Add at least one mini project to your resume this month.',
  'Practise explaining your solutions out loud in English — interviews test this.',
  'Revise aptitude basics like percentages, ratios and logical reasoning.',
];

const COMPANY_TIPS: Record<string, string> = {
  'UST Kochi': 'Focus on Agile and Cloud basics.',
  'IBS Software': 'Focus on Aviation domain and Java.',
  TCS: 'Focus on Aptitude and Communication.',
  Infosys: 'Focus on OOP and DBMS.',
  Wipro: 'Focus on Coding rounds.',
  'Federal Bank': 'Focus on banking awareness, aptitude and good communication.',
  'Tech Mahindra': 'Focus on coding rounds and core technical basics.',
  'Local Startup': 'Focus on hands-on building, GitHub projects and clear communication.',
  KSEB: 'Focus on power systems fundamentals and Kerala PSC-style technical aptitude.',
};

// Skills each company looks for, mapped per branch where relevant.
const COMPANY_SKILLS: Record<string, string[]> = {
  'UST Kochi': ['React', 'Java', 'SQL', 'Communication'],
  'IBS Software': ['Java', 'SQL', 'Data Structures', 'Communication'],
  TCS: ['Python', 'Communication', 'Data Structures', 'Aptitude'],
  Infosys: ['Java', 'SQL', 'Python', 'Communication'],
  Wipro: ['Python', 'Java', 'Data Structures', 'Communication'],
  'Federal Bank': ['Communication', 'Aptitude', 'SQL', 'Excel'],
  'Tech Mahindra': ['Java', 'Python', 'Data Structures', 'Communication'],
  'Local Startup': ['Python', 'Communication', 'React', 'GitHub'],
  KSEB: ['Power Systems', 'Circuit Analysis', 'Communication', 'Aptitude'],
};

function testScore(answers?: Record<number, 'Yes' | 'No' | 'Learning'>): number | null {
  if (!answers) return null;
  const values = Object.values(answers);
  if (values.length === 0) return null;
  const points = values.map((a) => (a === 'Yes' ? 100 : a === 'Learning' ? 50 : 0));
  return Math.round(points.reduce((sum, p) => sum + p, 0) / points.length);
}

export function generateAIReport(
  selectedSkills: string[],
  branch: string,
  targetRole: string,
  company: string,
  answers?: Record<number, 'Yes' | 'No' | 'Learning'>
): AIReport {
  const required = skillsForBranchRole(branch, targetRole);
  const matched = required.filter((s) => selectedSkills.includes(s.trim()));
  const missing = required.filter((s) => !selectedSkills.includes(s.trim()));

  const skillMatch = required.length > 0 ? Math.round((matched.length / required.length) * 100) : 0;
  const ts = testScore(answers);
  const readinessScore = Math.min(100, Math.max(0, ts === null ? skillMatch : Math.round(skillMatch * 0.6 + ts * 0.4)));

  const strengths = [
    ...matched.map((s) => `Hands-on with ${s.trim()} — a core requirement for ${targetRole} interviews.`),
    ...GENERIC_STRENGTHS,
  ].slice(0, 3);

  const weaknesses = [
    ...missing.map((s) => `${s.trim()} is missing from your profile — most ${targetRole} interviews will test it.`),
    ...GENERIC_WEAKNESSES,
  ].slice(0, 3);

  const companySkills = COMPANY_SKILLS[company] ?? [];
  const matchPercentage =
    companySkills.length > 0
      ? Math.round((companySkills.filter((s) => selectedSkills.includes(s)).length / companySkills.length) * 100)
      : skillMatch;

  return {
    readinessScore,
    strengths,
    weaknesses,
    matchPercentage,
    companyTip: COMPANY_TIPS[company] ?? 'Focus on fundamentals, aptitude practice and mock interviews.',
  };
}

export function getRoadmap(company: string, branch: string, targetRole: string): RoadmapDay[] {
  const tip = COMPANY_TIPS[company] ?? 'research their interview pattern and recent questions.';
  const focus = skillsForBranchRole(branch, targetRole).slice(0, 2).join(' and ');
  return [
    { day: 1, title: 'Basics', text: `Revise the fundamentals of ${branch} and your core skills.` },
    { day: 2, title: 'Core Concepts', text: `Strengthen ${focus} for your ${targetRole} interviews.` },
    { day: 3, title: 'Hands-on Practice', text: 'Solve exercises and write code or solve problems related to your field.' },
    { day: 4, title: 'Project', text: 'Build or polish one mini project you can explain in an interview.' },
    { day: 5, title: 'Mock Test', text: 'Attempt one timed aptitude and technical mock test.' },
    { day: 6, title: `Company Specific (${company})`, text: `Prepare for ${company} — ${tip}` },
    { day: 7, title: 'Revision and Confidence', text: 'Revise everything, rest well and walk in with confidence.' },
  ];
}
