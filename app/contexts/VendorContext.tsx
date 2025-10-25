"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { vendors as initialVendors } from "../../data/vendors";
import { Service } from "../../types";

export interface Vendor {
  id: number;
  name: string;
  email: string;
  password: string;
  profile: {
    businessName: string;
    description: string;
    profilePicture: string;
    coverPhoto: string;
    contactInfo: string;
  };
  services: Service[];
  image?: string;
}

interface VendorContextType {
  vendors: Vendor[];
  addVendor: (vendor: Vendor) => void;
  updateVendor: (updatedVendor: Vendor) => void;
  addService: (vendorId: number, service: Service) => void;
  updateService: (vendorId: number, updatedService: Service) => void;
  deleteService: (vendorId: number, serviceId: number) => void;
}

const VendorContext = createContext<VendorContextType | undefined>(undefined);

interface VendorProviderProps {
  children: ReactNode;
}

export const VendorProvider: React.FC<VendorProviderProps> = ({ children }) => {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);

  const addVendor = (vendor: Vendor) => {
    setVendors([...vendors, vendor]);
  };

  const updateVendor = (updatedVendor: Vendor) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === updatedVendor.id ? updatedVendor : vendor
      )
    );
  };

  const addService = (vendorId: number, service: Service) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === vendorId
          ? { ...vendor, services: [...vendor.services, service] }
          : vendor
      )
    );
  };

  const updateService = (vendorId: number, updatedService: Service) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === vendorId
          ? {
              ...vendor,
              services: vendor.services.map((service) =>
                service.id === updatedService.id ? updatedService : service
              ),
            }
          : vendor
      )
    );
  };

  const deleteService = (vendorId: number, serviceId: number) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === vendorId
          ? {
              ...vendor,
              services: vendor.services.filter(
                (service) => service.id !== serviceId
              ),
            }
          : vendor
      )
    );
  };

  return (
    <VendorContext.Provider
      value={{
        vendors,
        addVendor,
        updateVendor,
        addService,
        updateService,
        deleteService,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = (): VendorContextType => {
  const context = useContext(VendorContext);
  if (context === undefined) {
    throw new Error("useVendor must be used within a VendorProvider");
  }
  return context;
};
