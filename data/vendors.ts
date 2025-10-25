import { Service } from '@/types';

interface VendorProfile {
  businessName: string;
  description: string;
  profilePicture: string;
  coverPhoto: string;
  contactInfo: string;
}

export interface Vendor {
  id: number;
  name: string;
  email: string;
  password: string;
  profile: VendorProfile;
  services: Service[];
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "Vendor One",
    email: "vendor1@example.com",
    password: "password123",
    profile: {
      businessName: "Vendor One Services",
      description: "We provide the best services in town.",
      profilePicture: "/path/to/profile-picture.jpg",
      coverPhoto: "/path/to/cover-photo.jpg",
      contactInfo: "123-456-7890",
    },
    services: [
      {
        id: 1,
        name: "Service A",
        description: "This is service A.",
        price: 100,
        category: "Category 1",
        image: "/path/to/service-a.jpg",
      },
      {
        id: 2,
        name: "Service B",
        description: "This is service B.",
        price: 200,
        category: "Category 2",
        image: "/path/to/service-b.jpg",
      },
    ],
  },
];