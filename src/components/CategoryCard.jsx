import React from "react";

const CategoryCard = () => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer w-[280px] sm:w-[320px]">
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          className="object-cover w-full h-56 sm:h-64 md:h-60 group-hover:scale-105 transition-transform duration-500"
          src="/salon1.jpg"
          alt="Salon"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600">
          Salon
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
          Transform your look with professional salon services designed to bring out your best style and confidence.
        </p>

        <button className="mt-3 bg-black text-white text-sm md:text-base px-4 py-2 rounded-md hover:bg-gray-900 transition">
          View Service Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
