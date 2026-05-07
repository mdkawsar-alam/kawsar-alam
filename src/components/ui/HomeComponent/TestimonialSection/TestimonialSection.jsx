"use client";

import Container from "@/components/sheard/Contatiner/Container";
import { testimonials } from "@/index";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialCard({ image, name, title, quote, rating }) {
  return (
    <div className="relative bg-[#0f1e2f] border border-[#1e3349] rounded-sm p-8 overflow-hidden transition-all duration-300 hover:border-[#2e5a84] hover:-translate-y-1 group h-full">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e90c8] via-[#4a7fa5] to-transparent" />

      <span className="inline-block text-[9px] tracking-[0.18em] text-[#1e90c8] border border-[#1e4a6e] rounded-sm px-2 py-0.5 mb-4 bg-[#0a1928] uppercase font-mono">
        testimonial
      </span>

      <FaQuoteLeft className="text-[#0ef] text-3xl mx-auto mb-4" />

      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mx-auto mb-3 border-2 border-[#0ef]"
      />

      <h3 className="text-[17px] font-semibold text-[#d5e4f0] mb-1 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
        {name}
      </h3>
      <p className="text-[11px] text-[#4a7fa5] tracking-widest uppercase mb-4 font-mono">
        {title}
      </p>

      <p className="text-[13px] text-[#a0bcd0] leading-relaxed mb-5 font-mono">
        {quote}
      </p>

      <div className="flex justify-center gap-1 mb-2">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} className="text-[#0ef]" />
        ))}
      </div>

      <span className="text-[10px] tracking-[0.15em] text-[#4a7fa5] uppercase font-mono">
        Trusted feedback
      </span>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="testimonials" className="bg-[#09101a] px-8 py-14 font-mono">
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Mono:wght@300;400&display=swap');`}</style>

      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-px bg-gradient-to-r from-[#2a3f5a] to-transparent" />
        <span className="text-[11px] tracking-[0.25em] text-[#4a7fa5] font-mono">
          client testimonials
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-[#2a3f5a] to-transparent" />
      </div>

      <h2
        className="text-center text-4xl font-semibold text-[#e8edf3] mb-12 tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        What Clients Say
      </h2>

      <Container>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} rating={5} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}