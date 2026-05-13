export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Location {
  city: string;
  slug: string;
  description: string;
  neighborhoods: string[];
}

export interface SiteConfig {
  company: {
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    businessHours: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
}
