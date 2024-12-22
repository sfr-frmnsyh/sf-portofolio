"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const RickRoll = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer text-primary/50 hover:text-primary">
          <div className="text-xs">`</div>
        </div>
      </DialogTrigger>
      <DialogContent className="mx-0 max-w-fit">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="relative">
          <div className="absolute bottom-5 flex w-full justify-center justify-items-center items-center">
            <div className="bg-black/90 px-2 rounded-lg">
              <div
                className="text-center font-extrabold stroke-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent shadow-lg"
                style={{ "-webkit-text-stroke": "0.1px black" }}
              >
                <TypeAnimation
                  speed={40}
                  deletionSpeed={100}
                  sequence={[
                    "  never gonna give you up.",
                    750,
                    " never gonna let you down.",
                    750,
                    "never gonna tell a lie ~ and hurt you ~",
                    1500,
                    () => {
                      // console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
          <Image
            src={"/rickroll-8bit.webp"}
            sizes="100vw"
            width={0}
            height={0}
            className="rounded-lg"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "1080px",
            }}
            alt="ricks"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
