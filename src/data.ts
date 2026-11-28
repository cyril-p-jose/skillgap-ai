export type Page = 'home' | 'select' | 'skills' | 'test' | 'loading' | 'report';

export interface Selection {
  branch: string;
  company: string;
}

export interface AnswerMap {
  [questionId: number]: 'Yes' | 'No' | 'Learning';
}

export const BRANCHES = ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'];

// Companies that recruit each engineering branch (Kerala / India placement context).
export const BRANCH_COMPANIES: Record<string, string[]> = {
  CSE: [
    'UST Kochi', 'IBS Software', 'TCS', 'Infosys', 'Wipro', 'Accenture',
    'Cognizant', 'Tech Mahindra', 'Capgemini', 'HCL', 'Federal Bank',
    'Amazon', 'Goldman Sachs', 'Oracle', 'Microsoft', 'SAP', 'Local Startup',
  ],
  ECE: [
    'UST Kochi', 'IBS Software', 'TCS', 'Infosys', 'Wipro', 'Accenture',
    'Tech Mahindra', 'BEL', 'BHEL', 'ISRO', 'Keltron', 'Federal Bank',
    'Qualcomm', 'Texas Instruments', 'Nokia', 'Local Startup',
  ],
  EEE: [
    'Federal Bank', 'TCS', 'Infosys', 'Tech Mahindra', 'Wipro', 'KSEB',
    'BHEL', 'BEL', 'Keltron', 'ISRO', 'NTPC', 'Cochin Shipyard',
    'Local Startup',
  ],
  Mechanical: [
    'Local Startup', 'Federal Bank', 'TCS', 'Infosys', 'Tech Mahindra',
    'BHEL', 'Ashok Leyland', 'Tata Motors', 'Maruti Suzuki', 'TVS',
    'Cochin Shipyard', 'L&T', 'Caterpillar', 'Godrej',
  ],
  Civil: [
    'Local Startup', 'Federal Bank', 'TCS', 'Infosys', 'L&T',
    'Afcons Infrastructure', 'Shapoorji Pallonji', 'TATA Realty',
    'DLF', 'Sobha', 'Cochin Shipyard', 'PWD Kerala', 'KSEB',
  ],
};

// Roles available for each branch.
export const BRANCH_ROLES: Record<string, string[]> = {
  CSE: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Analyst', 'Software Engineer'],
  ECE: ['Embedded Engineer', 'Software Engineer', 'Network Engineer', 'Backend Developer', 'Any Role'],
  EEE: ['Power Systems Engineer', 'Software Engineer', 'Any Role'],
  Mechanical: ['Design Engineer', 'Manufacturing Engineer', 'Software Engineer (CAD/CAM)', 'Any Role'],
  Civil: ['Structural Engineer', 'Site Engineer', 'Software Engineer (BIM)', 'Any Role'],
};

// Skills relevant to each (branch, role) pair.
export const BRANCH_ROLE_SKILLS: Record<string, Record<string, string[]>> = {
  CSE: {
    'Frontend Developer': ['React', 'HTML & CSS', 'JavaScript', 'Data Structures', 'Communication'],
    'Backend Developer': ['Java', 'SQL', 'Data Structures', 'API Design', 'Communication'],
    'Full Stack Developer': ['React', 'Java', 'SQL', 'JavaScript', 'Data Structures'],
    'Data Analyst': ['Python', 'SQL', 'Excel', 'Statistics', 'Communication'],
    'Software Engineer': ['Java', 'Python', 'Data Structures', 'SQL', 'Communication'],
  },
  ECE: {
    'Embedded Engineer': ['Embedded C', 'Microcontrollers', 'Digital Electronics', 'Communication', 'C Programming'],
    'Software Engineer': ['Java', 'Python', 'Data Structures', 'SQL', 'Communication'],
    'Network Engineer': ['Networking', 'Routing Protocols', 'Linux', 'Communication', 'Python'],
    'Backend Developer': ['Java', 'SQL', 'Data Structures', 'API Design', 'Communication'],
    'Any Role': ['C Programming', 'Python', 'Communication', 'Data Structures', 'SQL'],
  },
  EEE: {
    'Power Systems Engineer': ['Power Systems', 'Circuit Analysis', 'MATLAB', 'Control Systems', 'Communication'],
    'Software Engineer': ['Python', 'SQL', 'Data Structures', 'Communication', 'C Programming'],
    'Any Role': ['Circuit Analysis', 'MATLAB', 'Python', 'Communication', 'Power Systems'],
  },
  Mechanical: {
    'Design Engineer': ['AutoCAD', 'SolidWorks', 'CATIA', 'GD&T', 'Communication'],
    'Manufacturing Engineer': ['Manufacturing Processes', 'Lean Manufacturing', 'Quality Control', 'Communication', 'AutoCAD'],
    'Software Engineer (CAD/CAM)': ['AutoCAD', 'Python', 'ANSYS', 'Communication', 'SolidWorks'],
    'Any Role': ['AutoCAD', 'Communication', 'Manufacturing Processes', 'Python', 'SolidWorks'],
  },
  Civil: {
    'Structural Engineer': ['Structural Analysis', 'STAAD.Pro', 'AutoCAD', ' RCC Design', 'Communication'],
    'Site Engineer': ['Construction Management', 'Surveying', 'AutoCAD', 'Estimation', 'Communication'],
    'Software Engineer (BIM)': ['AutoCAD', 'Revit', 'BIM Tools', 'Communication', 'Python'],
    'Any Role': ['AutoCAD', 'Communication', 'Surveying', 'Estimation', 'Structural Analysis'],
  },
};

