"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Footer from "../components/footer";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const Homepage = () => {
  return (
    <motion.main
      className="min-h-[100dvh] bg-gradient-to-br from-[#f4fbff] via-white to-[#eef8ff] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 min-h-[100dvh] flex flex-col lg:flex-row items-center justify-center gap-10 py-10">

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-white/40"
          >
            <Image
              src="/portfolio-image-2.jpeg"
              alt="profile"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">

          {/* SMALL LABEL */}
          <span className="text-xs tracking-[0.25em] uppercase text-cyan-500 mb-4">
            Personal Portfolio
          </span>

          {/* NAME */}
          <p className={`${dmSerif.className} text-lg sm:text-xl text-slate-500 mb-2`}>
            Amr Ismail
          </p>

          {/* TITLE */}
          <h1 className={`${dmSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}>
            Frontend <br />
            Developer <br />
            <span className="text-cyan-500 italic">& React</span>
          </h1>

          {/* DESCRIPTION */}
          <p className={`${dmSans.className} text-sm sm:text-base text-slate-600 leading-relaxed mt-5 max-w-lg mx-auto lg:mx-0`}>
            I build modern, responsive and performant web interfaces using React and Next.js with focus on clean UI and user experience.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-7 justify-center lg:justify-start">
            <Link href="/portfolio" className="px-5 py-2.5 bg-cyan-500 text-white rounded-md text-sm hover:bg-cyan-600 transition">
              View Work
            </Link>

            <Link href="/contact" className="px-5 py-2.5 border border-cyan-200 text-slate-700 rounded-md text-sm hover:bg-cyan-50 transition">
              Contact Me
            </Link>
          </div>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
            {["React", "Next.js", "Tailwind", "UI"].map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-3 py-1 rounded-full bg-cyan-100/60 text-cyan-700 border border-cyan-200/40"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </motion.main>
  );
};

export default Homepage;