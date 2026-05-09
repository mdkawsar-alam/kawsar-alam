import banner from '@/assets/heroSection/banner.jpg'
import me from '@/assets/heroSection/kawsar.png';
import me2 from '@/assets/heroSection/kawsar.png';

import p1 from "@/assets/testmonial/p1.jpg";
import right_tech from "@/assets/blog/Choose_the_right_tech.png";
import ecommarce_web from "@/assets/blog/ecommarce_website.png";
import mern from "@/assets/blog/mern.png";
import laravel from "@/assets/blog/laravel.png";
import seo from "@/assets/blog/seo.png";
import react from "@/assets/blog/why_reactjs.png";
import whynext from "@/assets/blog/why_nextjs.png";
import customvsword from "@/assets/blog/cust_w.jpg";
import mistake from "@/assets/blog/mistake.jpg";
// project
import fivester from "@/assets/projects/fivester.png";
import node_vs_laravel from "@/assets/blog/node_vs_laravel.png";



export const images={
  me,
  me2,
  banner,
  

}

// Navigation Items
export const navItems = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/portfolio",
    name: "Portfolio",
  },
  {
    id: 4,
    path: "/blog",
    name: "Blog",
  },
  {
    id: 5,
    path: "/contact",
    name: "Contact",
  },
];

// Hero Section Slides
export const heroSlides = [
  {
    id: 1,
    title: "Next.js & Frontend Developer",
    subtitle: "High-Performance Web Applications",
    description: "Specializing in React.js and Next.js to build SEO-optimized, lightning-fast Single Page Applications (SPA). I focus on Core Web Vitals, responsive UI/UX design, and seamless TypeScript integration for modern businesses.",
    image: images.me,
    bgColor: "from-slate-900 via-slate-800 to-slate-900",
    accentColor: "from-cyan-400 to-blue-500",
    tech: ["React", "Next.js", "JavaScript", "TypeScript"]
  },
  {
    id: 2,
    title: "Full-Stack MERN Developer",
    subtitle: "Scalable JavaScript Ecosystems",
    description: "Expert in MERN stack development (MongoDB, Express, React, Node.js). I build secure RESTful APIs, real-time data solutions, and scalable backend architectures designed for high-traffic digital platforms.",
    image: images.me,
    bgColor: "from-slate-900 via-slate-800 to-slate-900",
    accentColor: "from-blue-400 to-cyan-500",
    tech: ["MongoDB", "Express.js", "React", "Node.js"]
  },
  {
    id: 3,
    title: "Laravel & PHP Backend Expert",
    subtitle: "Custom Web Solutions & CMS",
    description: "Professional Laravel developer focused on robust PHP backend systems, MySQL database optimization, and custom e-commerce solutions. I deliver clean-code architecture with a focus on security and enterprise-level performance.",
    image: images.me,
    bgColor: "from-slate-900 via-slate-800 to-slate-900",
    accentColor: "from-emerald-400 to-teal-500",
    tech: ["PHP", "Laravel", "MySQL"]
  }
];
// About Me Section
export const aboutMe = {
  title: 'About Me',
  description: `I am a result-oriented Full-Stack Web Developer specializing in Next.js, Laravel, and the MERN stack. With a background in Computer Science and over a year of hands-on experience, I bridge the gap between complex backend logic and seamless frontend user experiences. My mission is to build scalable, SEO-friendly digital products that drive business value and provide exceptional performance across all devices.`,
  position: 'Full-Stack Developer | Next.js & Laravel Expert',
  contact: {
    email: 'mdkawsaralam537@gmail.com',
    phone: '+8801557132665',
    github: 'https://www.github.com/mdkawsar-alam',
    linkedin: 'https://www.linkedin.com/in/md-kawsar-alam997'
  },
  additionalInfo: `My technical core includes React.js, Next.js, and Tailwind CSS for modern frontends, paired with Laravel (PHP) and Node.js for robust backend systems. I have extensive experience in database management (MySQL & MongoDB), RESTful API integration, and version control with Git. I am committed to clean-code principles and optimizing Core Web Vitals for better search engine visibility.`,
  closingStatement: `Driven by innovation and a problem-solving mindset, I thrive in challenging environments. Whether it's building a custom SaaS platform or an enterprise e-commerce site, I focus on delivering high-quality, maintainable code and staying ahead of the latest industry trends.`
};


