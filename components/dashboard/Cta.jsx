import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import Link from "next/link";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export const Cta = () => {
  return (
    <section className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pt-12">
      <div className="relative w-full mx-auto rounded-lg overflow-hidden mt-8">
        <WavyBackground waveWidth={100} contianerHeight={700} speed="fast">
          <div className="py-28">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-extrabold text-white text-center mb-2">Looking to collaborate ?</h2>
              <p className="text-white/70 text-center mb-12">
                I&apos;m eager to connect and explore how we can create something amazing together.
              </p>
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </WavyBackground>
      </div>
    </section>
  );
};
