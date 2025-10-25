import React from "react";
import { Category } from "@/types";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <Image
          className="object-cover w-full h-[280px] group-hover:scale-105 transition-transform duration-500"
          src={category.image}
          alt={category.name}
          width={280}
          height={280}
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
          {category.description}
        </p>

        <button className="mt-3 bg-black text-white text-sm md:text-base px-4 py-2 rounded-md hover:bg-gray-900 transition">
          View Service Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