// Services Section
export const services = [
  {
    title: "MERN & NEXT.JS DEVELOPMENT",
    description:
      "Expert full-stack development using MongoDB, Express.js, React, and Next.js. I build SEO-optimized Single Page Applications (SPA) and high-performance web solutions focused on Core Web Vitals, scalability, and seamless user experiences.",
  },
  {
    title: "LARAVEL & BACKEND ARCHITECTURE",
    description:
      "Specialized in robust PHP/Laravel backend development and MySQL database optimization. I create secure RESTful APIs, custom CMS solutions, and enterprise-grade logic for complex web applications that require high reliability.",
  },
  {
    title: "SaaS & E-COMMERCE SOLUTIONS",
    description:
      "Custom development of SaaS platforms and e-commerce websites. From payment gateway integration (Stripe/SSLCommerz) to dynamic product management, I build conversion-focused tools designed to scale your digital business.",
  },
  {
    title: "RESPONSIVE UI/UX DESIGN",
    description:
      "Using Tailwind CSS and modern design principles to create mobile-first, responsive layouts. I focus on intuitive navigation and accessible design to ensure your website performs perfectly across all devices and browsers.",
  },
];

// Projects Section
export const projects = [
  {
    id: 1,
    image: '/path/to/image1.jpg',
    placeholder: '/path/to/placeholder1.jpg',
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    link: 'https://example.com/project-one',
  },
  {
    id: 2,
    image: '/path/to/image2.jpg',
    placeholder: '/path/to/placeholder2.jpg',
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: 'https://example.com/project-two',
  },
  {
    id: 3,
    image: fivester,
    placeholder: fivester,
    title: 'FiveStar',
    description: 'FiveStar is a modern multipage responsive web project with a clean UI and smooth user experience. It includes WhatsApp integration for easy messaging and communication. The project is optimized for both mobile and desktop devices with fast performance and modern design.',
    link: 'https://fivestar-amber.vercel.app/',
  },

];

// Skills Section
export const skills = [
  { name: "HTML5", percent: 95 },
  { name: "CSS3", percent: 92 },
  { name: "JavaScript (ES6+)", percent: 88 },
  { name: "Tailwind CSS", percent: 90 },
  { name: "Bootstrap", percent: 85 },

  { name: "React.js", percent: 88 },
  { name: "Next.js", percent: 90 },
  { name: "TypeScript", percent: 75 },

  { name: "Node.js", percent: 65 },
  { name: "Express.js", percent: 70 },
  { name: "MongoDB", percent: 70 },

  { name: "PHP", percent: 80 },
  { name: "Laravel", percent: 85 },
  { name: "MySQL", percent: 75 },

  { name: "Git & GitHub", percent: 85 },
  { name: "Figma to Code", percent: 80 },
];

// Soft Skills Section
export const softSkills = [
  "Problem Solving", "Team Collaboration", "Communication", 
  "Time Management", "Adaptability", "Continuous Learning"
];

