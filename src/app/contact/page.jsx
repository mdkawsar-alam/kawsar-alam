'use client';
import React, { useState, useEffect } from 'react';
import ContactInfo from '@/components/ui/ContactPage/ContactInfo';
import GoogleMap from '@/components/ui/ContactPage/GoogleMap';
import ContactForm from '@/components/ui/ContactForm/ContactForm';

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    title: "Get In Touch",
    subtitle: "I'd love to hear from you. Send me a message and I'll respond as soon as possible.",
    address: "Dhaka, Bangladesh",
    phone: "+880 1557 132665",
    email: "mdkawsaralam537@gmail.com",
    website: "https://kawsar-portfolio.com",
    workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
    socialLinks: {
      linkedin: "https://linkedin.com/in/md-kawsar-alam997",
      github: "https://github.com/mdkawsar-alam",
      twitter: "https://twitter.com/mdkawsar_alam",
      instagram: "https://instagram.com/mdkawsar.alam"
    }
  });

  const [mapLocation, setMapLocation] = useState({
    lat: 23.8103,
    lng: 90.4125,
    address: "Dhaka, Bangladesh"
  });

  useEffect(() => {
    // Load contact data from localStorage or API
    const savedData = localStorage.getItem('portfolioContent');
    if (savedData) {
      const content = JSON.parse(savedData);
      if (content.contact) {
        setContactData(content.contact);
      }
      if (content.contact?.mapLocation) {
        setMapLocation(content.contact.mapLocation);
      }
    }
  }, []);

    return (
    <div className="min-h-screen bg-gradient-to-br from-[#09101A] via-[#0F172A] to-[#1B2A40]">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00eeff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I&apos;m here to help you create amazing digital experiences.
              Let&apos;s discuss your project and make something incredible together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo contactData={contactData} />
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#1B2A40] to-[#09101A] rounded-2xl p-8 shadow-2xl border border-gray-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Send Message</h2>
                <p className="text-gray-300">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Google Map */}
            <div className="bg-gradient-to-br from-[#1B2A40] to-[#09101A] rounded-2xl p-8 shadow-2xl border border-gray-700/50">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">Find Me</h2>
                <p className="text-gray-300">
                  Located in the heart of Dhaka, Bangladesh
                </p>
              </div>
              <GoogleMap location={mapLocation} height="400px" />
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Reach Me</h2>
            <p className="text-gray-300">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-gradient-to-br from-[#1B2A40] to-[#09101A] rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00eeff] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
              <p className="text-gray-300 mb-4">For detailed discussions and project inquiries</p>
              <a 
                href={`mailto:${contactData.email}`}
                className="text-[#00eeff] hover:text-blue-400 transition-colors font-medium"
              >
                {contactData.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-[#1B2A40] to-[#09101A] rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
              <p className="text-gray-300 mb-4">For urgent matters and quick discussions</p>
              <a 
                href={`tel:${contactData.phone}`}
                className="text-green-400 hover:text-emerald-400 transition-colors font-medium"
              >
                {contactData.phone}
              </a>
            </div>

            {/* Social */}
            <div className="bg-gradient-to-br from-[#1B2A40] to-[#09101A] rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Follow Me</h3>
              <p className="text-gray-300 mb-4">Connect on social media platforms</p>
              <div className="flex justify-center space-x-4">
                <a href={contactData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href={contactData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href={contactData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ContactPage;