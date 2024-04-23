import React from "react";

interface CheckboxProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, value, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="TechnologyComponent">
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default Checkbox;
