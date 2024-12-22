"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// hooks
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Template = ({ children }) => {
  const path = usePathname();
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        key={path}
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-2 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
    </>
  );
};

export default Template;
