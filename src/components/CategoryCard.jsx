import React from "react";

const CategoryCard = () => {
  return (
    <div className="group w-100 bg-white rounded-md shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <img
        className="object-cover w-full h-90 group-hover:scale-105 transition-transform duration-300"
        src="/salon1.jpg"
        alt="Salon"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
          Salon
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          Transform your look with professional salon services designed to bring out your best style and confidence.
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
