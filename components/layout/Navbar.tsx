"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../../Assets/images/navbar/btblogo.png"
import Button from "../main/home/Button"

const navLinks = [
  { name: "Create Position", href: "/create-position" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Top Positions", href: "/top-positions" },
  { name: "Incentives", href: "/incentives" },
  { name: "Points", href: "/points" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-15  bg-[#06171E] font-roboto font-semibold p-3">
      <div className="flex justify-between items-center h-full w-full px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={65}
              height={65 }
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden sm:flex flex-grow justify-start py-4">
          <ul className="flex">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link href={link.href} key={link.name}>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className={`ml-5 uppercase text-sm rounded-lg justify-center outline-none items-center px-2 py-1 
                      ${
                        isActive ? 
                        "border border-customRed text-white pr-2 pl-2"
                        :
                         "text-gray-400 hover:text-white hover:border-transparent hover:bg-gray-800"
                         }
                         `}
                  >
                    {link.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
         <Button/>

          <div
            onClick={handleNav}
            className={`relative sm:hidden cursor-pointer text-white transition-transform duration-300
             ${
              menuOpen ? "transform rotate-90" : ""
            }`}
          >
            {menuOpen ? <RxCross2 size={25} /> : <IoMenuSharp size={25} />}
          </div>
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top w-full sm:hidden  bg-customDark p-10 ease-in duration-500"
            : "fixed left-[-100%]  p-10 ease-in duration-300"
        }
      >
        <div className="flex flex-col h-full">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link href={link.href} key={link.name}>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className={`ml-5 uppercase text-sm rounded-lg justify-center outline-none items-center px-1 py-1 text-center 
                         ${
                           isActive
                             ? "border-2 border-customRed text-white"
                             : "text-gray-400 hover:text-white hover:border-transparent hover:bg-gray-800"
                         }`}
                  >
                    {link.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
