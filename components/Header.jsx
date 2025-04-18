"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detector de Scroll
      setActive(window.scrollY > 100);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Limpiar evento listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4 " : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* Logo, Nav, Boton */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="" />
          </Link>
          {/* Nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          {/* Boton */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm" className="text-wrap">
              Reservar
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="text-white xl:hidden"
            iconStyles="text-3xl"
            linkStyles="capitalize"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;