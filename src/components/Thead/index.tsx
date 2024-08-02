import React from "react";

// Define the CardSliderProps interface
interface TheadProps {
  theads: string[];
}
const Thead: React.FC<TheadProps> = ({ theads }) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        {theads.map((th, i) => {
          return (
            <th className="py-2 px-4 border-b border-gray-200" key={i}>
              {th}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Thead;
