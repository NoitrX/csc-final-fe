import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center gap-5 px-10 py-5 bg-[#071952]">
      <div className="flex items-center gap-3 text-[#1C61B1]">
        <div className="p-2 ">
          <FiMail className="text-[#ffff]" />
        </div>
        <div className="p-2 ">
          <AiOutlineFacebook className="text-[#ffff]" />
        </div>
        <div className="p-2 ">
          <FiInstagram className="text-[#ffff]" />
        </div>
        <div className="p-2 ">
          <FaLinkedin className="text-[#ffff]" />
        </div>
      </div>
      <p className="font-ubuntu font-bold text-[#ffff] uppercase">Logo</p>
      <p className="text-[#ffff] text-xs font-poppins">&copy;Copyright 2024 - Computer Student Club</p>
    </div>
  );
}
