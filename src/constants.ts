import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoTrack Mobile App',
    description: 'A sustainable lifestyle tracking application focusing on carbon footprint reduction.',
    category: 'UI/UX',
    thumbnail: 'https://picsum.photos/seed/ecotrack/800/600',
    caseStudy: {
      overview: 'EcoTrack helps users monitor their daily habits and suggests greener alternatives.',
      problem: 'Users find it difficult to quantify their environmental impact in daily life.',
      userGoals: [
        'Track daily carbon emissions easily',
        'Receive personalized eco-friendly tips',
        'Compete with friends in sustainability challenges'
      ],
      wireframes: [
        'https://picsum.photos/seed/wire1/800/600',
        'https://picsum.photos/seed/wire2/800/600'
      ],
      finalScreens: [
        'https://picsum.photos/seed/final1/800/600',
        'https://picsum.photos/seed/final2/800/600',
        'https://picsum.photos/seed/final3/800/600'
      ],
      colors: ['#10B981', '#064E3B', '#F3F4F6'],
      typography: 'Inter & Montserrat',
      outcome: 'Increased user engagement by 40% and helped users reduce their carbon footprint by an average of 15%.'
    }
  },
  {
    id: '2',
    title: 'Cyberpunk Character Design',
    description: 'Detailed 2D character illustration for a futuristic RPG setting.',
    category: '2D Graphics',
    thumbnail: 'https://picsum.photos/seed/cyber/800/600'
  },
  {
    id: '3',
    title: 'Abstract Geometric Series',
    description: 'A collection of digital art exploring the intersection of math and aesthetics.',
    category: 'Art',
    thumbnail: 'https://picsum.photos/seed/abstract/800/600'
  },
  {
    id: '4',
    title: 'Low Poly Island',
    description: '3D environment design created during my Blender learning journey.',
    category: '3D',
    thumbnail: 'https://picsum.photos/seed/island/800/600'
  },
  {
    id: '5',
    title: 'FinTech Dashboard',
    description: 'Modern financial management interface for small businesses.',
    category: 'UI/UX',
    thumbnail: 'https://picsum.photos/seed/fintech/800/600',
    caseStudy: {
      overview: 'A comprehensive dashboard for managing business finances, invoices, and payroll.',
      problem: 'Small business owners struggle with fragmented financial data across multiple platforms.',
      userGoals: [
        'Consolidate all financial accounts in one view',
        'Automate invoice generation and tracking',
        'Generate real-time financial reports'
      ],
      wireframes: [
        'https://picsum.photos/seed/finwire1/800/600'
      ],
      finalScreens: [
        'https://picsum.photos/seed/finfinal1/800/600',
        'https://picsum.photos/seed/finfinal2/800/600'
      ],
      colors: ['#3B82F6', '#1E3A8A', '#FFFFFF'],
      typography: 'Roboto & Open Sans',
      outcome: 'Reduced financial processing time for users by 30%.'
    }
  },
  {
    id: '6',
    title: 'The Silent City',
    description: 'A cinematic short film exploring solitude and urban life through visual storytelling.',
    category: 'Short Film',
    thumbnail: 'https://picsum.photos/seed/film/800/600'
  }
];

export const SKILLS = [
  'UI/UX Design',
  'Wireframing & Prototyping',
  'Visual Design',
  'User Interface Design',
  'Basic User Research',
  '2D Graphics',
  'Storyboarding',
  'Sketching & Drawing'
];

export const TOOLS = [
  'Figma',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Blender (Learning)'
];
