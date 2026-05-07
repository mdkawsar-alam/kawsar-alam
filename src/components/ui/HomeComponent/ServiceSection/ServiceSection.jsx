"use client";
import Container from '@/components/sheard/Contatiner/Container';
import { services } from '@/index';

const icons = [
  'M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z',
  'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
  'M9.53 2.47a.75.75 0 0 1 0 1.06L4.56 8.5H20a.75.75 0 0 1 0 1.5H4.56l4.97 4.97a.75.75 0 1 1-1.06 1.06l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0z',
  'M5 12h14M12 5l7 7-7 7',
  'M12 18h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
  'M13 10V3L4 14h7v7l9-11h-7z',
];

const Services = () => (
  <section className="bg-[#09101A] px-8 py-14 font-mono" id="services">
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Mono:wght@300;400&display=swap');`}</style>
    <Container>
      {/* Label row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-px bg-gradient-to-r from-[#2a3f5a] to-transparent" />
        <span className="text-[11px] tracking-[0.25em] text-[#4a7fa5] font-mono">what i offer</span>
        <div className="flex-1 h-px bg-gradient-to-l from-[#2a3f5a] to-transparent" />
      </div>

      {/* Heading */}
      <h2
        className="text-4xl font-semibold text-[#e8edf3] text-center mb-12 tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#0f1e2f] border border-[#1e3349] rounded-sm p-7 overflow-hidden
                       transition-all duration-300 hover:border-[#2e5a84] hover:-translate-y-1"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e90c8] via-[#4a7fa5] to-transparent" />

            {/* Icon box */}
            <div className="w-10 h-10 border border-[#1e4a6e] rounded bg-[#0a1928] flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-[#1e90c8]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={icons[index % icons.length]} />
              </svg>
            </div>

            {/* Title */}
            <h3
              className="text-[16px] font-semibold text-[#d5e4f0] mb-2.5 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[12px] text-[#4a7fa5] leading-relaxed font-mono">
              {service.description}
            </p>

            {/* Ghost number */}
            <span className="absolute bottom-4 right-5 text-[28px] font-light text-[#1b3a54] font-mono leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}

        {services.length === 0 && (
          <div className="col-span-full text-center text-[#2e5a84] text-sm py-12 tracking-widest uppercase font-mono">
            No services configured yet.
          </div>
        )}
      </div>
    </Container>
  </section>
);

export default Services;