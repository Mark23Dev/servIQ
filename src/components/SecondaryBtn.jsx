import React from "react";

const SecondaryBtn = ({
  label = "Learn More",
  onClick = () => {},
  className = "",
  variant = "outline", // options: "outline" | "gray" | "white"
}) => {
  const baseStyle =
    "px-5 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    outline:
      "border border-gray-800 text-gray-800 hover:bg-gray-100 focus:ring-gray-500",
    gray: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    white:
      "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default SecondaryBtn;
