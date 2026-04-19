"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          I'm Abdelrahman Elfiky, a Frontend Developer who enjoys building clean and responsive web interfaces.

I work with HTML, CSS, JavaScript, and React, and I’m currently improving my skills with Next.js and modern web technologies.

I like turning simple ideas into real projects and focusing on creating smooth and user-friendly experiences.

I'm always learning and working on improving both my coding skills and the way I design and build interfaces.

I'm open to opportunities where I can grow and contribute to real-world projects.
        </motion.p>

      </div>
    </section>
  );
}