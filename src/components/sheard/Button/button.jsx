"use client"
import React from 'react';

const Button = ({ onClick, children, className = '', href, download, variant = 'primary', size = 'md' }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00eeff]";
  
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "bg-transparent border-2 border-[#00eeff] text-[#00eeff] hover:bg-[#00eeff] hover:text-slate-900",
    ghost: "bg-transparent text-[#00eeff] hover:bg-[#00eeff]/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href || download) {
    return (
      <a href={href} download={download} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
