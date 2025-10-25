"use client";
import { useState } from "react";
import Link from "next/link";

const VendorRegistrationPage = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

    const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Business Name:", businessName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
    console.log("Password:", password);
  };

  return (
    <div className="relative w-full min-h-screen bg-[url('/salon1.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Become a Vendor</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-gray-200 font-bold mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              className="w-full px-4 py-3 bg-white/20 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              placeholder="Enter your business name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white/20 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-200 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-4 py-3 bg-white/20 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-200 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-3 bg-white/20 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-200 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-white/20 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-bold text-lg"
          >
            Register as a Vendor
          </button>
        </form>
        <p className="text-center mt-6 text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VendorRegistrationPage;
