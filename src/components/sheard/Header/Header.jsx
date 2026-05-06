"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNev/MobileNev";

const Header = () => {
  const pathname = usePathname();
  const logoText = 'KAWSAR';
  const logoType = 'text';
  const logoImage = '';
  const isAdmin = pathname?.startsWith("/admin");
  return (
    <header className="w-screen glass-strong text-white fixed top-0 z-50 backdrop-blur-md">
      {isAdmin ? (
        <div className="h-20 w-full flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/admin" className="hover:scale-105 transition-transform duration-300 inline-flex items-center">
            {logoType === 'image' && logoImage ? (
              <Image src={logoImage} alt="Logo" width={120} height={36} className="h-9 w-auto object-contain" />
            ) : (
              <span className="text-3xl font-bold font-serif gradient-text">{logoText}</span>
            )}
          </Link>
          <Link href="/" className="btn-primary px-4 py-2 rounded-md text-sm">
            View Site
          </Link>
        </div>
      ) : (
        <>
          <div className="hidden md:flex">
            <DesktopNav />
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
