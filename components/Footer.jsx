"use client";
import { openLinkInNewWindow } from "@/utils/navigation";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/100 py-6">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          {/* copyright */}
          <div className="text-muted-foreground/80 text-xs">
            &copy; 2024
            <span className="px-1 select-none">•</span>
            <span
              className="text-muted-foreground/80 hover:text-primary cursor-pointer transition-all duration-500"
              onClick={() =>
                openLinkInNewWindow("https://github.com/sfr-frmnsyh")
              }
            >
              {" Safri Firmansyah"}
            </span>
            . All Rights Reserved.
          </div>

          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 max-auto"
            iconsStyles="text-primary/70 text-[20px] hover:text-primary dark:hover:text-primary transition-all duration-500"
          />
        </div>
      </div>
    </footer>
  );
};
