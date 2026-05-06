"use client";
import Container from '@/components/sheard/Contatiner/Container';
import Button from '@/components/sheard/Button/button';
import Link from 'next/link';
import { MdArrowForward, MdDownload, MdEmail } from 'react-icons/md';

const CallToAction = () => {

  const downloadResume = () => {
    const resumeUrl = '/Kawsar.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kawsar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gradient-to-r from-[#0ef] to-blue-500 py-12 md:py-16">
      <Container>
        <div className="text-center">

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Start Your Project?
          </h2>

          {/* Description */}
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to bring your ideas to life. I&apos;m here to help you create something amazing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">

            <Link href="/contact">
              <Button className="flex items-center bg-white text-[#0ef] hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
                Get In Touch
                <MdEmail className="ml-2 text-xl" />
              </Button>
            </Link>

            <Button
              onClick={downloadResume}
              className="flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0ef] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
            >
              Download Resume
              <MdDownload className="ml-2 text-xl" />
            </Button>

            <Link href="/portfolio">
              <Button className="flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0ef] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
                View My Work
                <MdArrowForward className="ml-2 text-xl" />
              </Button>
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">24/7</div>
              <div className="text-white/80 text-sm md:text-base">Support Available</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Client Satisfaction</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">Fast</div>
              <div className="text-white/80 text-sm md:text-base">Project Delivery</div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default CallToAction;