import React from "react";
import PrimaryBtn from "./PrimaryBtn"; // ✅ make sure this path matches your folder structure

const PostCard = () => {
  return (
    <div className="group w-[25rem] bg-white rounded-md shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {/* Post Image */}
      <img
        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
        src="/post1.jpg"
        alt="Post cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
          The Future of Service Marketplaces
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          Explore how AI and digital platforms are transforming how people find
          and offer services, creating more opportunities for everyone.
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <img
              src="/author.jpg"
              alt="Author"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700">by Jane Doe</span>
          </div>

          {/* Reuse your PrimaryBtn */}
          <PrimaryBtn label="Read More" className="text-sm px-3 py-1" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
