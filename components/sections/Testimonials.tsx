import React from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types";

const Testimonials = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold py-16 px-8">Testimonials</h1>
      <div className="flex gap-6 overflow-x-auto md:overflow-visible scroll-smooth scrollbar-hide">
        {testimonials.map((testimonial: Testimonial, i: number) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>
    </div>  
  );
};

export default Testimonials;
