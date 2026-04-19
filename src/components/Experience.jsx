"use client";
import { motion } from "framer-motion";

const data = [
  {
    title: "Frontend Developer",
    company: "Self Learning",
    year: "2023 - Now",
  },
  {
    title: "Frontend Developer Intern",
    company: "Link Development",
    year: "1/7/2025 - 14/8/2025",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative z-10">
      <h2 className="text-3xl text-center mb-12">Experience</h2>

      <div className="max-w-3xl mx-auto border-l border-white/10 pl-6 space-y-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <span className="absolute -left-[20px] top-2 w-3 h-3 bg-indigo-500 rounded-full"></span>

            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-gray-400">{item.company}</p>
            <span className="text-sm text-gray-500">{item.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}