import React from "react";

interface TextAreaProps {
  label?: string;
  value: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const TextArea = ({
  label,
  value,
  placeholder,
  rows = 4,
  required = false,
  disabled = false,
  className = "",
  onChange,
}: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-medium text-gray-700">
          {label}
        </label>
      )}

      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className={`w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default TextArea;