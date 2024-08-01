import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiAlignRight } from "react-icons/fi";

function NavbarAdmin({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-between items-center w-full px-2">
      <FiAlignRight onClick={onClick} className="text-lg cursor-pointer md:hidden" />
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
  );
}

export default NavbarAdmin;
