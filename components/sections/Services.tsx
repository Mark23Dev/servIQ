import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Service } from "@/types";

const Services = () => {
  return (
    <div className="py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8">Explore Services</h1>

      {/* Always scroll horizontally */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4">
        {services.map((service: Service, i: number) => (
          <div
            key={i}
            className="shrink-0 snap-start w-[90%] sm:w-[340px] md:w-[360px] lg:w-[380px]"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
