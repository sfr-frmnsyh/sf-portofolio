import { motion } from "framer-motion";
import Link from "next/link";

//next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

export const Nav = ({ containerStyles, linkStyles, activeStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        let activeStyle = "";
        if (link.path === path) {
          activeStyle = activeStyles;
        }

        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles} ${activeStyle}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