// Footer Data
export const footerData = {
  copyright: "© 2026 Kawsar Alam. All rights reserved.",
  description: "Passionate full-stack Developer creating amazing web experiences.",
  socialLinks: {
    github: "https://github.com/mdkawsar-alam",
    linkedin: "https://linkedin.com/in/md-kawsar-alam997",
    twitter: "",
    facebook: "",
    instagram: "",
    whatsapp: "https://wa.me/8801557132665"
  },
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/#services" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/contact" }
  ],
  contactInfo: {
    email: "mdkawsaralam537@gmail.com",
    phone: "+8801557132665",
    address: "Dhaka, Bangladesh"
  }
};

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    category: "Client Guide",
    title: "How to Choose the Right Tech Stack for Your Startup",
    content:
      "Choosing the right technology stack is one of the most important decisions for any startup...",
    fullDescription: `
Choosing the right technology stack can determine the success of your web project. Startups often struggle with deciding which framework or backend to use.

A good tech stack should provide scalability, performance, and maintainability.

Common startup tech stacks:

- **Next.js + Node.js:** Perfect for SEO friendly SaaS platforms.
- **MERN Stack:** Great for real-time applications and dashboards.
- **Laravel + React:** Ideal for powerful backend systems and e-commerce.

Before choosing a technology stack consider:

- Project scalability
- Development speed
- Security
- Community support

A well-chosen tech stack helps startups build reliable and scalable web applications.
    `,
    date: "2024-03-01",
    author: "Kawsar",
    image:right_tech,
    tags: [
      "startup tech stack",
      "best tech stack for startup",
      "web development stack",
      "modern web development",
      "choose technology stack",
    ],
  },

  {
    id: 2,
    category: "Web Development",
    title: "Why Next.js is Perfect for SEO-Friendly Business Websites",
    content:
      "Next.js is one of the best frameworks for building fast and SEO optimized websites...",
    fullDescription: `
Next.js is widely used for building modern websites that require high performance and excellent SEO.

Key benefits of Next.js:

- Server Side Rendering improves search engine ranking
- Static Site Generation ensures fast page load
- Automatic code splitting improves performance
- Image optimization helps reduce load time

Businesses that benefit from Next.js:

- Startup companies
- SaaS platforms
- Business websites
- Marketing landing pages

Next.js helps businesses build fast, secure, and scalable websites.
    `,
    date: "2024-03-05",
    author: "Kawsar",
    image: seo,
    tags: [
      "nextjs seo",
      "nextjs website development",
      "seo friendly website",
      "nextjs business website",
      "modern web development",
    ],
  },

  {
    id: 3,
    category: "Web Development",
    title: "MERN Stack: A Powerful Solution for Modern Web Applications",
    content:
      "MERN stack is one of the most popular technologies for full-stack web development...",
    fullDescription: `
MERN stack consists of MongoDB, Express.js, React.js, and Node.js. It allows developers to build complete web applications using JavaScript.

Advantages of MERN stack:

- Single language across frontend and backend
- High scalability
- Fast development process
- Large open-source ecosystem

MERN stack is commonly used for:

- SaaS applications
- Social media platforms
- Real-time dashboards
- Startup web applications

It is a great choice for modern and scalable web development.
    `,
    date: "2024-03-10",
    author: "Kawsar",
    image: mern,
    tags: [
      "mern stack development",
      "react nodejs mongodb",
      "full stack development",
      "modern web applications",
      "mern web app",
    ],
  },

  {
    id: 4,
    category: "Client Guide",
    title: "Custom Website vs WordPress: Which is Better for Your Business?",
    content:
      "Many businesses struggle to decide between WordPress and custom web development...",
    fullDescription: `
WordPress is a popular platform for creating websites, but it may not always be the best solution for every business.

Custom websites provide more flexibility and performance.

WordPress advantages:

- Quick setup
- Many plugins available
- Lower development cost

Custom website advantages:

- Better performance
- Higher security
- Unique design
- Scalable architecture

Businesses that require advanced functionality often choose custom development.
    `,
    date: "2024-03-12",
    author: "Kawsar",
    image: customvsword ,
    tags: [
      "custom website development",
      "wordpress vs custom website",
      "business website development",
      "professional website design",
    ],
  },

  {
    id: 5,
    category: "Ecommerce Development",
    title: "Why Laravel is a Powerful Choice for Custom E-commerce Websites",
    content:
      "Laravel is a powerful PHP framework used to build scalable e-commerce platforms...",
    fullDescription: `
Laravel is widely used for developing secure and scalable e-commerce platforms.

Why Laravel is great for e-commerce:

- Strong security features
- Customizable architecture
- Scalable backend systems
- Easy payment gateway integration

Laravel is ideal for:

- Custom online stores
- Marketplace platforms
- Order management systems
- Inventory management systems

Businesses that want a fully customized e-commerce system often choose Laravel.
    `,
    date: "2024-03-15",
    author: "Kawsar",
    image: laravel,
    tags: [
      "laravel ecommerce development",
      "php ecommerce website",
      "custom ecommerce platform",
      "laravel online store",
    ],
  },

  {
    id: 6,
    category: "Ecommerce Development",
    title: "Features Every Modern E-commerce Website Must Have",
    content:
      "Modern e-commerce websites need powerful features to compete in today's online market...",
    fullDescription: `
Successful e-commerce websites focus on performance, user experience, and security.

Important features include:

- Secure payment gateway integration
- Fast checkout process
- Mobile responsive design
- Product search and filtering
- Order tracking system

Modern e-commerce platforms also include analytics dashboards and marketing tools.

These features help businesses increase sales and improve customer experience.
    `,
    date: "2024-03-18",
    author: "Kawsar",
    image:ecommarce_web,
    tags: [
      "ecommerce website features",
      "modern ecommerce website",
      "online store development",
      "ecommerce platform development",
    ],
  },

  {
    id: 7,
    category: "Web Development",
    title: "Why React.js is Ideal for Modern Web Applications",
    content:
      "React.js is one of the most popular libraries for building dynamic user interfaces...",
    fullDescription: `
React.js allows developers to build interactive and high-performance web applications.

Benefits of React:

- Component based architecture
- Reusable UI components
- Fast rendering using virtual DOM
- Strong ecosystem

React is commonly used for:

- Dashboards
- SaaS applications
- Web applications
- Interactive user interfaces
    `,
    date: "2024-03-20",
    author: "Kawsar",
    image: react,
    tags: [
      "react js development",
      "modern web applications",
      "react web development",
      "react frontend development",
    ],
  },

  {
    id: 8,
    category: "Backend Development",
    title: "Laravel vs Node.js: Which Backend is Better for Your Project?",
    content:
      "Choosing the right backend technology depends on your project requirements...",
    fullDescription: `
Both Laravel and Node.js are powerful backend technologies.

Laravel advantages:

- Structured MVC architecture
- Strong security
- Great for e-commerce and CMS systems

Node.js advantages:

- Fast performance
- Real-time capabilities
- JavaScript across the stack

The right choice depends on your project type and scalability requirements.
    `,
    date: "2024-03-22",
    author: "Kawsar",
    image: node_vs_laravel,
    tags: [
      "laravel vs nodejs",
      "backend development",
      "best backend framework",
      "web backend technologies",
    ],
  },

  {
    id: 9,
    category: "Performance",
    title: "How Website Speed Impacts SEO and Conversions",
    content:
      "Website speed is one of the most important factors for SEO and user experience...",
    fullDescription: `
Fast websites improve both search engine ranking and user experience.

Benefits of fast websites:

- Higher Google ranking
- Lower bounce rate
- Better user experience
- Increased conversion rate

Techniques for improving speed:

- Image optimization
- Code splitting
- CDN usage
- Efficient hosting

Fast websites help businesses increase sales and engagement.
    `,
    date: "2024-03-25",
    author: "Kawsar",
    image: seo,
    tags: [
      "website speed optimization",
      "seo performance",
      "fast website development",
      "improve website performance",
    ],
  },

  {
    id: 10,
    category: "Client Guide",
    title: "Top 10 Mistakes Businesses Make When Building a Website",
    content:
      "Many businesses make critical mistakes when developing their websites...",
    fullDescription: `
Building a website without proper planning can lead to poor performance and wasted investment.

Common mistakes include:

- Choosing the wrong technology stack
- Ignoring mobile responsiveness
- Poor SEO optimization
- Slow loading speed
- Weak security

Avoiding these mistakes ensures your website performs well and supports business growth.
    `,
    date: "2024-03-28",
    author: "Kawsar",
    image: mistake,
    tags: [
      "website development mistakes",
      "business website tips",
      "professional website development",
      "website planning guide",
    ],
  },
];

