import React from "react";

const ServiceCard = () => {
  return (
    <div className="group w-[28rem] bg-white rounded-md shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {/* Image */}
      <img
        className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300"
        src="/salon1.jpg"
        alt="Salon Service"
      />

      {/* Text Section */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
          Salon Styling
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          Experience premium salon services tailored to your style — from cuts
          and coloring to full makeovers, handled by professionals.
        </p>

        {/* Button */}
        <button className="mt-2 bg-black text-white py-2 px-4 rounded-md w-max hover:bg-gray-800 transition">
          View Service Detail
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
