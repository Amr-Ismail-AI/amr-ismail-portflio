"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const AboutPage = () => {
  const containerRef = useRef();
  const skillRef = useRef();
  const experienceRef = useRef();

  const isSkillInView = useInView(skillRef, { margin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll lg:flex bg-gradient-to-b from-white to-blue-50"
      >

        {/* LEFT CONTENT */}
        <div className="p-6 sm:p-10 md:p-16 lg:p-20 xl:p-28 flex flex-col gap-28 lg:w-2/3">

          {/* BIO */}
          <section className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <Image
                src="/portfolio-image-2.jpeg"
                alt="profile"
                width={90}
                height={90}
                className="rounded-full object-cover border-2 border-blue-300"
              />
              <div>
                <h1 className="text-2xl font-bold">About Me</h1>
                <p className="text-sm text-gray-500">
                  Frontend Developer | React | Next.js
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              I am a frontend developer focused on building clean, scalable and
              interactive web applications using React.js and Next.js. I care
              about performance, UI details, and real-world usability more than
              just visuals.
            </p>

            <p className="italic text-gray-500">
              “Good UI is not how it looks — it’s how it feels to use.”
            </p>
          </section>

          {/* SKILLS */}
          <section ref={skillRef} className="flex flex-col gap-6">
            <motion.h2
              animate={isSkillInView ? { x: 0 } : { x: -100 }}
              className="text-2xl font-bold"
            >
              Skills
            </motion.h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "API Integration",
                "UI Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section ref={experienceRef} className="flex flex-col gap-10 pb-32">

            <motion.h2
              animate={isExperienceInView ? { x: 0 } : { x: -100 }}
              className="text-2xl font-bold"
            >
              Experience
            </motion.h2>

            {/* ITEM 1 */}
            <div className="flex flex-col gap-2 border-l-2 border-blue-300 pl-6">
              <h3 className="font-semibold">Frontend Projects Developer</h3>
              <p className="text-sm text-gray-500">2024 - Present</p>
              <p className="text-gray-700 text-sm">
                Building React & Next.js projects focused on UI, performance,
                and real-world features like APIs, forms, and dashboards.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col gap-2 border-l-2 border-blue-200 pl-6">
              <h3 className="font-semibold">React Learning Phase</h3>
              <p className="text-sm text-gray-500">2023 - 2024</p>
              <p className="text-gray-700 text-sm">
                Focused on mastering React fundamentals, hooks, routing, and
                component architecture.
              </p>
            </div>

          </section>
        </div>

        {/* RIGHT VISUAL SECTION */}
        <div className="hidden lg:block lg:w-1/3 sticky top-0 h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-center p-10">
            <h2 className="text-3xl font-bold mb-4">
              Developer Identity
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I don’t just write code — I build user experiences that feel
              natural, fast, and scalable.
            </p>

            <div className="mt-8 w-32 h-32 mx-auto rounded-full bg-blue-300/30 blur-2xl" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;