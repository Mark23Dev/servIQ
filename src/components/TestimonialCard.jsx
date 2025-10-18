import React from "react";

const TestimonialCard = () => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center gap-4 cursor-pointer">
      {/* Quote */}
      <p className="text-gray-600 italic leading-relaxed">
        “A terrific piece of praise that highlights the outstanding quality and
        service provided. Absolutely recommended!”
      </p>

      {/* User Info */}
      <div className="flex flex-col items-center gap-2">
        <img
          className="rounded-full object-cover h-20 w-20 border-2 border-blue-500"
          src="/melisa.jpg"
          alt="Melisa"
        />
        <div className="flex flex-col items-center">
          <span className="text-gray-800 font-semibold text-lg">Melisa</span>
          <span className="text-gray-500 text-sm">Satisfied Customer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
