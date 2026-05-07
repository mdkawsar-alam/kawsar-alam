// components/EducationSection.js
import React from 'react';

const educations = [
  {
    index: '01',
    badge: 'SSC',
    institution: 'Textile Vocational Institute',
    trade: 'Dyeing, Printing & Finishing',
    session: '2017',
    passed: '2019',
    gpa: '4.29 / 5.00',
    year: '2019',
    cert: 'Secondary\nCertificate',
  },
  {
    index: '02',
    badge: 'Diploma',
    institution: 'Comilla Polytechnic Institute',
    trade: 'Computer Technology',
    session: '2019–20',
    passed: '2023',
    gpa: '3.60 / 4.00',
    year: '2023',
    cert: 'Diploma in\nEngineering',
  },
];

const EducationSection = () => (
  <section id="education" className="bg-[#09101a] px-8 py-14 font-mono">
    {/* Google Fonts */}
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Mono:wght@300;400&display=swap');`}</style>

    {/* Label row */}
    <div className="flex items-center gap-3 mb-3">
      <div className="flex-1 h-px bg-gradient-to-r from-[#2a3f5a] to-transparent" />
      <span className="text-[11px] tracking-[0.25em] text-[#4a7fa5] font-mono">
        academic background
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-[#2a3f5a] to-transparent" />
    </div>

    {/* Heading */}
    <h2
      className="text-center text-4xl font-semibold text-[#e8edf3] mb-12 tracking-tight"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      Education
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {educations.map((edu) => (
        <div
          key={edu.index}
          className="relative bg-[#0f1e2f] border border-[#1e3349] rounded-sm p-8 overflow-hidden
                     transition-all duration-300 hover:border-[#2e5a84] hover:-translate-y-1 group"
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e90c8] via-[#4a7fa5] to-transparent" />

          {/* Index */}
          <span className="absolute top-5 right-6 text-[11px] tracking-widest text-[#2e5a84] font-mono">
            {edu.index} / 02
          </span>

          {/* Badge */}
          <span className="inline-block text-[9px] tracking-[0.18em] text-[#1e90c8] border border-[#1e4a6e] rounded-sm px-2 py-0.5 mb-4 bg-[#0a1928] uppercase font-mono">
            {edu.badge}
          </span>

          {/* Institution */}
          <h3
            className="text-[17px] font-semibold text-[#d5e4f0] mb-1 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {edu.institution}
          </h3>

          {/* Trade */}
          <p className="text-[11px] text-[#4a7fa5] tracking-widest uppercase mb-6 font-mono">
            {edu.trade}
          </p>

          {/* Divider */}
          <div className="h-px bg-[#1e3349] mb-5" />

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {[['Session', edu.session], ['Passed', edu.passed]].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="text-[9px] tracking-[0.15em] text-[#2e5a84] uppercase font-mono">{k}</span>
                <span className="text-[13px] text-[#a0bcd0] font-mono">{v}</span>
              </div>
            ))}
            <div className="col-span-2 flex flex-col gap-0.5">
              <span className="text-[9px] tracking-[0.15em] text-[#2e5a84] uppercase font-mono">GPA / CGPA</span>
              <span className="text-[15px] text-[#1e90c8] font-mono">{edu.gpa}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-[#1e3349] flex justify-between items-end">
            <span className="text-[32px] font-light text-[#1b3a54] font-mono leading-none">
              {edu.year}
            </span>
            <span className="text-[10px] tracking-[0.15em] text-[#4a7fa5] uppercase text-right font-mono whitespace-pre">
              {edu.cert}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;