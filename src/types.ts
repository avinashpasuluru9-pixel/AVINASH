export type SkillLevel = 'Basic' | 'Beginner' | 'Learning';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  category: 'Programming' | 'Development' | 'AI' | 'Other';
  note?: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  status: 'Completed' | 'In Progress' | 'Active Exploration';
  learnings: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  status: string;
  currentStage: string;
  timeline: string;
  description: string;
  highlights: string[];
  coursework: string[];
}

export interface RoadmapMilestone {
  period: string;
  phaseTitle: string;
  isCurrent: boolean;
  focus: string;
  topics: string[];
  status: 'In Progress' | 'Upcoming' | 'Goal';
}

export interface ProfileData {
  name: string;
  role: string;
  currentStage: string;
  careerGoal: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  statusBadge: string;
  bioHeading: string;
  bioSubheading: string;
  shortIntro: string;
}
