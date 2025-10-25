import React from "react";
import { Service } from "@/types";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full"
      onClick={onClick}
    >
      {/* Image */}
      <Image
        className="object-cover w-full h-[280px] group-hover:scale-105 transition-transform duration-500"
        src={service.image}
        alt={service.name}
        width={280}
        height={280}
      />

      {/* Text Section */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
          {service.name}
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          {service.description}
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
