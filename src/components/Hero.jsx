"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center px-6  overflow-hidden relative z-10">

      {/* glow background */}
      <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>

      <div className="max-w-4xl mx-auto z-10">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          Hi, I'm Abdelrahman Elfiky <br />

          <span className="text-indigo-400">
            <Typewriter
              words={[
                "Frontend Developer",
                "React & Next.js Developer",
                "I build modern web apps",
              ]}
              loop
              cursor
              cursorStyle="|"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-lg"
        >
          I create clean, modern, and interactive web experiences with smooth UI & performance.
        </motion.p>

      </div>
    </section>
  );
}