import React from "react";
import { Testimonial } from "@/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  onClick,
}) => {
  return (
    <div
      className="w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center gap-4 cursor-pointer"
      onClick={onClick}
    >
      {/* Quote */}
      <p className="text-gray-600 italic leading-relaxed">
        &quot;{testimonial.content}&quot;
      </p>

      {/* User Info */}
      <div className="flex flex-col items-center gap-2">
        <Image
          className="rounded-full object-cover h-20 w-20 border-2 border-blue-500"
          src={testimonial.image}
          alt={testimonial.name}
          width={80}
          height={80}
        />
        <div className="flex flex-col items-center">
          <span className="text-gray-800 font-semibold text-lg">
            {testimonial.name}
          </span>
          <span className="text-gray-500 text-sm">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
