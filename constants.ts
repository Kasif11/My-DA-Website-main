import { Skill, ExperienceItem, Project, EducationItem } from './types';

export const SKILLS: Skill[] = [
  { name: 'Advanced Excel' },
  { name: 'Power BI Desktop' },
  { name: 'MySQL' },
  { name: 'Python' },
  { name: 'Data Visualization' },
  { name: 'Data Cleaning' },
  { name: 'Data Modelling' },
  { name: 'Data Storytelling' },
  { name: 'DAX' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Tailwind CSS' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Data Analyst Intern',
    company: 'Oasis Infobyte',
    location: 'New Delhi',
    period: 'Nov 2025 - Jan 2026',
    details: [
      'Compiled data from client in raw excel format or from sharepoint; increased analysis by 50% by using pivot table & Vlookup.',
      'Designed power bi dashboard for financial claims portfolio of 100+ client accounts to review the KPI; results in 25% improvement in collection rates and 30% reduction in claim denial rates, leading to faster revenue recognition.',
    ],
    tools: ['Excel', 'Power BI desktop', 'Power Query', 'DAX function', 'Vlookup', 'Pivot Table'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Sales Analysis',
    tech: 'MS Excel',
    githubUrl: 'https://github.com/Kasif11',
    description: [
      'Created an insightful dashboard for 2015 sales by analysing the growth trends of 4 product categories by using pivot table.',
      'Incorporated clustered column charts, bar charts, control combo box & data analysis add-in to accomplished top 8 products.',
    ],
  },
  {
    title: 'Air Cargo Analysis',
    tech: 'SQL',
    githubUrl: 'https://github.com/Kasif11',
    description: [
      'Leveraged airline dataset to optimize travel operations, analyse busiest routes, ticket sales, & enhance the booking experience; resulting in 23% increase in revenue collection & 13% reduction in customer complaints.',
    ],
  },
  {
    title: 'Zomato Restaurant Analysis',
    tech: 'Power BI',
    githubUrl: 'https://github.com/Kasif11',
    description: [
      'Analysed dataset of 5000 restaurants in 15+ countries, which shows average rating of 2.9/5 & average cost 1.5K.',
      'Crafted Power BI reports for global analysis & restaurant performance by using Power Query, Charts and DAX for calculations.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
    {
        degree: 'Bachelor Of Computer Applications (B.C.A)',
        institution: 'Maa Shakumbhari University, Saharanpur',
        period: '07/2022 - 07/2025',
        percentage: '72.58%',
    },
    {
        degree: 'Senior Secondary ( XII )',
        institution: 'J.J College, Gaya',
        period: '04/2020 - 03/2022',
        percentage: '75%',
    },
    {
        degree: 'Secondary ( X )',
        institution: 'Manas Bhumi Sr Sec Schl Dinkar Ngr Nalanda Br',
        period: '04/2019 - 07/2020',
        percentage: '76.4%',
    }
];
