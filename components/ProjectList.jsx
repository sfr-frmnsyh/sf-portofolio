import React, { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectData } from "@/utils/local-data-project";

const uniqueCategory = ["all projects", ...new Set(projectData().map((item) => item.category))];

export default function ProjectList() {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData().filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  return (
    <div>
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
  );
}
