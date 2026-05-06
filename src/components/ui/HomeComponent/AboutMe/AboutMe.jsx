"use client";
import Container from "@/components/sheard/Contatiner/Container";
import { images, aboutMe } from "@/index";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  const { title, description, position, contact, additionalInfo, closingStatement } = aboutMe;

  return (
    <section className="bg-gradient-to-b from-[#09101a] via-[#0a1120] to-[#09101a] py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0">
            <div className="rounded-full overflow-hidden shadow-2xl border-4 border-[#0ef]/40">
              <Image
                src={images.me2}
                alt="Md Kawsar Alam"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text & Info */}
          <div className="flex-1 text-center lg:text-left">
           
<h1 className=" font-bold text-white mb-6 text-3xl md:text-4xl text-white font-bold ">
                About <span className="text-[#0ef]">Me</span>
              </h1>
            <p className="text-gray-300 text-lg mb-4">{description}</p>

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              {position}
            </h3>

            <p className="text-gray-300 mb-6">{additionalInfo}</p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-[#0ef]/10 p-3 rounded-lg">
                <FaEnvelope className="text-[#0ef] text-xl" />
                <a href={`mailto:${contact.email}`} className="text-blue-400 truncate">
                  {contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3 bg-[#0ef]/10 p-3 rounded-lg">
                <FaPhoneAlt className="text-[#0ef] text-xl" />
                <a href={`tel:${contact.phone}`} className="text-blue-400 truncate">
                  {contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 bg-[#0ef]/10 p-3 rounded-lg">
                <FaGithub className="text-[#0ef] text-xl" />
                <a href={contact.github} className="text-blue-400 truncate">
                  {contact.github.replace("https://", "")}
                </a>
              </div>

              <div className="flex items-center gap-3 bg-[#0ef]/10 p-3 rounded-lg">
                <FaLinkedin className="text-[#0ef] text-xl" />
                <a href={contact.linkedin} className="text-blue-400 truncate">
                  {contact.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-gray-400 italic text-center lg:text-left">
              {closingStatement}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;