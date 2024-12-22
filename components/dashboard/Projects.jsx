"use client";
import React from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ProjectCard } from "../ProjectCard";
import { projectData } from "@/utils/local-data-project";

export const Projects = () => {
  return (
    <section className="">
      <div className="container mx-auto py-12">
        <div className="section-title">
          <h3 className="title">Projects</h3>
          <p className="subtitle">Recent Projects</p>
        </div>

        <div className="mt-10">
          <Swiper
            className="h-[400px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData().slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
