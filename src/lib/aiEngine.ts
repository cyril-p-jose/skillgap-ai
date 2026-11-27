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
  Accenture: 'Focus on communication, pseudocode and aptitude.',
  Cognizant: 'Focus on coding assessment and SQL basics.',
  'Tech Mahindra': 'Focus on coding rounds and core technical basics.',
  Capgemini: 'Focus on aptitude, pseudocode and game-based assessment.',
  HCL: 'Focus on technical coding and HR rounds.',
  'Federal Bank': 'Focus on banking awareness, aptitude and good communication.',
  Amazon: 'Practise medium/hard LeetCode DSA and learn leadership principles.',
  'Goldman Sachs': 'Sharpen DSA, maths puzzles and basic finance concepts.',
  Oracle: 'Revise SQL, DBMS, Java and DSA in depth.',
  Microsoft: 'Practise DSA, system design basics and clear problem-solving explanation.',
  SAP: 'Learn Java, ABAP basics and cloud fundamentals.',
  BEL: 'Revise core electronics, digital circuits and attempt previous technical papers.',
  BHEL: 'Prepare GATE-style technical and aptitude questions for your core.',
  ISRO: 'Strengthen core technical fundamentals and electronics basics.',
  Keltron: 'Revise electronics core and practise Kerala PSC-style technical aptitude.',
  Qualcomm: 'Practise embedded C, data structures and digital electronics problems.',
  'Texas Instruments': 'Focus on analog circuits, digital design and embedded basics.',
  Nokia: 'Revise networking, wireless concepts and C/Python coding.',
  KSEB: 'Focus on power systems fundamentals and Kerala PSC-style technical aptitude.',
  NTPC: 'Prepare GATE-style technical and aptitude questions for power systems.',
  'Cochin Shipyard': 'Revise core mechanical/civil and industrial safety basics.',
  'Ashok Leyland': 'Focus on design, thermodynamics and manufacturing fundamentals.',
  'Tata Motors': 'Practise CAD, manufacturing processes and GD&T basics.',
  'Maruti Suzuki': 'Focus on production, quality control and CAD tools.',
  TVS: 'Revise manufacturing, design and GD&T for automotive roles.',
  'L&T': 'Prepare site/design basics, project management and estimation.',
  Caterpillar: 'Focus on design, manufacturing and CAD modelling.',
  Godrej: 'Revise design, manufacturing and general aptitude.',
  'Afcons Infrastructure': 'Focus on site engineering, estimation and safety.',
  'Shapoorji Pallonji': 'Prepare site engineering, estimation and project planning.',
  'TATA Realty': 'Focus on structural design and project management.',
  DLF: 'Revise structural design, project management and costing.',
  Sobha: 'Focus on site engineering, quality control and estimation.',
  'PWD Kerala': 'Revise civil core and Kerala PSC-style technical aptitude.',
  'Local Startup': 'Focus on hands-on building, GitHub projects and clear communication.',
};

// Skills each company looks for.
const COMPANY_SKILLS: Record<string, string[]> = {
  'UST Kochi': ['React', 'Java', 'SQL', 'Communication'],
  'IBS Software': ['Java', 'SQL', 'Data Structures', 'Communication'],
  TCS: ['Python', 'Communication', 'Data Structures', 'Aptitude'],
  Infosys: ['Java', 'SQL', 'Python', 'Communication'],
  Wipro: ['Python', 'Java', 'Data Structures', 'Communication'],
  Accenture: ['Communication', 'Pseudocode', 'Aptitude', 'Python'],
  Cognizant: ['SQL', 'Aptitude', 'Python', 'Communication'],
  'Tech Mahindra': ['Java', 'Python', 'Data Structures', 'Communication'],
  Capgemini: ['Aptitude', 'Pseudocode', 'Communication', 'SQL'],
  HCL: ['Java', 'Python', 'SQL', 'Communication'],
  'Federal Bank': ['Communication', 'Aptitude', 'SQL', 'Excel'],
  Amazon: ['Data Structures', 'Algorithms', 'System Design', 'Java'],
  'Goldman Sachs': ['Data Structures', 'Algorithms', 'Java', 'Maths'],
  Oracle: ['SQL', 'DBMS', 'Java', 'Data Structures'],
  Microsoft: ['Data Structures', 'Algorithms', 'System Design', 'C++'],
  SAP: ['Java', 'ABAP', 'SQL', 'Cloud'],
  BEL: ['Digital Electronics', 'Communication', 'Aptitude', 'Embedded C'],
  BHEL: ['Power Systems', 'Circuit Analysis', 'Aptitude', 'Communication'],
  ISRO: ['Electronics', 'Circuit Analysis', 'Communication', 'Aptitude'],
  Keltron: ['Digital Electronics', 'Communication', 'Aptitude', 'C Programming'],
  Qualcomm: ['Embedded C', 'Data Structures', 'Digital Electronics', 'C Programming'],
  'Texas Instruments': ['Analog Circuits', 'Digital Electronics', 'Embedded C', 'Communication'],
  Nokia: ['Networking', 'Wireless', 'C Programming', 'Python'],
  KSEB: ['Power Systems', 'Circuit Analysis', 'Communication', 'Aptitude'],
  NTPC: ['Power Systems', 'Thermodynamics', 'Aptitude', 'Communication'],
  'Cochin Shipyard': ['Manufacturing Processes', 'Safety Basics', 'Communication', 'Aptitude'],
  'Ashok Leyland': ['Thermodynamics', 'Design', 'Manufacturing Processes', 'AutoCAD'],
  'Tata Motors': ['Manufacturing Processes', 'Design', 'AutoCAD', 'GD&T'],
  'Maruti Suzuki': ['Production', 'Quality Control', 'AutoCAD', 'Communication'],
  TVS: ['Manufacturing Processes', 'Design', 'GD&T', 'SolidWorks'],
  'L&T': ['Site Engineering', 'Estimation', 'Project Management', 'Communication'],
  Caterpillar: ['Design', 'Manufacturing Processes', 'AutoCAD', 'SolidWorks'],
  Godrej: ['Design', 'Manufacturing Processes', 'Aptitude', 'Communication'],
  'Afcons Infrastructure': ['Site Engineering', 'Estimation', 'Safety Basics', 'Communication'],
  'Shapoorji Pallonji': ['Site Engineering', 'Estimation', 'Project Planning', 'Communication'],
  'TATA Realty': ['Structural Analysis', 'Project Management', 'AutoCAD', 'Communication'],
  DLF: ['Structural Analysis', 'Project Management', 'Costing', 'Communication'],
  Sobha: ['Site Engineering', 'Quality Control', 'Estimation', 'Communication'],
  'PWD Kerala': ['Structural Analysis', 'Surveying', 'Aptitude', 'Communication'],
  'Local Startup': ['Python', 'Communication', 'React', 'GitHub'],
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
