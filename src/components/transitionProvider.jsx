"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const pageTitle = pathName === "/" ? "Home" : pathName.substring(1);

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        {/* TOP OVERLAY */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* PAGE TITLE (FULL DISAPPEAR FIX) */}
        <AnimatePresence>
          <motion.div
            key={pathName}
            className="fixed inset-0 flex items-center justify-center text-white text-7xl z-50 pointer-events-none"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: 0,
              scale: 1.2,
              filter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.5,
              filter: "blur(20px)",
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {pageTitle}
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM OVERLAY */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 0.5 },
          }}
        />

        {/* NAVBAR */}
        <div className="h-20 relative z-50">
          <Navbar />
        </div>

        {/* PAGE CONTENT */}
        <div className="h-[calc(100vh-6rem)] relative z-10">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;