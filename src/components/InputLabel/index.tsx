import React from "react";

interface InputLabelProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  errors?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, type, placeholder, name, onChange, value, errors }) => {
  return (
    <div className="w-full">
      <label className="text-sm text-gray-900 ">{label}</label>
      <input type={type} name={name} className={`${errors ? "border-red-500" : "border-gray-300"} w-full px-2 py-2 border mt-2 text-sm border-gray-300 rounded-md`} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default InputLabel;
