"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";

const links = [
  { url: "/", title: "Home" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -30,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-6 text-lg relative z-[999]">

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-2 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center hover:scale-105 transition"
        >
          <span className="text-white mr-1">Amr Ismail</span>

          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            <DiReact className="w-10 h-10 text-cyan-500" />
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex w-1/3 justify-center gap-6">
        <Link
          href="https://github.com/Amr-Ismail-AI"
          title="Github"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Image src="/github.png" alt="" width={28} height={28} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/-amr-ismail/"
          title="LinkedIn"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Image src="/linkedin.png" alt="" width={28} height={28} />
        </Link>

        <Link
          href="https://wa.link/j4umzm"
          title="WhatsApp"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Image src="/whatsapp.webp" alt="" width={28} height={28} />
        </Link>

        <Link
          href="https://www.instagram.com/amr_ismail_n/"
          title="Instagram"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Image src="/instagram.png" alt="" width={28} height={28} />
        </Link>

        <Link
          href="https://www.facebook.com/amrmohammad.n3r/"
          title="Facebook"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Image src="/facebook.png" alt="" width={28} height={28} />
        </Link>

      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">

        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-[1001] relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />

          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />

          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {/* MOBILE MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6 text-4xl z-[1000]"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className="w-full flex justify-center"
              >
                <Link
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="
                    px-8 py-4
                    rounded-2xl
                    hover:bg-white/10
                    active:scale-95
                    transition-all duration-300
                    cursor-pointer
                    w-[250px]
                    text-center
                  "
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;