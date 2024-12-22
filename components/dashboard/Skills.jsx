import React from "react";
import InfiniteLooper from "../ui/infinite-looper/infinite-looper";
import { SkillLists } from "../SkillLists";
import {
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsFill,
  RiTailwindCssLine,
  RiVuejsLine,
} from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import {
  SiCodeigniter,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { AiFillCode, AiOutlineDesktop, AiOutlineTool } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GitCompare } from "lucide-react";

const iconSize = 16;
const skillData = [
  {
    title: "Front End",
    data: [
      {
        name: "HTML",
        icon: <RiHtml5Line size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "CSS",
        icon: <RiCss3Line size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssLine size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptLine size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "Vue.js",
        icon: <RiVuejsLine size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "React.js",
        icon: <RiReactjsFill size={iconSize} />,
        level: "Intermediate",
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill size={iconSize} />,
        level: "Intermediate",
      },
      {
        name: "Nuxt.js",
        icon: <SiNuxtdotjs size={iconSize} />,
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Back End",
    data: [
      {
        name: "Laravel",
        icon: <FaLaravel size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "CodeIgniter",
        icon: <SiCodeigniter size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "Node.js",
        icon: <RiNodejsLine size={iconSize} />,
        level: "Intermediate",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={iconSize} />,
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        name: "Git",
        icon: <GitCompare size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "MySQL",
        icon: <SiMysql size={iconSize} />,
        level: "Advanced",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={iconSize} />,
        level: "Intermediate",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={iconSize} />,
        level: "Intermediate",
      },
      {
        name: "Mongoose",
        icon: <SiMongoose size={iconSize} />,
        level: "Intermediate",
      },
      {
        name: "Prisma",
        icon: <SiPrisma size={iconSize} />,
        level: "Intermediate",
      },
    ],
  },
];

export const Skills = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section>
      <div className="container mx-auto py-12">
        <div className="section-title">
          <h3 className="title">Skills</h3>
          <p className="subtitle">Technology Suite I Utilize</p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="back end" className="min-h-[325px]">
            <div className="flex justify-center items-center">
              <TabsList className="">
                <TabsTrigger className="xl:w-auto" value="front end">
                  Front End
                </TabsTrigger>
                <TabsTrigger className="xl:w-auto" value="back end">
                  Back End
                </TabsTrigger>
                <TabsTrigger className="xl:w-auto" value="tools">
                  Tools
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-8">
              {/* front-end */}
              <TabsContent value="front end">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-y-6 border p-8 rounded-lg w-full xl:w-1/2">
                    <div className="flex gap-x-4 items-center justify-items-center justify-center">
                      <AiOutlineDesktop size={30} />
                      <h4 className="capitalize text-lg font-bold">
                        {getData(skillData, "Front End").title}
                      </h4>
                    </div>
                    {/* list */}
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {getData(skillData, "Front End").data.map(
                        (item, index) => {
                          const { name, icon, level } = item;
                          const levelClassName = `rounded-e-sm pr-2 pl-1 ${
                            level === "Beginner"
                              ? "bg-green-600/25"
                              : level === "Intermediate"
                              ? "bg-yellow-600/25"
                              : level === "Advanced"
                              ? "bg-red-600/25"
                              : level === "Expert"
                              ? "bg-purple-600/25"
                              : ""
                          }`;

                          return (
                            <div
                              className="flex gap-x-6 group items-center"
                              key={index}
                            >
                              <div className="">{icon}</div>
                              <div>
                                <div className="font-semibold leading-none mb-2">
                                  {name}
                                </div>
                                <div className="leading-none text-xs text-muted-foreground">
                                  <span className={levelClassName}>
                                    {level}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* backend */}
              <TabsContent value="back end">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-y-6 border p-8 rounded-lg w-full xl:w-1/2">
                    <div className="flex gap-x-4 items-center justify-items-center justify-center">
                      <AiFillCode size={30} />
                      <h4 className="capitalize text-lg font-bold">
                        {getData(skillData, "Back End").title}
                      </h4>
                    </div>
                    {/* list */}
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {getData(skillData, "Back End").data.map(
                        (item, index) => {
                          const { name, icon, level } = item;
                          const levelClassName = `rounded-e-sm pr-2 pl-1 ${
                            level === "Beginner"
                              ? "bg-green-600/25"
                              : level === "Intermediate"
                              ? "bg-yellow-600/25"
                              : level === "Advanced"
                              ? "bg-red-600/25"
                              : level === "Expert"
                              ? "bg-purple-600/25"
                              : ""
                          }`;

                          return (
                            <div
                              className="flex gap-x-6 group items-center"
                              key={index}
                            >
                              <div className="">{icon}</div>
                              <div>
                                <div className="font-semibold leading-none mb-2">
                                  {name}
                                </div>
                                <div className="leading-none text-xs text-muted-foreground">
                                  <span className={levelClassName}>
                                    {level}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* tools */}
              <TabsContent value="tools">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-y-6 border p-8 rounded-lg w-full xl:w-1/2">
                    <div className="flex gap-x-4 items-center justify-items-center justify-center">
                      <AiOutlineTool size={30} />
                      <h4 className="capitalize text-lg font-bold">
                        {getData(skillData, "Tools").title}
                      </h4>
                    </div>
                    {/* list */}
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {getData(skillData, "Tools").data.map((item, index) => {
                        const { name, icon, level } = item;
                        const levelClassName = `rounded-e-sm pr-2 pl-1 ${
                          level === "Beginner"
                            ? "bg-green-600/25"
                            : level === "Intermediate"
                            ? "bg-yellow-600/25"
                            : level === "Advanced"
                            ? "bg-red-600/25"
                            : level === "Expert"
                            ? "bg-purple-600/25"
                            : ""
                        }`;

                        return (
                          <div
                            className="flex gap-x-6 group items-center"
                            key={index}
                          >
                            <div className="">{icon}</div>
                            <div>
                              <div className="font-semibold leading-none mb-2">
                                {name}
                              </div>
                              <div className="leading-none text-xs text-muted-foreground">
                                <span className={levelClassName}>{level}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="flex flex-col gap-y-4 mt-8 md:mt-2 mask-gradient-transparent">
          <InfiniteLooper speed="250" direction="left">
            <SkillLists />
          </InfiniteLooper>
          <InfiniteLooper speed="250" direction="right">
            <SkillLists />
          </InfiniteLooper>
        </div>
      </div>
    </section>
  );
};
