export interface Service {
  title: string;
  tagline: string;
  features: string[];
  price: string;
  buttonText?: string;
  disabled?: boolean;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  image?: string;
  socialIcons?: string[];
  inConstruction?: boolean;
}
