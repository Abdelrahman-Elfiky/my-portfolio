"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // active section
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

    const handleScroll = () => {
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (id) =>
    `cursor-pointer transition ${
      active === id ? "text-indigo-400" : "text-white/70 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

       
        <h1
          onClick={() => scrollToSection("home")}
          className="font-semibold cursor-pointer"
        >
          Abdelrahman
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm">

          <span onClick={() => scrollToSection("hero")} className={linkStyle("hero")}>
            Home
          </span>
          <span onClick={() => scrollToSection("about")} className={linkStyle("about")}>
            About
          </span>
          <span onClick={() => scrollToSection("skills")} className={linkStyle("skills")}>
            Skills
          </span>
          <span onClick={() => scrollToSection("projects")} className={linkStyle("projects")}>
            Projects
          </span>
          <span onClick={() => scrollToSection("experience")} className={linkStyle("experience")}>
            Experience
          </span>


        </div>
      </div>
    </nav>
  );
}
