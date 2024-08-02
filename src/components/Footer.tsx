import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center gap-5 px-10 py-5 bg-[#071952]">
      <div className="flex items-center gap-3 text-[#1C61B1]">
        <Link href={"mailto:csc.pnj@gmail.com"} className="p-2 ">
          <FiMail className="text-[#ffff]" />
        </Link>
        <Link href={"https://www.facebook.com/CSCPNJ/?locale=it_IT&_rdr"} className="p-2 ">
          <AiOutlineFacebook className="text-[#ffff]" />
        </Link>
        <Link href={"https://www.instagram.com/cscpnj/?hl=id"} className="p-2 ">
          <FiInstagram className="text-[#ffff]" />
        </Link>
        <Link href={"https://www.linkedin.com/company/computer-student-club/?originalSubdomain=id"} className="p-2 ">
          <FaLinkedin className="text-[#ffff]" />
        </Link>
      </div>
      <p className="font-ubuntu font-bold text-[#ffff] uppercase">Logo</p>
      <p className="text-[#ffff] text-xs font-poppins">&copy;Copyright 2024 - Computer Student Club</p>
    </div>
  );
}
