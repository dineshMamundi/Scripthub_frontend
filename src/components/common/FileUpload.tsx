import React from "react";

interface FileUploadProps {
  label?: string;
  accept?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const FileUpload = ({
  label,
  accept,
  required = false,
  disabled = false,
  onChange,
}: FileUploadProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type="file"
        accept={accept}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 p-2 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
      />
    </div>
  );
};

export default FileUpload;