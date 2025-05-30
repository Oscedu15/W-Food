"use client";

import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "inicio",
    name: "inicio",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menú",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "Quienes somos",
    offset: -50,
  },
  {
    icon: <RiHomeFill />,
    path: "contactanos",
    name: "contactanos",
    offset: 0,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${containerStyles}`}>
      {/* Nav trigger button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* Nav close button */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-green flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" width={90} height={36} alt="Logo" />
          </Link>
          {/* Links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={true}
                  className="flex items-center gap-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          {/* Button */}
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange">Reservar</Button>
          </ScrollLink>
        </div>
        <div className="py-4">
          <p className="text-white/60 text-center text-sm">
            Desarrollado por{" "}
            <span className="text-orange font-semibold">Oscar Garcia</span>{" "}
            &copy;
          </p>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
