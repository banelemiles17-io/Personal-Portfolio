
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface Certificate {
  title: string;
  issuer: string;
  imageUrl: string;
  verifyUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}
