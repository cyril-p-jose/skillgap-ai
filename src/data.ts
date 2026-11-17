export type Page = 'home' | 'select' | 'skills' | 'test' | 'loading' | 'report';

export interface Selection {
  branch: string;
  company: string;
}

export interface AnswerMap {
  [questionId: number]: 'Yes' | 'No' | 'Learning';
}

export const BRANCHES = ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'];

export const COMPANIES = [
  'UST Kochi',
  'IBS Software',
  'TCS',
  'Infosys',
  'Federal Bank',
  'Tech Mahindra',
  'Local Startup',
];

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


