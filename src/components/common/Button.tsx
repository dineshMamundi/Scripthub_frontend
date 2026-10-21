import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "danger" | "secondary" | "contained";
  onClick?: () => void;
  className?: string;
  type?: string;
  disabled?: boolean;
  style?:object;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  style,
  className = "",
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
