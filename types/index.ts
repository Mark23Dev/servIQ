export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number;
  duration?: string;
  category?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
  image: string;
  rating?: number;
}

export interface NavigationItem {
  name: string;
  href: string;
}
