import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
}

const Loader: React.FC<LoaderProps> = ({ size = "md" }) => {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <div className="flex justify-center items-center py-5">
      <div
        className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 ${sizes[size]}`}
      />
    </div>
  );
};

export default Loader;