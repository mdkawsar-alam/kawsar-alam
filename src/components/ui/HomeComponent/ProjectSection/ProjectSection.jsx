"use client";
import { projects } from "@/index";
import Image from "next/image";

const Projects = () => {
  const list = projects;
  return (
    <section id="projects" className="bg-[#09101a] px-8 py-14 font-mono">
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Mono:wght@300;400&display=swap');`}</style>

      {/* Label row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-px bg-gradient-to-r from-[#2a3f5a] to-transparent" />
        <span className="text-[11px] tracking-[0.25em] text-[#4a7fa5] font-mono">
          featured projects
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-[#2a3f5a] to-transparent" />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-4xl font-semibold text-[#e8edf3] mb-12 tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Projects
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {list.map((project, index) => (
          <div
            key={project.id}
            className="relative bg-[#0f1e2f] border border-[#1e3349] rounded-sm p-8 overflow-hidden
                       transition-all duration-300 hover:border-[#2e5a84] hover:-translate-y-1 group"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e90c8] via-[#4a7fa5] to-transparent" />

            {/* Index */}
            <span className="absolute top-5 right-6 text-[11px] tracking-widest text-[#2e5a84] font-mono">
              {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
            </span>

            {/* Badge */}
            <span className="inline-block text-[9px] tracking-[0.18em] text-[#1e90c8] border border-[#1e4a6e] rounded-sm px-2 py-0.5 mb-4 bg-[#0a1928] uppercase font-mono">
              Project
            </span>

            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="rounded-sm mb-4 w-full h-auto"
              placeholder={project.placeholder ? "blur" : "empty"}
              blurDataURL={project.placeholder || undefined}
            />

            {/* Title */}
            <h3
              className="text-[17px] font-semibold text-[#d5e4f0] mb-1 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[13px] text-[#a0bcd0] mb-6 font-mono leading-relaxed">
              {project.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-[#1e3349] mb-5" />

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#1e3349] flex justify-between items-end">
              <span className="text-[10px] tracking-[0.15em] text-[#4a7fa5] uppercase text-right font-mono whitespace-pre">
                View Project
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e90c8] hover:text-[#4a7fa5] text-[13px] font-mono"
              >
                Link →
              </a>
            </div>
          </div>
        ))}
        {list.length === 0 && (
          <div className="col-span-full text-center text-gray-400">No projects configured yet.</div>
        )}
      </div>
    </section>
  );
};

export default Projects;
