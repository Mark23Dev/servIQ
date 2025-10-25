"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons (Font Awesome)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight hover:text-purple-600 transition-colors duration-200">
          ServIQ
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-lg">
          <Link
            href="/"
            className="hover:text-purple-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-600 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/marketplace"
            className="hover:text-purple-600 transition-colors duration-200"
          >
            Marketplace
          </Link>
          <Link
            href="/blog"
            className="hover:text-purple-600 transition-colors duration-200"
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Sign Up
          </Link>
          <Link
            href="/vendor/register"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Become a Vendor
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-200 animate-slideDown">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 text-lg">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              About Us
            </Link>
            <Link
              href="/marketplace"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Marketplace
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Blog
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
            >
              Sign Up
            </Link>
            <Link
              href="/vendor/register"
              onClick={() => setIsOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
