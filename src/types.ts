export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  services: string[];
  description: string;
  headline: string;
  overview: string;
  liveUrl?: string;
  metrics?: {
    label: string;
    value: string;
    subtext: string;
    highlight?: boolean;
  };
  dominant?: boolean;
  heroImage: string;
}

export interface ServiceArea {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tools?: string[];
}

export interface ApproachStep {
  number: string;
  name: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
