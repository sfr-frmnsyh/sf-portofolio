import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "M. Syafrie Firmansyah",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 17 Jul, 1999",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62819-3160-4332",
  },
  {
    icon: <MailIcon size={20} />,
    text: "safri.firmansyah@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor on Informatics Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Surabaya, East Java, Indonesia",
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of 17 Agustus 1945",
        qualification: "Informatics Engineering",
        years: "2023",
      },
      {
        university: "Rajasa Vocational High School",
        qualification: "Computer and Network Engineering",
        years: "2017",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Herdina Metatech Sinergi",
        role: "IT Development",
        years: "May. 2023 - Jul. 2024",
      },
      {
        company: "Herdina Metatech Sinergi",
        role: "Operational Support Team",
        years: "Feb. 2023 - May. 2023",
      },
      {
        company: "Pelindo III",
        role: "Web Developer (Internship)",
        years: "Feb. 2021  -  Apr. 2021",
      },
    ],
  },
];

export const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] py-12">
      <div id="about" className="container mx-auto">
        <div className="section-title">
          <h3 className="title">About Me</h3>
          <p className="subtitle">A short introduction</p>
        </div>

        <div className="flex flex-col xl:flex-row mt-10">
          {/* IMAGES DEV */}
          <div className="hidden xl:flex flex-1 content-center justify-center mt-10">
            <div className="bg-dev2 bg-contain bg-no-repeat rounded-xl w-[280px] h-[280px] border border-black/30 dark:border-white/50 grayscale drop-shadow-2xl"></div>
          </div>

          {/* TABS */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <div className="flex justify-center items-center">
                <TabsList className="">
                  <TabsTrigger className="xl:w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger className="xl:w-auto" value="qualifications">
                    Qualifications Info
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="mt-8">
                {/* PERSONAL */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <div className="mb-4">
                      <h3 className="font-semibold">
                        Personal Information Details
                      </h3>
                      <p className="subtitle text-base">
                        Allow me to share a bit about myself.
                      </p>
                    </div>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-6 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div>
                        <h3 className="font-semibold">Language Skill</h3>
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="">Bahasa Indonesia, English</div>
                    </div>
                  </div>
                </TabsContent>

                {/* QUALIFICATIONS */}
                <TabsContent value="qualifications">
                  <div className="">
                    <div className="mb-4 text-center xl:text-left">
                      <h3 className="font-semibold">
                        Qualification Information Details
                      </h3>
                      <p className="subtitle text-base">
                        Here&apos;s a brief overview of my background and experience.
                      </p>
                    </div>
                    {/* experiences & education wrapper */}
                    <div className="flex flex-row gap-x-8 gap-y-8 justify-center xl:justify-normal">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center">
                          <BriefcaseBusiness />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-700"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="leading-none text-muted-foreground mb-3">
                                      {role}
                                    </div>
                                    <div className="font-medium text-sm">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-700"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="leading-none text-muted-foreground mb-3">
                                      {qualification}
                                    </div>
                                    <div className="font-medium text-sm">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