export interface Question {
  id: number;
  text: string;
  skill: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Can you write a program in C, C++, Java, or Python without copying from the internet?',
    skill: 'Programming Fundamentals',
  },
  {
    id: 2,
    text: 'Can you explain time complexity of a simple loop or sorting algorithm?',
    skill: 'Data Structures & Algorithms',
  },
  {
    id: 3,
    text: 'Do you know the basics of DBMS, SQL queries, and how tables relate to each other?',
    skill: 'Database & SQL',
  },
  {
    id: 4,
    text: 'Are you comfortable speaking in English during a group discussion or interview?',
    skill: 'Communication Skills',
  },
  {
    id: 5,
    text: 'Have you built at least one mini project or done an internship so far?',
    skill: 'Practical Experience',
  },
];

export function companiesForBranch(branch: string): string[] {
  return BRANCH_COMPANIES[branch] ?? ['Local Startup', 'TCS', 'Infosys'];
}

// A short description for each company (shown where helpful).
export const COMPANY_INFO: Record<string, string> = {
  'UST Kochi': 'Digital transformation company in Kochi — hires software engineers.',
  'IBS Software': 'Travel and aviation software firm in Thiruvananthapuram.',
  TCS: 'Mass recruiter across all branches — strong aptitude and coding rounds.',
  Infosys: 'Mass recruiter — focuses on OOP, DBMS and logical reasoning.',
  Wipro: 'IT services giant — coding and technical HR rounds.',
  Accenture: 'IT and consulting — communication and coding tests.',
  Cognizant: 'IT services — aptitude and coding assessment.',
  'Tech Mahindra': 'IT and telecom — coding rounds and core technical basics.',
  Capgemini: 'IT consulting — aptitude and pseudocode rounds.',
  HCL: 'IT services — technical and coding rounds.',
  'Federal Bank': 'Banking — aptitude, banking awareness and strong English.',
  Amazon: 'Product MNC — heavy DSA, system design and leadership principles.',
  'Goldman Sachs': 'FinTech — strong coding, DSA, maths and finance basics.',
  Oracle: 'Product company — SQL, DBMS, Java and DSA focus.',
  Microsoft: 'Product MNC — DSA, system design and problem solving.',
  SAP: 'Enterprise software — Java, ABAP and cloud basics.',
  BEL: 'Defence PSU (ECE/Electronics) — technical core and written test.',
  BHEL: 'Public sector — core technical and GATE-style aptitude.',
  ISRO: 'Space research — core technical, electronics and fundamentals.',
  Keltron: 'Kerala PSU (electronics) — technical core and PSC-style test.',
  Qualcomm: 'Chip design MNC — embedded C, DS and digital electronics.',
  'Texas Instruments': 'Semiconductor MNC — analog, digital and embedded skills.',
  Nokia: 'Telecom MNC — networking, wireless and C/Python.',
  KSEB: 'Kerala power utility — power systems and PSC-style technical test.',
  NTPC: 'Power PSU — core technical and GATE-style aptitude.',
  'Cochin Shipyard': 'Shipbuilding PSU — mechanical/civil core and safety basics.',
  'Ashok Leyland': 'Automotive MNC — design, thermodynamics and manufacturing.',
  'Tata Motors': 'Automotive giant — manufacturing, design and CAD.',
  'Maruti Suzuki': 'Automotive MNC — production, quality and CAD.',
  TVS: 'Automotive group — manufacturing, design and GD&T.',
  'L&T': 'Construction and engineering giant — site, design and project basics.',
  Caterpillar: 'Heavy equipment MNC — design, manufacturing and CAD.',
  Godrej: 'Diversified MNC — design, manufacturing and aptitude.',
  'Afcons Infrastructure': 'Infrastructure major — civil/site engineering core.',
  'Shapoorji Pallonji': 'Construction major — site engineering and estimation.',
  'TATA Realty': 'Real estate and infrastructure — structural and site skills.',
  DLF: 'Real estate major — structural design and project management.',
  Sobha: 'Construction and real estate — site engineering and quality.',
  'PWD Kerala': 'Public works — civil core and Kerala PSC-style test.',
  'Local Startup': 'Kerala startup ecosystem — hands-on building and GitHub projects.',
};

export function rolesForBranch(branch: string): string[] {
  return BRANCH_ROLES[branch] ?? ['Any Role'];
}

export function skillsForBranchRole(branch: string, role: string): string[] {
  return BRANCH_ROLE_SKILLS[branch]?.[role] ?? BRANCH_ROLE_SKILLS[branch]?.['Any Role'] ?? ['Communication'];
}

// Two universal questions shown for everyone, plus one per selected skill.
export const UNIVERSAL_QUESTIONS: Question[] = [
  {
    id: 9001,
    text: 'Are you comfortable speaking in English during a group discussion or interview?',
    skill: 'Communication',
  },
  {
    id: 9002,
    text: 'Have you built at least one mini project or done an internship so far?',
    skill: 'Practical Experience',
  },
];

export function questionsForSkills(skills: string[]): Question[] {
  const trimmed = skills.map((s) => s.trim()).filter(Boolean);
  const skillQuestions: Question[] = trimmed.slice(0, 3).map((s, i) => ({
    id: 1000 + i,
    text: `Do you feel confident in ${s} — can you answer interview-level questions on it?`,
    skill: s,
  }));
  return [...skillQuestions, ...UNIVERSAL_QUESTIONS];
}
