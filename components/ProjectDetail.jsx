"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { openLinkInNewWindow } from "@/utils/navigation";
import Safari from "@/components/magicui/safari";

export const ProjectDetail = ({ project }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 relative">
      <div className="relative flex justify-items-center items-center justify-center">
        <Safari url={project.name} src={project.image} />
      </div>
      <div className="mx-auto">
        <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="relative top-0 -mt-32 p-5 sm:p-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            {/* Tech Stack */}
            <div className="flex flex-row my-4 gap-x-4">
              {/* show only the first 4 projects for the slides */}
              {project.techstack.map((techstack, techIndex) => {
                return (
                  <Badge
                    className="group flex items-center px-4 py-2 transition-all duration-500 ease-in-out cursor-none"
                    key={techIndex}
                  >
                    <span className="text-2xl">{techstack.icon}</span>

                    <span className="capitalize text-sm overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-in-out">
                      {techstack.name}
                    </span>
                  </Badge>
                );
              })}
            </div>
            <h1 className="font-bold text-3xl mt-8">{project.name}</h1>
            <p className="text-base leading-8 my-5 text-justify">{project.descriptionFull}</p>
            {/* {project?.jobdesc && (
              <div>
                <p className="text-base leading-8 my-5 text-justify">{project.jobdesc}</p>
              </div>
            )} */}

            {/* Preview Images */}
            <div>
              <Swiper
                className="h-fit"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                {/* show only the first 4 projects for the slides */}
                {project?.images.map((projectImg, projectImgIndex) => {
                  return (
                    <SwiperSlide key={projectImgIndex}>
                      <div className="group relative flex justify-items-center justify-center items-center">
                        <div className="max-h-[500px] overflow-hidden">
                          <Image
                            src={projectImg.image}
                            sizes="100vw"
                            width={0}
                            height={0}
                            className="rounded-lg cursor-pointer pb-10"
                            style={{
                              width: "auto",
                              height: "auto",
                              maxHeight: "500px",
                            }}
                            alt="projects"
                          />
                        </div>
                        <div className="absolute flex w-full justify-items-center justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                          <Button size="icon" onClick={() => openLinkInNewWindow(projectImg.image)}>
                            <ExternalLink size={20} />
                          </Button>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
