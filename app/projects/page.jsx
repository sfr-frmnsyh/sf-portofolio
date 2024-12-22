"use client";
import ProjectList from "@/components/ProjectList";
import React, { useState } from "react";

const page = () => {
  return (
    <section className="container mx-auto min-h-screen">
      <div className="flex flex-col items-center text-center py-12">
        <h1 className="text-3xl font-bold">
          Recents&thinsp;
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-[3px] border-b-[10px] border-yellow-300 dark:border-yellow-200/70"></span>
            <h1 className="relative text-3xl font-bold">Projects</h1>
          </div>
        </h1>

        <p className="subtitle max-w-screen-lg mt-4">
          In these recent projects, I’ve combined my technical skills with a deep understanding of user needs to create
          solutions that are both functional and impactful. Explore how each project embodies a journey of
          collaboration, creativity, and effective problem-solving.
        </p>
      </div>
      <div className="">
        <ProjectList />
      </div>
    </section>
  );
};
export default page;
