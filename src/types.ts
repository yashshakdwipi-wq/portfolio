export type ProjectCategory = 'UI/UX' | '2D Graphics' | '3D' | 'Art' | 'Short Film';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  thumbnail: string;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  userGoals: string[];
  wireframes: string[];
  finalScreens: string[];
  colors: string[];
  typography: string;
  outcome: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
}
