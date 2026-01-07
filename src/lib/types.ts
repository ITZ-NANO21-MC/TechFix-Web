import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  hint: string;
};

export type Accessory = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'phone' | 'pc' | 'new';
  image: {
    src: string;
    alt: string;
    hint: string;
  };
};

export type SocialLink = {
  name: string;
  icon: LucideIcon;
  url: string;
};