// derived set of categories for blog dropdowns
export const blogCategories = Array.from(new Set(blogPosts.map(p => p.category)));

// Testimonials Section
export const testimonials = [
  {
    image: p1,
    name: "David Miller",
    title: "Founder, SaaS Startup",
    quote:
      "Kawsar did an amazing job building our React and Next.js dashboard. The UI is clean, fast, and fully responsive. Communication was excellent and the project was delivered on time."
  },
  {
    image: p1,
    name: "Sarah Williams",
    title: "E-commerce Business Owner",
    quote:
      "We hired Kawsar to develop our custom e-commerce website using Laravel. The system works perfectly and the admin panel is very easy to manage. Highly recommended developer."
  },
  {
    image: p1,
    name: "Michael Brown",
    title: "Product Manager, Tech Company",
    quote:
      "Kawsar converted our Figma design into a pixel-perfect Next.js website. The performance and responsiveness are excellent. I would definitely work with him again."
  },
  {
    image: p1,
    name: "Emily Carter",
    title: "Startup Founder",
    quote:
      "Very professional and skilled developer. Kawsar built our landing page using React and optimized it for SEO and speed. The final result exceeded our expectations."
  },
  {
    image: p1,
    name: "Daniel Wilson",
    title: "Agency Owner",
    quote:
      "We collaborated with Kawsar on several frontend projects. His React and Next.js skills are impressive, and he always delivers clean and maintainable code."
  }
];

// work experience section
export const experiences = [
  {
    company: "Edulife IT Institute",
    position: "Front-End Web Developer",
    duration: "1 Year",
    description:
      "Worked as a Front-End Web Developer building responsive websites using React and modern CSS frameworks. Focused on performance optimization and cross-browser compatibility."
  },
  {
    company: "AJ Global IT",
    position: "Frontend Developer",
    duration: "1 Months",
    description:
      "Collaborated with developers and designers to convert Figma designs into responsive React and Next.js applications with clean and maintainable code."
  },
  {
    company: "WIT Institute",
    position: "Web Development Trainer",
    duration: "8 Months",
    description:
      "Provided training on modern web development including HTML, CSS, JavaScript, and React. Guided students in building real-world projects."
  }
];

