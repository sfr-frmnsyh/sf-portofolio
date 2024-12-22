"use client";
import React, { useState } from "react";

// component
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectData } from "@/utils/local-data-project";

// remove category duplicate
const uniqueCategory = [
  "all projects",
  ...new Set(projectData().map((item) => item.category)),
];

const page = ({ params }) => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData().filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

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
          In these recent projects, I’ve combined my technical skills with a
          deep understanding of user needs to create solutions that are both
          functional and impactful. Explore how each project embodies a journey
          of collaboration, creativity, and effective problem-solving.
        </p>
      </div>
      <div className="">
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tab content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} showDetail={true} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
export default page;
