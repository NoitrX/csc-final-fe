import React from "react";
import { IoMdTime } from "react-icons/io";

interface ContentName {
  name: string;
}

const NameAuth: React.FC<ContentName> = ({ name }) => {
  const date = new Date().toDateString();
  return (
    <div className="flex justify-between max-w-screen items-center border border-gray-200 rounded-lg mt-4 p-6">
      <div>
        <h2 className="text-2xl font-bold">Hello {name}</h2>
        <p
          className="text-sm font-semibold mt-2 text-gray-500
          "
        >
          Atur Layout Website Computer Student Club Disini!
        </p>
      </div>
      <div className="flex items-center gap-3 font-bold">
        <IoMdTime className="text-xl border borde-gray-200 rounded-full" />

        {date}
      </div>
    </div>
  );
};

export default NameAuth;
