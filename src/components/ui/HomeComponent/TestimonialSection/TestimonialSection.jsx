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
    <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center h-full border border-white/10 hover:shadow-[0_0_25px_#0ef5ff50] transition-transform transform hover:-translate-y-1">
      
      {/* Quote Icon */}
      <FaQuoteLeft className="text-[#0ef] text-3xl mx-auto mb-4" />

      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mx-auto mb-3 border-2 border-[#0ef]"
      />

      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400 mb-2">{title}</p>

      <p className="text-gray-300 text-sm leading-relaxed mb-3">{quote}</p>

      {/* Star Rating */}
      <div className="flex justify-center gap-1">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} className="text-[#0ef]" />
        ))}
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="bg-[#09101A] py-16">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Client <span className="text-[#0ef]">Testimonials</span>
        </h2>

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