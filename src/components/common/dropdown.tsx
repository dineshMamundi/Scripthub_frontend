interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  label?:string;
  value?:string;
  onChange: (value: string) => void;
}

const Dropdown = ({
  options,
  onChange,
}: DropdownProps) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;