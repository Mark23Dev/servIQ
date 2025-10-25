"use client";
import React, { useRef } from "react";
import CategoryCard from "@/components/ui/CategoryCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { categories } from "@/data/categories";
import { Category } from "@/types";

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right"): void => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 px-6 md:px-20 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Categories
        </h1>

        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaChevronLeft className="text-gray-700 w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaChevronRight className="text-gray-700 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4"
      >
        {categories.map((category: Category, i: number) => (
          <div
            key={i}
            className="shrink-0 snap-start w-[90%] sm:w-[340px] md:w-[360px] lg:w-[380px]"
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
