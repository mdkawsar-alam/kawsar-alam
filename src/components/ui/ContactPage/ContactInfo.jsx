'use client';
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactInfo = ({ contactData }) => {
  const defaultData = {
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
  };

  const data = { ...defaultData, ...contactData };

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: data.address,
      color: "text-red-400"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: data.phone,
      href: `tel:${data.phone}`,
      color: "text-green-400"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: data.email,
      href: `mailto:${data.email}`,
      color: "text-blue-400"
    },
    {
      icon: FaGlobe,
      title: "Website",
      content: data.website,
      href: data.website,
      color: "text-purple-400"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      content: data.workingHours,
      color: "text-yellow-400"
    }
  ];

  const socialIcons = [
    { icon: FaLinkedin, href: data.socialLinks.linkedin, color: "hover:text-blue-400" },
    { icon: FaGithub, href: data.socialLinks.github, color: "hover:text-gray-400" },
    { icon: FaTwitter, href: data.socialLinks.twitter, color: "hover:text-blue-400" },
    { icon: FaInstagram, href: data.socialLinks.instagram, color: "hover:text-pink-400" }
  ];

  return (
    <div className="bg-gradient-to-br from-[#1B2A40] to-[#09101A] rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{data.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{data.subtitle}</p>
      </div>

      <div className="space-y-6 mb-8">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 group">
            <div className={`flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-[#00eeff] group-hover:text-slate-900 transition-all duration-300`}>
              <item.icon className={`text-xl ${item.color} group-hover:text-slate-900`} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              {item.href ? (
                <a 
                  href={item.href}
                  target={item.title === 'Website' ? '_blank' : '_self'}
                  rel={item.title === 'Website' ? 'noopener noreferrer' : ''}
                  className="text-gray-300 hover:text-[#00eeff] transition-colors duration-300"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-300">{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Follow Me</h3>
        <div className="flex justify-center space-x-4">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-[#00eeff] hover:text-slate-900 hover:scale-110 ${social.color}`}
            >
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
