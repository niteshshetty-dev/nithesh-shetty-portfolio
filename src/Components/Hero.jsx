import { ChevronDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="  h-screen flex flex-col p-4 justify-center text-center items-center bg-gradient-to-r from-white via-blue-100 to-blue-200"
      >
        <h2 className="tex-lg">Hi I am, </h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#0f172a]"
        >
          Nithesh Shetty
        </motion.h1>
        <p className="text-base mt-4 max-w-md text-gray-700">
          I love building clean, modern UIs with React, Redux, Tailwind, and
          JavaScript.
        </p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:scale-105 transition-all"
        >
          Download Resume
        </motion.button>
        <a href="#about" className="mt-10 animate-bounce text-blue-700">
          <ChevronDown />
        </a>
      </section>
    </>
  );
}

export default Hero;
