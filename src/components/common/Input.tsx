import type { ChangeEvent } from "react";

interface InputProps {
  name?:string;
  label?: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?:boolean;
  style?:React.CSSProperties ;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

const Input = ({
  label,
  type = "text",
  value,
  name,
  style,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <div>
      {label && (
        <label style={{color:"black"}}>
          {label} :  
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default Input;