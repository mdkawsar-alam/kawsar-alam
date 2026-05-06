/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0ef',
        'dark-bg': '#09101a',
        'gradient-start': '#070d14',
        'gradient-end': '#050b11'
      },
    

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typing: {
          '0%': { width: '100%' },
          '90%': { width: '0' },
          '100%': { width: '0' },
        },
        slide: {
          '33.3333333333%': {
            fontSize: '2rem',
            color: '#0ef',
            letterSpacing: '2px',
          },
          '100%': {
            fontSize: '0',
            letterSpacing: '0',
          },
        },
        cursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgb(252, 248, 244)' },
        },
      },
      animation: {
        'slide': 'slide 15s step-start infinite',
        'typing': 'typing 5s infinite',
        'cursor': 'cursor 1s infinite',
      },
      screens: {
        'md': '768px',
      },
    },
  },
  plugins: [],
}
