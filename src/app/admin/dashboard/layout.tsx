"use client";
// Icons
import { IoHomeOutline, IoExitOutline } from "react-icons/io5";
import { BsBookmark, BsBoxArrowInUpRight } from "react-icons/bs";
import { MdOutlineEvent, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoMdTime } from "react-icons/io";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const date = new Date().toDateString();
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
  return (
    <div className="max-w-screen font-poppins">
      <div className="flex flex-row w-full">
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
              <div className="flex items-center gap-3 text-base py-2 mt-4 px-3 border border-gray-300 rounded-lg shadow-md cursor-pointer">
                <IoHomeOutline />
                <h3 className="font-semibold">Home</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <BsBookmark />
                <h3 className="font-semibold">About</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <MdOutlineEvent />
                <h3 className="font-semibold">Event</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <MdOutlineEventAvailable />
                <h3 className="font-semibold">Event Detail</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <FaRegQuestionCircle />
                <h3 className="font-semibold">Faq</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <BsBoxArrowInUpRight />
                <h3 className="font-semibold">Join Us</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <CiPhone />
                <h3 className="font-semibold">Contact</h3>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
              <IoExitOutline />
              <h3 className="font-semibold">Logout</h3>
            </div>
          </div>
        </div>

        <div className={`${isCollapsed && !isHovered ? "w-28" : "w-64"} border-r border-gray-200 md:flex flex-col p-8 min-h-screen transition-all duration-300 hidden`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="flex flex-row justify-between items-center">
            <h2 className={`${isCollapsed && !isHovered ? "hidden" : "block"} text-center font-bold`}>LOGO</h2>
            <FiAlignRight className="text-lg cursor-pointer" onClick={handleToggle} />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col mt-12">
              <p className={`${isCollapsed && !isHovered ? "hidden" : "block"} text-xs font-bold text-gray-400`}>DASHBOARDS AND APPS</p>
              <div className="flex items-center gap-3 text-base py-2 mt-4 px-3  border border-gray-300 rounded-lg shadow-md cursor-pointer">
                <IoHomeOutline />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Home</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <BsBookmark />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>About</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <MdOutlineEvent />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Event</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <MdOutlineEventAvailable />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Event Detail</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <FaRegQuestionCircle />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Faq</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <BsBoxArrowInUpRight />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Join Us</h3>
              </div>
              <div className="flex items-center gap-3 text-base py-3 px-3 mt-1 text-gray-500 hover:border-gray-300 hover:rounded-lg hover:shadow-md cursor-pointer">
                <CiPhone />
                <h3 className={`${isCollapsed && !isHovered ? "hidden" : "block"} font-semibold`}>Contact</h3>
              </div>
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
          {/* Navbar */}
          <div className="flex justify-between items-center w-full px-2">
            <FiAlignRight onClick={handleSidebar} className="text-lg cursor-pointer md:hidden" />
            <h2 className="font-bold text-sm">{`Admin > Dashboard`}</h2>
            <div className="flex justify-center items-center gap-3">
              <AiOutlineFullscreen className="text-xl mx-2" />
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <img src="/minji.jpeg" className="rounded-full w-10 h-10  object-cover" alt="" />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                        Account
                      </a>
                    </MenuItem>
                  </div>

                  <div className="py-1">
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                        Logout
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <div className="flex justify-between max-w-screen items-center border border-gray-200 rounded-lg mt-4 p-6">
            <div>
              <h2 className="text-2xl font-bold">Hello Minji</h2>
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

          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
