"use client";
import { TypeAnimation } from "react-type-animation";
import { Socials } from "../Socials";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { openLinkInNewWindow, scrollToDiv } from "@/utils/navigation";
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { useEffect, useState } from "react";
import TextHackedEffectComponent from "react-text-hacked";

export const Hero = () => {
  const [helloText, setHelloText] = useState("Hello there");
  const helloTextIntervalTime = 10000; // Interval time in milliseconds

  useEffect(() => {
    const greetings = ["你好呀", "こんにちはそこに", "안녕하세요 거기", "Привет там", "مرحبا هناك", "Hello there"];

    let index = 0;

    const interval = setInterval(() => {
      setHelloText(greetings[index]);
      index = (index + 1) % greetings.length; // Loop back to the first greeting
    }, helloTextIntervalTime);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto mt-12" id="hero">
        <div className="flex flex-wrap justify-between gap-y-10">
          {/* INFO */}
          <div className="w-full order-2 xl:w-2/3 xl:order-1 flex gap-x-6 content-center justify-center items-center">
            {/* socials */}
            <div className="w-24 content-center">
              <Socials
                containerStyles={"flex flex-col gap-y-6"}
                iconsStyles={"text-foreground/80 text-2xl hover:text-primary transition-all"}
              />
            </div>
            {/* self info */}
            <div className="w-full my-auto">
              <div className="group flex items-center justify-items-center gap-x-3 mb-6">
                <h1 className="xl:text-5xl text-4xl font-extrabold">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"></span>
                  <TextHackedEffectComponent defaultText={helloText} startAfterTimer={helloTextIntervalTime} />
                </h1>
                <span className={`group-hover:animate-wave-hand text-5xl font-bold origin-[90%_90%]`}>👋</span>
              </div>
              <div className="flex items-center gap-x-4 text-primary text-xl mb-2">
                <span className="w-[35px] h-[1px] bg-primary"></span>
                <TypeAnimation
                  speed={10}
                  deletionSpeed={80}
                  sequence={[
                    "I'm Syafrie Firmansyah",
                    10000,
                    "I'm a Fullstack Developer",
                    10000,
                    "I'm a Web Designer",
                    10000,
                    () => {
                      // console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                />
              </div>
              <div className="mb-8">
                <p className="subtitle">
                  Fullstack Developer with a strong emphasis on developing reliable and efficient web applications,
                  combining extensive technical knowledge with practical problem-solving skills.
                </p>
              </div>

              {/* buttons */}
              <div className="">
                <div className="flex flex-row gap-x-3 mx-auto xl:mx-0">
                  <Link href="/contact">
                    <Button className="gap-x-2">
                      Contact me <Send size={16} />
                    </Button>
                  </Link>
                  <Button
                    onClick={() =>
                      openLinkInNewWindow(
                        "https://drive.google.com/drive/folders/1i1zbKt0cFBaFFeUKsNr9nOrgnhb-OB3T?usp=sharing"
                      )
                    }
                    variant="secondary"
                    className="gap-x-2"
                  >
                    Download CV <Download size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex w-full order-1 xl:w-1/3 xl:order-2 justify-center">
            <div
              className="h-64 w-64 bg-dev bg-contain bg-top bg-no-repeat shadow-inner animate-profile"
              style={{
                boxShadow: "inset 0 0 0 4px rgba(69, 69, 69, 0.1)",
              }}
            ></div>
          </div>
        </div>

        {/* icon */}
        <div className="flex justify-center items-center mt-24">
          <Button
            size="icon"
            variant="ghost"
            className="animate-bounce"
            onClick={() => {
              scrollToDiv("about", -100);
            }}
          >
            <RiArrowDownSLine size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
