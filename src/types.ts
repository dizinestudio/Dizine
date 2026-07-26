export type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  pricingStarting: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web-design' | 'web-dev' | 'graphics' | 'hosting' | 'digital-marketing' | 'seo';
  categoryLabel: string;
  client: string;
  year: string;
  shortDesc: string;
  fullCaseStudy: string;
  image: string;
  metrics: { label: string; value: string }[];
  techUsed: string[];
  liveUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  popular?: boolean;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface AIProposal {
  title: string;
  summary: string;
  recommendedTechStack: string[];
  estimatedTimeline: string;
  estimatedCostRange: string;
  keyDeliverables: string[];
  aiStrategyTips: string;
}
