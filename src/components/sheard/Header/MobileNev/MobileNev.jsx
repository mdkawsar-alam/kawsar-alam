import { navItems, blogCategories } from "@/index";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Reference for the nav menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on clicking or scrolling outside
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleScrollOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScrollOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOutside);
    }

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOutside);
    };
  }, [isMenuOpen]);

  const logoText = 'KAWSAR';
  const logoType = 'text';
  const logoImage = '';

  return (
    <>
      {/* Mobile navigation header */}
      <div className="flex items-center justify-between h-20 px-6">
        <Link href="/" className="inline-flex items-center">
          {logoType === 'image' && logoImage ? (
            <Image src={logoImage} alt="Logo" width={110} height={32} className="h-8 w-auto object-contain" />
          ) : (
            <span className="text-2xl font-bold font-serif gradient-text">{logoText}</span>
          )}
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl text-[#00eeff] hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-[#00eeff]/10"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt2 />
        </button>
      </div>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className={`absolute top-20 left-0 w-3/4 min-h-screen glass-strong px-6 py-8 transition-all duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="space-y-6">
          {navItems.map((item, i) => {
            if (item.name === 'Blog') {
              return (
                <div key={i}>
                  <Link
                    href={item.path}
                    className="block text-lg text-white relative overflow-hidden group hover:text-[#00eeff] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-[#00eeff]/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-[#00eeff] to-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                  <div className="ml-4 mt-2 space-y-2">
                    {blogCategories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/blog?category=${encodeURIComponent(cat)}`}
                        className="block text-base text-gray-200 hover:text-[#00eeff] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={i}
                href={item.path}
                className="block text-lg text-white relative overflow-hidden group hover:text-[#00eeff] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-[#00eeff]/10"
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-[#00eeff] to-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
