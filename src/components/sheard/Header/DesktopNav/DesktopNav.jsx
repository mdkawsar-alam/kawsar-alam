import { navItems, blogCategories } from "@/index";
import Link from "next/link";
import Image from "next/image";


const DesktopNav = () => {
  const logoText = 'KAWSAR';
  const logoType = 'text';
  const logoImage = '';
  const menu = navItems;

  return (
    <div className="hidden md:flex h-20 w-full">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:scale-105 transition-transform duration-300 inline-flex items-center">
            {logoType === 'image' && logoImage ? (
              <Image src={logoImage} alt="Logo" width={120} height={36} className="h-9 w-auto object-contain" />
            ) : (
              <span className="text-3xl font-bold font-serif gradient-text">{logoText}</span>
            )}
          </Link>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex items-center space-x-8">
          {menu.map((item) => {
            if (item.name === 'Blog') {
              return (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.path}
                    className="relative block text-lg text-white transition-all duration-300 group-hover:text-[#00eeff] px-2 py-1"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 block h-0.5 w-full bg-gradient-to-r from-[#00eeff] to-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                  {/* dropdown */}
                  <div className="absolute left-0 mt-2 w-40 bg-slate-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-10">
                    {blogCategories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/blog?category=${encodeURIComponent(cat)}`}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-slate-700"
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
                key={item.id}
                href={item.path}
                className="relative block text-lg text-white transition-all duration-300 group hover:text-[#00eeff] px-2 py-1"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 block h-0.5 w-full bg-gradient-to-r from-[#00eeff] to-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNav;
