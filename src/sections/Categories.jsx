import React from "react";
import CategoryCard from "../components/CategoryCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Categories = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
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
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start w-[280px] md:w-[340px]"
          >
            <CategoryCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
