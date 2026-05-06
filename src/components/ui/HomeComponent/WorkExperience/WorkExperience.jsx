import React from "react";
import { experiences } from '@/index';
import { MdWorkOutline } from "react-icons/md";

const WorkExperience = () => {
  return (
    <section className="bg-[#09101A] py-12 px-6 md:px-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-[#1B2A40] p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* Icon on top */}
              <div className="flex items-center justify-center w-16 h-16 bg-[#0ef]/20 rounded-full mb-4">
                <MdWorkOutline className="text-[#0ef] text-3xl" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.company}
                </h3>

                <p className="text-gray-300 font-serif mt-2">
                  <span className="font-bold">Position:</span> {exp.position}
                </p>

                <p className="text-gray-300 font-serif">
                  <span className="font-bold">Duration:</span> {exp.duration}
                </p>

                <p className="text-gray-300 mt-4 font-serif">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;