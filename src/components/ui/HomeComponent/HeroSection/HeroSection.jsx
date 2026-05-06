'use client';

import Button from '@/components/sheard/Button/button';
import Container from '@/components/sheard/Contatiner/Container';
import { heroSlides } from '@/index';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MdOutlineFileDownload, MdPause, MdPlayArrow } from "react-icons/md";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kawsar.pdf';
    link.download = 'Kawsar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-[#09101A] overflow-hidden
      min-h-[130vh]  md:min-h-[150vh] lg:min-h-screen flex items-center
      pt-[80px]  lg:pt-[120px]   /* Adjust header height */
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,238,255,0.15),_transparent_60%)]"/>

      <Container>
        <div className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 md:gap-12">

          {heroSlides.map((slide, index) => (
            <div key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[2500ms] ease-in-out
                ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            >
              <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 w-full px-4">

                {/* TEXT */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      Hi I'm Kawsar
                    </span>
                    <br/>
                    {slide.title}
                    <br/>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300">{slide.subtitle}</span>
                  </h1>

                  <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-base">{slide.description}</p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {slide.tech.map((tech,i)=>(
                      <span key={i} className="px-3 py-1 text-xs sm:text-sm md:text-sm bg-[#00eeff]/20 text-[#00eeff] rounded-full hover:bg-[#00eeff] hover:text-black transition">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 flex-wrap justify-center lg:justify-start mt-2">
                    <Button
                      onClick={downloadResume}
                      className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-[#00eeff] text-black font-semibold rounded-md hover:bg-[#00c8d8] transition text-sm sm:text-base"
                    >
                      <MdOutlineFileDownload/> Download CV
                    </Button>

                    <a
                      href="#about"
                      className="px-5 py-2 sm:px-6 sm:py-3 border border-[#00eeff] text-[#00eeff] rounded-md hover:bg-[#00eeff] hover:text-black transition text-sm sm:text-base"
                    >
                      About Me
                    </a>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="lg:w-1/2 flex justify-center z-0">
                  <Image
                    src={slide.image}
                    alt="kawsar"
                    width={320}
                    height={320}
                    className="rounded-full border-4 border-[#00eeff]/40 shadow-[0_0_60px_rgba(0,238,255,0.5)]
                      object-contain w-[150px] sm:w-[180px] md:w-[220px] lg:w-[300px]
                      animate-floatSmooth"
                  />
                </div>

              </div>
            </div>
          ))}

        </div>
      </Container>

      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        className="absolute top-6 right-6 bg-black/50 p-3 rounded-full text-white hover:bg-[#00eeff] hover:text-black transition"
      >
        {isPlaying ? <MdPause/> : <MdPlayArrow/>}
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-[#00eeff] scale-125' : 'bg-white/40'}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;