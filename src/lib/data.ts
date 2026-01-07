import type { NavLink, Service, GalleryImage, Accessory, SocialLink } from './types';
import { Smartphone, ScreenShare, BatteryCharging, CircuitBoard, Computer, HardDrive, Facebook, Instagram, Twitter, Linkedin, Github, Youtube, MessageCircle } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

function findImage(id: string) {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or throw an error
    return { imageUrl: 'https://picsum.photos/seed/default/400/400', imageHint: 'default' };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Accesorios', href: '#accessories' },
  { label: 'Contacto', href: '#contact' },
];

export const services: Service[] = [
  {
    icon: Smartphone,
    title: 'Reparación de Pantallas',
    description: 'Reemplazo de pantallas rotas o defectuosas para todas las marcas principales.',
    price: 'Desde $50',
  },
  {
    icon: BatteryCharging,
    title: 'Cambio de Batería',
    description: 'Instalación de baterías nuevas para mejorar la autonomía de tu dispositivo.',
    price: 'Desde $30',
  },
  {
    icon: CircuitBoard,
    title: 'Reparación de Placa Base',
    description: 'Soluciones avanzadas de micro-soldadura para problemas complejos de hardware.',
    price: 'Consultar',
  },
  {
    icon: Computer,
    title: 'Mantenimiento de PC',
    description: 'Limpieza interna, optimización de software y actualizaciones de componentes.',
    price: 'Desde $40',
  },
  {
    icon: HardDrive,
    title: 'Recuperación de Datos',
    description: 'Recuperamos tus archivos importantes de discos duros y dispositivos dañados.',
    price: 'Desde $80',
  },
  {
    icon: ScreenShare,
    title: 'Configuración de Software',
    description: 'Instalación de sistemas operativos, antivirus y solución de problemas de software.',
    price: 'Desde $25',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: findImage('gallery-1').imageUrl, alt: 'Pantalla de celular rota', hint: findImage('gallery-1').imageHint },
  { id: '2', src: findImage('gallery-2').imageUrl, alt: 'Pantalla de celular reparada', hint: findImage('gallery-2').imageHint },
  { id: '3', src: findImage('gallery-3').imageUrl, alt: 'Interior de una PC', hint: findImage('gallery-3').imageHint },
  { id: '4', src: findImage('gallery-4').imageUrl, alt: 'Organización de cables de PC', hint: findImage('gallery-4').imageHint },
  { id: '5', src: findImage('gallery-5').imageUrl, alt: 'Técnico reparando una laptop', hint: findImage('gallery-5').imageHint },
  { id: '6', src: findImage('gallery-6').imageUrl, alt: 'Micro-soldadura en placa base', hint: findImage('gallery-6').imageHint },
  { id: '7', src: findImage('gallery-7').imageUrl, alt: 'Fundas para celular', hint: findImage('gallery-7').imageHint },
  { id: '8', src: findImage('gallery-8').imageUrl, alt: 'PC gamer con luces RGB', hint: findImage('gallery-8').imageHint },
];

export const accessories: Accessory[] = [
  {
    id: 'acc1',
    name: 'Funda Protectora',
    description: 'Funda de alta resistencia para proteger tu celular de caídas y golpes.',
    price: '$15.00',
    category: 'phone',
    image: { src: findImage('accessory-phone-1').imageUrl, alt: 'Funda de celular duradera', hint: findImage('accessory-phone-1').imageHint },
  },
  {
    id: 'acc2',
    name: 'Cargador Rápido USB-C',
    description: 'Cargador de 30W para una carga ultra rápida de tus dispositivos.',
    price: '$25.00',
    category: 'phone',
    image: { src: findImage('accessory-phone-2').imageUrl, alt: 'Cargador de pared rápido', hint: findImage('accessory-phone-2').imageHint },
  },
  {
    id: 'acc3',
    name: 'Auriculares Inalámbricos',
    description: 'Auriculares con cancelación de ruido y alta fidelidad de sonido.',
    price: '$79.00',
    category: 'new',
    image: { src: findImage('accessory-phone-3').imageUrl, alt: 'Auriculares inalámbricos', hint: findImage('accessory-phone-3').imageHint },
  },
  {
    id: 'acc4',
    name: 'Mouse Ergonómico',
    description: 'Mouse inalámbrico diseñado para máxima comodidad durante horas de uso.',
    price: '$40.00',
    category: 'pc',
    image: { src: findImage('accessory-pc-1').imageUrl, alt: 'Mouse inalámbrico ergonómico', hint: findImage('accessory-pc-1').imageHint },
  },
  {
    id: 'acc5',
    name: 'Teclado Mecánico RGB',
    description: 'Teclado para gaming con switches mecánicos y retroiluminación personalizable.',
    price: '$95.00',
    category: 'pc',
    image: { src: findImage('accessory-pc-2').imageUrl, alt: 'Teclado mecánico gamer', hint: findImage('accessory-pc-2').imageHint },
  },
  {
    id: 'acc6',
    name: 'Webcam Full HD',
    description: 'Cámara web 1080p ideal para streaming y videoconferencias.',
    price: '$60.00',
    category: 'pc',
    image: { src: findImage('accessory-pc-3').imageUrl, alt: 'Webcam de alta definición', hint: findImage('accessory-pc-3').imageHint },
  },
  {
    id: 'acc7',
    name: 'Batería Portátil 10000mAh',
    description: 'Power bank compacto y potente para cargar tus dispositivos en cualquier lugar.',
    price: '$35.00',
    category: 'new',
    image: { src: findImage('accessory-new-1').imageUrl, alt: 'Batería portátil', hint: findImage('accessory-new-1').imageHint },
  },
  {
    id: 'acc8',
    name: 'Protector de Pantalla Premium',
    description: 'Vidrio templado 9H anti-rayas y con aplicador fácil.',
    price: '$12.00',
    category: 'phone',
    image: { src: findImage('accessory-new-2').imageUrl, alt: 'Protector de pantalla', hint: findImage('accessory-new-2').imageHint },
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/1234567890' },
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
];
