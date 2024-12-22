"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { RickRoll } from "./RickRoll";

export const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;

      if (scrollPosition >= 2000) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    // Add listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="">
      <div
        className={`fixed right-12 bottom-12 transform transition-all duration-300 ${
          showScrollUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button size="icon" onClick={scrollToTop}>
          <ArrowUp height={18} width={18} className="px-0" />
        </Button>
      </div>
      <div
        className={`fixed left-12 bottom-12 transform transition-all duration-300 ${
          showScrollUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <RickRoll />
      </div>

      {/* {showScrollUp ? <RickRoll /> : null} */}
    </div>
  );
};
