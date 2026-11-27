export type Page = 'home' | 'select' | 'skills' | 'test' | 'loading' | 'report';

export interface Selection {
  branch: string;
  company: string;
}

export interface AnswerMap {
  [questionId: number]: 'Yes' | 'No' | 'Learning';
}

export const BRANCHES = ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'];

// Companies relevant to each engineering branch in Kerala placement context.
export const BRANCH_COMPANIES: Record<string, string[]> = {
  CSE: ['UST Kochi', 'IBS Software', 'TCS', 'Infosys', 'Wipro', 'Federal Bank', 'Tech Mahindra', 'Local Startup'],
  ECE: ['UST Kochi', 'IBS Software', 'TCS', 'Infosys', 'Tech Mahindra', 'Federal Bank', 'Local Startup'],
  EEE: ['Federal Bank', 'TCS', 'Infosys', 'Tech Mahindra', 'Local Startup', 'KSEB'],
  Mechanical: ['Local Startup', 'Federal Bank', 'TCS', 'Infosys', 'Tech Mahindra'],
  Civil: ['Local Startup', 'Federal Bank', 'TCS', 'Infosys'],
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

export function rolesForBranch(branch: string): string[] {
  return BRANCH_ROLES[branch] ?? ['Any Role'];
}

export function skillsForBranchRole(branch: string, role: string): string[] {
  return BRANCH_ROLE_SKILLS[branch]?.[role] ?? BRANCH_ROLE_SKILLS[branch]?.['Any Role'] ?? ['Communication'];
}
