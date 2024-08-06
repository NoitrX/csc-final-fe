"use client";
// Icons
import { IoHomeOutline, IoExitOutline } from "react-icons/io5";
import { BsBookmark, BsBoxArrowInUpRight } from "react-icons/bs";
import { MdOutlineEvent, MdOutlineEventAvailable } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import NavbarAdmin from "@/components/NavbarAdmin";
import NameAuth from "@/components/NameAuth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMouseEnter = () => {
    if (isCollapsed) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed) {
      setIsHovered(false);
    }
  };

  const sidebarLink = [
    {
      link: "/admin/dashboard",
      icon: <IoHomeOutline />,
      name: "Home",
    },

    {
      link: "/admin/dashboard/about",
      icon: <BsBookmark />,
      name: "About",
    },
    {
      link: "/admin/dashboard/division",
      icon: <DiAndroid />,
      name: "Division",
    },

    {
      link: "/admin/dashboard/event",
      icon: <MdOutlineEvent />,
      name: "Event",
    },

    {
      link: "/admin/dashboard/faq",
      icon: <FaRegQuestionCircle />,
      name: "Faq",
    },

    {
      link: "/admin/dashboard/joinUs",
      icon: <BsBoxArrowInUpRight />,
      name: "Join Us",
    },

    {
      link: "/admin/dashboard/contact",
      icon: <CiPhone />,
      name: "Contact",
    },
  ];
  return (
    <div className="max-w-screen font-poppins">
      <div className="flex flex-row w-full">
        {/* Sidebar On Phone / Tablet */}
        <div
          className={`${isSidebar ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 w-64 border-r  border-gray-200 bg-white flex flex-col p-8 min-h-screen transition-transform duration-300 ease-in-out md:hidden`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-center font-bold">LOGO</h2>
            <FiAlignRight onClick={handleSidebar} className="text-lg cursor-pointer md:hidden" />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col mt-12">
              <p className="text-xs font-bold text-gray-400">DASHBOARDS AND APPS</p>
              {sidebarLink.map((link, index) => (
                <div key={index} className={`${pathname === link.link ? "border border-gray-300 rounded-lg shadow-md" : ""} flex items-center gap-3 text-base py-2 mt-4 px-3 cursor-pointer`}>
                  {link.icon}
                  <Link href={link.link} className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
              <IoExitOutline />
              <h3 className="font-semibold">Logout</h3>
            </div>
          </div>
        </div>

        {/* Sidebar on Dekstop / Laptop */}
        <div className={`${isCollapsed && !isHovered ? "w-28" : "w-64"} border-r border-gray-200 md:flex flex-col p-8 min-h-screen transition-all duration-300 hidden`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="flex flex-row justify-between items-center">
            <h2 className={`${isCollapsed && !isHovered ? "hidden" : "block"} text-center font-bold`}>LOGO</h2>
            <FiAlignRight className="text-lg cursor-pointer" onClick={handleToggle} />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col mt-12">
              <p className={`${isCollapsed && !isHovered ? "hidden" : "block"} text-xs font-bold text-gray-400`}>DASHBOARDS AND APPS</p>
              {sidebarLink.map((link, index) => (
                <div key={index} className={`${pathname === link.link ? "border border-gray-300 rounded-lg shadow-md" : ""} flex items-center gap-3 text-base py-2 mt-4 px-3 cursor-pointer`}>
                  {link.icon}
                  <Link href={link.link} className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
              <IoExitOutline />
              <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Logout</h3>
            </div>
          </div>
        </div>
        <div className="w-full px-12 py-8">
          <NavbarAdmin onClick={handleSidebar} />

          <NameAuth name="Minji" />

          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
