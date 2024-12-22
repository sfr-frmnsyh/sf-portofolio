"use client";

import { RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill, RiNextjsFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://github.com/sfr-frmnsyh",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/m-syafrie-firmansyah/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.instagram.com/sfr.frmnsyh/",
    name: <RiInstagramFill />,
  },
];

export const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a target="__blank" href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};
