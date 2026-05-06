// components/EducationSection.js
import React from 'react';

const EducationSection = () => (
  <section
    id="education"
    className="education-section 
bg-[#09101a] "
  >
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-50 mb-8">
        EDUCATION
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* First Certificate */}
        <div
          className="cert w-full lg:w-1/2   rounded-lg shadow-bg bg-[#1B2A40]
         transition-shadow duration-300 mb-4 lg:mb-0"
        >
          <div className="p-6">
            <h3 className="text-xl text-gray-100 mb-2">
              TEXTILE VOCATIONAL INSTITUTE
            </h3>
            <div className="text-gray-200 font-serif mb-4">
              <p className="mb-1 text-base font-medium">TRADE: DYING PRINTING AND FINISHING</p>
              <p className="mb-1 text-base ">SESSION: 2017</p>
              <p className="mb-1 text-base ">PASSING YEAR: 2019</p>
              <p className="mb-1 text-base ">GPA: 4.29</p>
            </div>
            <p className="text-right font-semibold text-gray-300">SSC</p>
          </div>
        </div>
        {/* Second Certificate */}
        <div
          className="cert w-full  lg:w-1/2   rounded-lg shadow-md
        transition-shadow  mb-4 lg:mb-0 bg-[#1B2A40]"
        >
          <div className="p-6">
            <h3 className="text-xl text-gray-100 mb-2">
              COMILLA POLYTECHNIC INSTITUTE
            </h3>
            <div className="text-gray-200 font-serif mb-4">
              <p className="mb-1 text-base font-medium ">DEFERMENT: COMPUTER TECHNOLOGY</p>
              <p className="mb-1 text-base ">SESSION: 2019-20</p>
              <p className="mb-1 text-base ">PASSING YEAR: 2023</p>
              <p className="mb-1 text-base ">CGPA: 3.60</p>
            </div>
            <p className="text-right font-semibold text-gray-300">
              Diploma in Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
