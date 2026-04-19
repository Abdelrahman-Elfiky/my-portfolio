"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("abdelrahman.elfiky152@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 text-center px-6 relative z-10">
      <h2 className="text-3xl mb-6">Contact</h2>

      <p className="text-gray-400 mb-10">
        Let’s build something great together 
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        {/* Email */}
        <motion.button
          onClick={copyEmail}
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full 
          hover:bg-white hover:text-black transition"
        >
          <FaEnvelope />
          {copied ? "Copied!" : "Email"}
        </motion.button>

        {/* GitHub */}
        <motion.button
          onClick={() => window.open("https://github.com/Abdelrahman-Elfiky")}
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full  hover:bg-white hover:text-black transition"
        >
          <FaGithub />
          GitHub
        </motion.button>

        {/* LinkedIn */}
        <motion.button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/abdelrahman-elfiky-a4400424a"
            )
          }
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full  hover:bg-white hover:text-black transition"
        >
          <FaLinkedin />
          LinkedIn
        </motion.button>

      </div>
    </section>
  );
}