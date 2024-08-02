import ContactComponent from "@/components/ContactComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const contactUs = [
    {
      title: "DM VIA INSTAGRAM",
      img: "/instagram-png.png",
      url: "https://www.instagram.com/cscpnj/",
    },
    {
      title: "GRUP WA Diskusi MABA 2023",
      img: "/whatsapp-logo-png.png",
      url: "https://chat.whatsapp.com/LqzdLnBJDeuFfkvabIriSU",
    },
    {
      title: "PARTNERSHIP VIA EMAIL",
      img: "/email-13766.png",
      url: "mailto:csc.pnj@gmail.com",
    },
  ];
  return (
    <div className="bg-[url('/bg-1.png')] bg-cover bg-no-repeat w-full overflow-x-hidden">
      <TopNav />
      <Navbar />
      <div className="p-20 font-poppins font-bold text-white">
        <p className="text-4xl uppercase">
          <FaPhoneAlt className="inline text-3xl mb-1" /> CONTACT
          <br />
          <a className="bg-gradient-to-r from-[#3876D3] to-[#919EAA] bg-clip-text text-transparent">Computer</a> Student Club
        </p>
        <p className="text-sm mt-2">Temukan informasi lengkap mengenai Computer Student Club</p>
      </div>
      <div className="w-full bg-[#090f1f]  py-24 ">
        <ContactComponent contents={contactUs} />
      </div>

      <Footer />
    </div>
  );
}
