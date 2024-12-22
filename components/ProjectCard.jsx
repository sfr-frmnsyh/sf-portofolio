"use client";

import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { EyeIcon } from "lucide-react";
import { RedirectButton } from "./RedirectButton";

export const ProjectCard = ({ project, showDetail = false }) => {
  return (
    <Card className="grup overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[200px] flex items-center justify-center bg-primary dark:bg-primary/40 overflow-hidden group">
          <Image
            className="absolute top-0 shadow-2xl rounded-lg"
            src={project.image}
            width={500}
            height={500}
            alt=""
            priority
          />

          <div className="flex gap-x-4">
            <div className="flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              {showDetail == false ? (
                <RedirectButton />
              ) : (
                <RedirectButton
                  link={`/projects/${project.slug}`}
                  linkLabel={<EyeIcon size={20} />}
                  size="icon"
                />
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="flex flex-row justify-between">
          <h4 className="h4 mb-1">{project.name}</h4>
          <span className="text-base">{project.techstack[0].icon}</span>
        </div>
        <p className="text-muted-foreground text-sm text-justify">
          {project.description}
        </p>
      </div>
    </Card>
  );
};
