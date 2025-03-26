"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants"; // Asegúrate de que esta función esté definida correctamente
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* Logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={90}
                height={36}
                alt="Logo de W-Food"
              />
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 text-center grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>
              <h4 className="font-semibold mb-5 text-orange">Blog</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">
                    Sit pellentesque neque egestas quis dolor, sit
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Tempor, volutpat nulla sed posuere orci ac diam integer
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Ultrices consectetur orci ultrices viverra mauris laoreet
                    tincidunt at
                  </Link>
                </li>
              </ul>
            </div>
            {/* item */}
            <div>
              <h4 className="font-semibold mb-5 text-orange">Nuevo Articulo</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">
                    Sit pellentesque neque egestas quis dolor, sit
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Tempor, volutpat nulla sed posuere orci ac diam integer
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Ultrices consectetur orci ultrices viverra mauris laoreet
                    tincidunt at
                  </Link>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <div>
              <h4 className="font-semibold mb-5 text-orange">Redes Sociales</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright  */}
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm">
            Todos los derechos reservados &copy; W-Food{" "}
            {new Date().getFullYear()} || Realizado por{" "}
            <span className="text-orange  italic">Oscar Garcia</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
