import React from "react";

interface PrimaryBtnProps {
  label: string;
  variant?: "black" | "blue" | "outline";
  onClick?: () => void;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  label,
  variant = "black",
  onClick,
}) => {
  const baseStyle =
    "px-8 py-4 rounded-sm text-2xl text-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<string, string> = {
    black: "bg-black text-white hover:bg-gray-800 focus:ring-gray-700",
    blue: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-800 text-gray-800 hover:bg-gray-100 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]}`}
      onClick={onClick}
      type="submit"
    >
      {label}
    </button>
  );
};

export default PrimaryBtn;
