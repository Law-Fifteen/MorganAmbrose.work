export interface Project {
  id: string;
  title: string;
  year: string;
  company: string;
  description: string;
  tags: string[];
  impact?: string;
  link?: string;
}

export interface TechProject {
  id: string;
  title: string;
  year: number;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}