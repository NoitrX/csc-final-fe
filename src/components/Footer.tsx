import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full flex justify-between items-center gap-5 px-10 py-5 bg-[#050505]">
            <div className="flex items-center gap-3 text-[#1C61B1]">
                <div className="p-2 bg-[#262627]">
                    <FiMail />
                </div>
                <div className="p-2 bg-[#262627]">
                    <AiOutlineFacebook />
                </div>
                <div className="p-2 bg-[#262627]">
                    <FiInstagram />
                </div>
                <div className="p-2 bg-[#262627]">
                    <FaLinkedin />
                </div>
            </div>
            <p className="font-ubuntu font-bold text-[#3889D3] uppercase">Logo</p>
            <p className="text-[#656565] text-xs font-poppins">&copy;Copyright 2024 - Computer Student Club</p>
        </div>
    )
}