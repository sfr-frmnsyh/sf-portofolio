import {
  RiNextjsFill,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiVuejsLine,
  RiReactjsLine,
  RiNodejsLine,
} from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import {
  SiLivewire,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiMongoose,
  SiPrisma,
  SiNuxtdotjs,
} from "react-icons/si";
import { Badge } from "./ui/badge";

export const SkillLists = ({
  containerStyles = "flex cursor-pointer",
  badgeStyles = "mx-2 group flex items-center gap-4 px-4 py-2 transition-all duration-300 ease-in-out",
  textStyles = "text-xs opacity-60 group-hover:opacity-100 transition-all duration-500 ease-in-out",
  iconSize = 20,
}) => {
  const skills = [
    { name: "HTML", icon: <RiHtml5Line size={iconSize} /> },
    { name: "CSS", icon: <RiCss3Line size={iconSize} /> },
    { name: "JavaScript", icon: <RiJavascriptLine size={iconSize} /> },
    { name: "Laravel", icon: <FaLaravel size={iconSize} /> },
    { name: "Livewire", icon: <SiLivewire size={iconSize} /> },
    { name: "Vue.js", icon: <RiVuejsLine size={iconSize} /> },
    { name: "React.js", icon: <RiReactjsLine size={iconSize} /> },
    { name: "Node.js", icon: <RiNodejsLine size={iconSize} /> },
    { name: "Next.js", icon: <RiNextjsFill size={iconSize} /> },
    { name: "Nuxt.js", icon: <SiNuxtdotjs size={iconSize} /> },
    { name: "MySQL", icon: <SiMysql size={iconSize} /> },
    { name: "MongoDB", icon: <SiMongodb size={iconSize} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={iconSize} /> },
    { name: "Mongoose", icon: <SiMongoose size={iconSize} /> },
    { name: "Prisma", icon: <SiPrisma size={iconSize} /> },
  ];

  return (
    <div className={`${containerStyles}`}>
      {skills.map((skill, index) => {
        return (
          <Badge className={`${badgeStyles}`} key={index}>
            <span>{skill.icon}</span>
            <span className={`${textStyles}`}>{skill.name}</span>
          </Badge>
        );
      })}
    </div>
  );
};
