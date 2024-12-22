"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// utils
import { projectData } from "@/utils/local-data-project";
import { ProjectDetail } from "@/components/ProjectDetail";

const page = ({ params }) => {
  const project = projectData().find((project) => project.slug === params.slug);

  if (project == undefined) {
    return (
      <section className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center text-center py-12">
          <h1 className="text-3xl font-bold">
            404&thinsp;
            <div className="relative inline-flex">
              <span className="absolute inset-x-0 bottom-[3px] border-b-[10px] border-yellow-300 dark:border-yellow-200/70"></span>
              <h1 className="relative text-3xl font-bold">Error</h1>
            </div>
          </h1>

          <p className="subtitle max-w-screen-lg mt-4">Project not found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto min-h-screen">
      <div className="relative flex flex-col items-center text-center py-12">
        <h1 className="text-3xl font-bold">
          Detail&thinsp;
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-[3px] border-b-[10px] border-yellow-300 dark:border-yellow-200/70"></span>
            <h1 className="relative text-3xl font-bold">Projects</h1>
          </div>
        </h1>
      </div>

      <ProjectDetail project={project} />
    </section>
  );
};
export default page;
