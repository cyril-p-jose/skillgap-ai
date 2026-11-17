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

const ROLE_REQUIRED_SKILLS: Record<string, string[]> = {
  'Frontend Developer': ['React', 'Data Structures', 'Communication'],
  'Backend Developer': ['Java', 'SQL', 'Data Structures'],
  'Data Analyst': ['Python', 'SQL', 'Communication'],
  'Full Stack Developer': ['React', 'Java', 'SQL'],
  'Any Role': ['React', 'Python', 'Java', 'SQL', 'Data Structures', 'Communication'],
};

const COMPANY_PREFERRED_SKILLS: Record<string, string[]> = {
  'UST Kochi': ['React', 'Java', 'SQL', 'Communication'],
  'IBS Software': ['Java', 'SQL', 'Data Structures'],
  TCS: ['Python', 'Communication', 'Data Structures'],
  Infosys: ['Java', 'SQL', 'Python'],
  Wipro: ['Python', 'Java', 'Data Structures'],
};

const COMPANY_TIPS: Record<string, string> = {
  'UST Kochi': 'Focus on Agile and Cloud basics.',
  'IBS Software': 'Focus on Aviation domain and Java.',
  TCS: 'Focus on Aptitude and Communication.',
  Infosys: 'Focus on OOP and DBMS.',
  Wipro: 'Focus on Coding rounds.',
};

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

function requiredSkillsFor(targetRole: string): string[] {
  return ROLE_REQUIRED_SKILLS[targetRole] ?? ROLE_REQUIRED_SKILLS['Any Role'];
}

function testScore(answers?: Record<number, 'Yes' | 'No' | 'Learning'>): number | null {
  if (!answers) return null;
  const values = Object.values(answers);
  if (values.length === 0) return null;
  const points = values.map((a) => (a === 'Yes' ? 100 : a === 'Learning' ? 50 : 0));
  return Math.round(points.reduce((sum, p) => sum + p, 0) / points.length);
}

function baseScore(skills: string[], targetRole: string, answers?: Record<number, 'Yes' | 'No' | 'Learning'>): number {
  if (skills.includes('React') && targetRole === 'Frontend Developer') return 85;
  if (skills.includes('Python') && targetRole === 'Data Analyst') return 88;
  if (skills.includes('Java') && targetRole === 'Backend Developer') return 80;

  const required = requiredSkillsFor(targetRole);
  const matched = required.filter((s) => skills.includes(s)).length;
  const skillMatch = Math.round((matched / required.length) * 100);

  const ts = testScore(answers);
  if (ts === null) return skillMatch;
  return Math.round(skillMatch * 0.6 + ts * 0.4);
}

export function generateAIReport(
  skills: string[],
  targetRole: string,
  company: string,
  answers?: Record<number, 'Yes' | 'No' | 'Learning'>
): AIReport {
  const required = requiredSkillsFor(targetRole);
  const matched = required.filter((s) => skills.includes(s));
  const missing = required.filter((s) => !skills.includes(s));

  const strengths = [
    ...matched.map((s) => `Hands-on with ${s} — a core requirement for ${targetRole} interviews.`),
    ...GENERIC_STRENGTHS,
  ].slice(0, 3);

  const weaknesses = [
    ...missing.map((s) => `${s} is missing from your profile — most ${targetRole} interviews will test it.`),
    ...GENERIC_WEAKNESSES,
  ].slice(0, 3);

  const preferred = COMPANY_PREFERRED_SKILLS[company];
  let matchPercentage: number;
  if (preferred) {
    const matchedCompany = preferred.filter((s) => skills.includes(s)).length;
    matchPercentage = Math.round((matchedCompany / preferred.length) * 100);
  } else {
    const all = ROLE_REQUIRED_SKILLS['Any Role'];
    const matchedAll = all.filter((s) => skills.includes(s)).length;
    matchPercentage = Math.round((matchedAll / all.length) * 100);
  }

  const readinessScore = Math.min(100, Math.max(0, baseScore(skills, targetRole, answers)));

  return {
    readinessScore,
    strengths,
    weaknesses,
    matchPercentage,
    companyTip: COMPANY_TIPS[company] ?? 'Focus on fundamentals, aptitude practice and mock interviews.',
  };
}

export function getRoadmap(company: string): RoadmapDay[] {
  return [
    { day: 1, title: 'Basics', text: 'Revise the fundamentals of your core subjects and chosen skills.' },
    { day: 2, title: 'Core Concepts', text: 'Go deeper into OOP, DBMS and data structures concepts.' },
    { day: 3, title: 'Hands-on Practice', text: 'Solve coding exercises and practise SQL queries.' },
    { day: 4, title: 'Project', text: 'Build or polish one mini project you can explain in an interview.' },
    { day: 5, title: 'Mock Test', text: 'Attempt one timed aptitude and coding mock test.' },
    { day: 6, title: `Company Specific (${company})`, text: `Prepare for ${company} — ${COMPANY_TIPS[company] ?? 'research their interview pattern and recent questions.'}` },
    { day: 7, title: 'Revision and Confidence', text: 'Revise everything, rest well and walk in with confidence.' },
  ];
}
