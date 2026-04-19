"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 text-center relative z-10">
      <h2 className="text-3xl mb-12">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-6 border border-white/10 rounded-xl 
            bg-white/5 backdrop-blur hover:border-blue-400 
            hover:-translate-y-1 transition"
          >
            {/* Icon */}
            <span className="text-2xl text-blue-400">
              {skill.icon}
            </span>

            {/* Text */}
            <span className="text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}