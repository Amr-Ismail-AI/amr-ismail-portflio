"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";

const Footer = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const social = [
    { icon: "/github.png", url: "https://github.com/Amr-Ismail-AI" },
    { icon: "/instagram.png", url: "https://www.instagram.com/amr_ismail_n/" },
    { icon: "/facebook.png", url: "https://www.facebook.com/amrmohammad.n3r/" },
    { icon: "/whatsapp.webp", url: "https://wa.link/j4umzm" },
    { icon: "/linkedin.png", url: "https://www.linkedin.com/in/-amr-ismail/" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-white to-blue-50 border-t border-slate-200 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-14 justify-between">

          {/* BRAND */}
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-slate-900">
                Amr Ismail
              </span>

              <span className="w-11 h-11 rounded-lg bg-black flex items-center justify-center">
                <DiReact className="text-cyan-400 text-3xl" />
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Frontend Developer focused on building clean, scalable and interactive web experiences using React.js and Next.js.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  bg-black text-white
                  px-6 py-3
                  rounded-xl
                  text-sm font-medium
                  hover:bg-slate-800
                  transition-all duration-300
                "
              >
                Let’s Talk
              </Link>
            </motion.div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3">

            <h3 className="font-semibold text-slate-800 mb-1">
              Navigation
            </h3>

            <div className="flex flex-col gap-2 items-start">

              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="
                    flex items-center
                    w-full

                    px-4 py-3
                    rounded-xl

                    text-sm font-medium
                    text-slate-600

                    hover:text-black
                    hover:bg-white/80

                    active:scale-95

                    transition-all duration-300
                  "
                >
                  {link.title}
                </Link>
              ))}

            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-4">

            <h3 className="font-semibold text-slate-800">
              Social
            </h3>

            <div className="flex flex-wrap gap-3">

              {social.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  target="_blank"
                  className="
                    p-3
                    rounded-2xl

                    bg-white/50
                    hover:bg-white

                    hover:scale-110
                    active:scale-95

                    transition-all duration-300
                  "
                >
                  <Image
                    src={item.icon}
                    alt="social"
                    width={24}
                    height={24}
                  />
                </Link>
              ))}

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Amr Ismail. All rights reserved.
          </p>

          <p className="text-xs text-slate-500 text-center md:text-right">
            Built with Next.js + Tailwind CSS + Framer Motion ⚡
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;