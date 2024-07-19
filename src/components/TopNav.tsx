import { AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Image from "next/image";

export default function TopNav() {
    return (
        <div className="w-full bg-primary text-white py-3 px-10 font-roboto-flex flex flex-col md:flex-row md:items-center gap-3 justify-between">
            <div className="grid grid-cols-2 md:flex md:items-center gap-7 text-xs">
                <div className="flex items-center gap-2">
                    <FiMail />
                    <p>csc.pnj@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiPhone />
                    <p>+6285891269604</p>
                </div>
                <p className="text-lg hidden md:block">|</p>
                <div className="col-span-2 flex items-center gap-2">
                    <FiMapPin />
                    <p>Jl. Prof. DR. G.A. Siwabessy, Kampus Universitas Indonesia Depok 16425</p>
                </div>
            </div>
            <div className="w-full md:w-auto justify-end flex items-center gap-5 text-xl">
                <AiOutlineFacebook/>
                <FiInstagram />
                <FaLinkedin />
                <p className="text-lg">|</p>
                <Image src="/id.svg" alt="ID" width={24} height={18} />
            </div>
        </div>
    )
}
