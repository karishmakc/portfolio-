export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  category: 'System Software' | 'Artificial Intelligence' | 'Internet of Things' | 'Web Development';
  technologies: string[];
  keyFeatures: string[];
  architectureOverview?: string;
  iconName: string;
  accentColor?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  year?: string;
  badgeCode: string;
  category?: string;
  certificationLevel?: string;
  verification?: string;
  imagePath: string;
  description: string;
  skillsAcquired: string[];
  isPlaceholder?: boolean;
}

export interface InterestArea {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  skills: string[];
}
