import React from "react";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] bg-[url('/salon1.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Trusted Vendors Near You
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Discover skilled professionals for your everyday needs — from beauty
          to tech and everything in between.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <PrimaryBtn label="Browse Services" />
          <PrimaryBtn label="Become a Vendor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
