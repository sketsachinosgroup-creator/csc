export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'cleaning' | 'repair' | 'repaint' | 'special';
  icon: string;
  popular?: boolean;
  benefits: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'cleaner' | 'brush' | 'spray' | 'bundle';
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  features: string[];
  howToUse: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  shoeType: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
