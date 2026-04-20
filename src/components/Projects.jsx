"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 text-center relative z-10">
      <h2 className="text-3xl mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group border border-white/10 rounded-xl overflow-hidden 
            bg-white/5 backdrop-blur hover:-translate-y-2 transition"
          >

            
            <div className="h-40 bg-gray-800 overflow-hidden">
              <img
                src={p.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>

              <div className="flex gap-4 mt-6 justify-center">

                <button
                  onClick={() => window.open(p.github)}
                  className="px-4 py-2 bg-blue-600 rounded-full text-sm hover:scale-105 transition"
                >
                  GitHub
                </button>

                <button
                  onClick={() => window.open(p.live)}
                  className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  Live
                </button>

              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
