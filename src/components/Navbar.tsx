"use client";

import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HighlightOnPath({ targetPath, children }: { targetPath: string; children: React.ReactNode }) {
  const currentPath = usePathname();

  return <div className={`contents ${currentPath === targetPath ? "text-[#3889D3]" : ""}`}>{children}</div>
}

function HighlightedLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <HighlightOnPath targetPath={href}>
      <Link href={href}>{children}</Link>
    </HighlightOnPath>
  )
}

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between font-ubuntu font-semibold text-base py-5 px-10 border-b bg-transparent border-black uppercase text-white">
      <HighlightOnPath targetPath={"/"}><p>Logo</p></HighlightOnPath>
      <div className="hidden md:flex items-center gap-3 lg:gap-10">
        <HighlightedLink href={"/"}>Home</HighlightedLink>
        <HighlightedLink href={"/about"}>About</HighlightedLink>
        <HighlightedLink href={"/division"}>Division</HighlightedLink>
        <HighlightedLink href={"/event"}>Event</HighlightedLink>
        <HighlightedLink href={"/faq"}>FAQ</HighlightedLink>
        <HighlightedLink href={"/contact"}>Contact</HighlightedLink>
        <button className="bg-primary text-white py-2 px-10 flex items-center gap-3">
          <FiPhone />
          <p>Join Us</p>
        </button>
      </div>
    </nav>
  );
}
