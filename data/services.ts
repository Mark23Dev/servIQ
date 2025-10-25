
import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    name: "Salon Styling",
    description: "Experience premium salon services tailored to your style — from cuts and coloring to full makeovers, handled by professionals.",
    image: "/salon1.jpg",
    category: "Salon",
    price: 80,
    duration: "1 hour"
  },
  {
    id: 2,
    name: "Full Body Massage",
    description: "Release tension and find your inner peace with our full body massage.",
    image: "/massage.jpg",
    category: "Spa",
    price: 120,
    duration: "90 minutes"
  },
  {
    id: 3,
    name: "Bridal Makeup",
    description: "Look your best on your special day with our professional bridal makeup services.",
    image: "/bridal-makeup.jpg",
    category: "Makeup",
    price: 200,
    duration: "2 hours"
  },
  {
    id: 4,
    name: "Manicure & Pedicure",
    description: "Get your nails looking their best with our manicure and pedicure services.",
    image: "/manicure.jpg",
    category: "Nails",
    price: 60,
    duration: "1 hour"
  },
  {
    id: 5,
    name: "Creative Hair Coloring",
    description: "Express your personality with a unique and creative hair color.",
    image: "/hair-coloring.jpg",
    category: "Hair",
    price: 150,
    duration: "2-3 hours"
  },
  {
    id: 6,
    name: "Classic Shave",
    description: "A classic shave from a master barber is a true indulgence.",
    image: "/classic-shave.jpg",
    category: "Barber",
    price: 40,
    duration: "30 minutes"
  },
];
