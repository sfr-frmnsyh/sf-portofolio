"use client";
import { useState, useEffect } from "react";
// components
import { ThemeToggler } from "./ThemeToggler";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-4`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo containerStyles='flex gap-x-4 items-center' />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-6 items-center"
              linkStyles="relative text-foreground/80 hover:text-foreground/100 transition-all"
              activeStyles="text-primary font-semibold"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
