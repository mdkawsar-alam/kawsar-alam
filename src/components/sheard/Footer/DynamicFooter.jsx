'use client';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';
import { footerData } from '@/index';

const DynamicFooter = () => {
  const [footerState, setFooterState] = useState(footerData);

  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('');

  useEffect(() => {
    // API endpoints removed - backend disabled
    // Keeping component as-is with default state
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    setSubscribeStatus('');

    try {
      // API endpoint removed - backend disabled
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // Show success for now
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
    facebook: FaFacebook,
    whatsapp: FaWhatsapp
  };

  const socialColors = {
    github: 'hover:text-gray-400',
    linkedin: 'hover:text-blue-400',
    twitter: 'hover:text-blue-400',
    instagram: 'hover:text-pink-400',
    facebook: 'hover:text-blue-600',
    whatsapp: 'hover:text-green-400'
  };

  return (
    <footer className="w-full bg-gradient-to-t from-slate-900 to-slate-800 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00eeff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-bold font-serif gradient-text mb-4 inline-block">
              KAWSAR
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footerState.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(footerState.socialLinks).map(([platform, url]) => {
                if (!url) return null;
                const IconComponent = socialIcons[platform];
                if (!IconComponent) return null;
                
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-[#00eeff] hover:text-slate-900 hover:scale-110 ${socialColors[platform]}`}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerState.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-[#00eeff] transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaLocationDot className="text-[#00eeff] text-lg" />
                <span className="text-gray-300">{footerState.contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#00eeff] text-lg" />
                <a href={`tel:${footerState.contactInfo.phone}`} className="text-gray-300 hover:text-[#00eeff] transition-colors">
                  {footerState.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#00eeff] text-lg" />
                <a href={`mailto:${footerState.contactInfo.email}`} className="text-gray-300 hover:text-[#00eeff] transition-colors">
                  {footerState.contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on my latest projects and blog posts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-3 md:gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field rounded-r-none border-r-0 flex-1"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="btn-primary rounded-l-none px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              
              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-sm">Thank you for subscribing!</p>
              )}
              
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-sm">Subscription failed. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              {footerState.copyright}  developed by Kawsar Alam
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00eeff] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00eeff] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#00eeff] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DynamicFooter;
