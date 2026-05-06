"use client";

import Container from '@/components/sheard/Contatiner/Container';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn, 
  MdAccessTime,
  MdSend,
  MdCheckCircle
} from 'react-icons/md';

const InputField = ({ register, name, placeholder, required, type = "text" }) => (
  <input
    {...register(name, { required })}
    type={type}
    placeholder={placeholder}
    className="mt-1 p-4 w-full border border-[#0EF] rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:border-[#0ef] focus:ring-2 focus:ring-[#0ef]/20 transition-all duration-300"
  />
);

const TextAreaField = ({ register, name, placeholder, required, rows = 4 }) => (
  <textarea
    {...register(name, { required })}
    placeholder={placeholder}
    rows={rows}
    className="mt-2 p-4 w-full border border-[#0EF] rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:border-[#0ef] focus:ring-2 focus:ring-[#0ef]/20 transition-all duration-300 resize-none"
  ></textarea>
);

const ContactInfo = ({ icon: Icon, title, details, link }) => (
  <div className="flex items-start space-x-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 group">
    <div className="flex-shrink-0">
      <Icon className="text-[#0ef] text-2xl group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      {link ? (
        <a 
          href={link} 
          className="text-gray-300 hover:text-[#0ef] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {details}
        </a>
      ) : (
        <p className="text-gray-300">{details}</p>
      )}
    </div>
  </div>
);

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form Data:', data);
      
      // Here you would typically send data to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#09101A] py-16 min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#0ef]">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={MdEmail}
                  title="Email Address"
                  details="kawsar@example.com"
                  link="mailto:kawsar@example.com"
                />
                <ContactInfo
                  icon={MdPhone}
                  title="Phone Number"
                  details="+880 1234 567890"
                  link="tel:+8801234567890"
                />
                <ContactInfo
                  icon={MdLocationOn}
                  title="Location"
                  details="Dhaka, Bangladesh"
                />
                <ContactInfo
                  icon={MdAccessTime}
                  title="Working Hours"
                  details="Mon - Fri: 9:00 AM - 6:00 PM"
                />
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Find Me</h3>
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277552998015!2d90.3675414!3d23.7759828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a8cbed0ef1%3A0x54907da46d5b2b!2sDhaka%201000%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1635789012345!5m2!1sen!2sbd"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <InputField 
                    register={register} 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1 block">Name is required</span>}
                </div>
                <div>
                  <InputField 
                    register={register} 
                    name="email" 
                    type="email"
                    placeholder="Your Email" 
                    required 
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1 block">Email is required</span>}
                </div>
              </div>
              
              <div>
                <InputField 
                  register={register} 
                  name="phone" 
                  type="tel"
                  placeholder="Your Phone Number" 
                  required 
                />
                {errors.phone && <span className="text-red-500 text-sm mt-1 block">Phone number is required</span>}
              </div>
              
              <div>
                <TextAreaField 
                  register={register} 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  rows={6}
                />
                {errors.message && <span className="text-red-500 text-sm mt-1 block">Message is required</span>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting || isSubmitted
                    ? 'bg-green-600 text-white cursor-not-allowed'
                    : 'bg-[#0ef] text-black hover:bg-[#0ef]/80 hover:scale-105 transform'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <MdCheckCircle className="text-xl" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <MdSend className="text-xl" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
