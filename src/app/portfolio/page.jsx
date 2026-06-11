"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Footer from "@/components/footer";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Scientific Website",
    desc: "A modern academic zoology website designed for a faculty member in the College of Agriculture, providing structured presentation of educational content, research work, and academic resources with a clean and responsive user interface.",
    img: "/project-1.jpeg",
    link: "https://zoology-academic-demo-project.netlify.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React Shopping Cart",
    desc: "A fully responsive e-commerce shopping cart interface demonstrating core frontend concepts such as state management, dynamic product handling, and user interaction flow.",
    img: "/project-2.jpeg",
    link: "https://shopping-cart-project-with-reda.netlify.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React Prayer-times",
    desc: "A modern minimal prayer times app based on geolocation with accurate daily timings and clean UI.",
    img: "/project-3.jpeg",
    link: "https://prayer-times-project.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "React Todos",
    desc: "Task management app with full CRUD operations and dynamic state updates.",
    img: "/project-4.jpeg",
    link: "https://todo-project-with-maxmillian.netlify.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-violet-300",
    title: "React Investment App",
    desc: "Fintech dashboard UI for portfolio tracking and financial insights visualization.",
    img: "/project-5.jpeg",
    link: "https://investment-project-with-maxmillian.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  
  // تم ضبط مصفوفة الحسابات هنا بدقة لتتوافق مع حركة العناصر الستة بشكل انسيابي تماماً ومريح للعين
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  return (
    // التعديل السحري هنا: تم تغيير h-full إلى w-full لفتح المجال لـ Scrollbar المتصفح ليعمل بحرية كاملة
    <motion.div
      className="w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>

        {/* TITLE */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-6xl lg:text-8xl font-bold text-center px-4">
          My Works
        </div>

        {/* SCROLL SECTION */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">

            {/* INTRO */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 flex-shrink-0">
              <h2 className="text-white text-4xl md:text-6xl font-bold">
                Selected Projects
              </h2>
            </div>

            {/* PROJECTS */}
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} flex-shrink-0`}
              >
                {/* CARD */}
                <div className="w-full max-w-3xl px-6 md:px-10 flex flex-col gap-6">

                  {/* INDEX */}
                  <span className="text-white/70 text-sm tracking-[0.3em] uppercase">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TITLE */}
                  <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                    {item.title}
                  </h1>

                  {/* CONTENT */}
                  <div className="flex flex-col md:flex-row gap-6 items-start">

                    {/* IMAGE */}
                    <div className="relative w-full md:w-[320px] h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col gap-4 flex-1">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                      <Link href={item.link} target="_blank">
                        <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-fit">
                          View Project →
                        </button>
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}

            {/* END */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 flex-shrink-0">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                End of Projects
              </h2>
            </div>

          </motion.div>
        </div>
      </div>

      {/* CONTACT CTA */}
      <div className="w-screen h-screen flex flex-col items-center justify-center text-center gap-10 px-4">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold">
          Do you have a project?
        </h1>

        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 300 300"
            className="w-44 h-44 md:w-72 md:h-72"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Frontend Developer • React • UI Engineering •
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="absolute inset-0 m-auto w-16 h-16 md:w-24 md:h-24 bg-black text-white rounded-full flex items-center justify-center font-semibold hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;