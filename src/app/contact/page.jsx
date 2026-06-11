"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-[calc(100vh-6rem)] lg:h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        
        {/* TEXT SIDE */}
        <div className="h-auto py-8 md:h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl lg:text-7xl font-bold text-center">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="text-2xl md:text-3xl"> 😊</span>
          </div>
        </div>

        {/* FORM SIDE */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-auto md:h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl flex flex-col justify-center gap-6 p-8 md:p-14 lg:p-24 py-12 text-xl"
        >
          <span className="text-gray-700">Dear Amr Ismail,</span>
          
          <textarea
            rows={5}
            name="user_message"
            className="
              w-full
              min-h-[clamp(140px,20vh,260px)]
              bg-transparent
              border-b-2
              border-b-black
              outline-none
              resize-none
              px-2
              pt-2
              pb-4
              text-base
              leading-relaxed
              align-top
              transition-all
              duration-300
              focus:border-purple-500
              focus:ring-2
              focus:ring-purple-300/40
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            placeholder="Write your message here..."
          />
          
          <span className="text-gray-700">My mail address is:</span>
          
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none p-4 text-base focus:border-purple-500 transition               focus:border-purple-500
              focus:ring-2
              focus:ring-purple-300/40
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden"
            placeholder="your-email@example.com"
          />
          
          <span className="text-gray-700">Regards</span>
          
          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-700 p-4 hover:bg-purple-300 transition shadow-sm active:scale-[0.98]"
          >
            Send
          </button>
          
          {success && (
            <span className="text-green-600 font-semibold text-center text-base">
              Your message has been sent successfully!
            </span>
          )}
          
          {error && (
            <span className="text-red-600 font-semibold text-center text-base">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;