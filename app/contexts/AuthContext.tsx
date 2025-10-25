"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { vendors, Vendor } from "../../data/vendors";

interface User {
  id: number;
  name: string;
  email: string;
  image?: string;
  role: "vendor" | "customer" | "admin";
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    const vendor = vendors.find(
      (v: Vendor) => v.email === email && v.password === password
    );
    if (vendor) {
      setCurrentUser({
        id: vendor.id,
        name: vendor.name,
        email: vendor.email,
        image: vendor.profile.profilePicture,
        role: "vendor",
      });
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
