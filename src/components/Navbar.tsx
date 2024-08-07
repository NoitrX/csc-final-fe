"use client";

import { useState } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HighlightOnPath({ targetPath, children }: { targetPath: string; children: React.ReactNode }) {
  const currentPath = usePathname();

  return <div className={`contents ${currentPath === targetPath ? "text-[#3889D3]" : ""}`}>{children}</div>;
}

function HighlightedLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <HighlightOnPath targetPath={href}>
      <Link href={href}>{children}</Link>
    </HighlightOnPath>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="w-full flex items-center justify-between font-ubuntu font-semibold text-base py-5 px-10 border-b bg-transparent border-black uppercase text-white">
        <HighlightedLink href={"/"}>
          <div className="flex jusify-center gap-3 items-center">
            <img src="/csc-logo.png" className="w-12" alt="" />
            <p>COMPUTER STUDENT CLUB</p>
          </div>
        </HighlightedLink>
        <div className="hidden md:flex items-center gap-3 lg:gap-10">
          <HighlightedLink href={"/"}>Home</HighlightedLink>
          <HighlightedLink href={"/about"}>About</HighlightedLink>
          <HighlightedLink href={"/division"}>Division</HighlightedLink>
          <HighlightedLink href={"/event"}>Event</HighlightedLink>
          <HighlightedLink href={"/faq"}>FAQ</HighlightedLink>
          <HighlightedLink href={"/contact"}>Contact</HighlightedLink>
          <button className="bg-primary text-white py-2 px-10 flex items-center gap-3 hover:bg-blue-700 transition-all duration-200">
            <FiPhone />
            <Link href={"https://chat.whatsapp.com/LqzdLnBJDeuFfkvabIriSU"}>Join Us</Link>
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={` md:hidden top-36  left-0 w-full bg-transparent text-white flex flex-col items-center gap-8 uppercase font-ubuntu font-semibold text-base py-5 px-10`}>
          <HighlightedLink href={"/"}>Home</HighlightedLink>
          <HighlightedLink href={"/about"}>About</HighlightedLink>
          <HighlightedLink href={"/division"}>Division</HighlightedLink>
          <HighlightedLink href={"/event"}>Event</HighlightedLink>
          <HighlightedLink href={"/faq"}>FAQ</HighlightedLink>
          <HighlightedLink href={"/contact"}>Contact</HighlightedLink>
          <button className="bg-primary text-white py-2 px-10 flex items-center gap-3 hover:bg-blue-700 transition-all duration-200">
            <FiPhone />
            <p>Join Us</p>
          </button>
        </div>
      )}
    </div>
  );
}
