"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export const RedirectButton = ({
  link = "/projects",
  linkLabel = "All Project",
  size = "default",
}) => {
  return (
    <div>
      <Link href={link} key={link}>
        <Button size={size}>{linkLabel}</Button>
      </Link>
    </div>
  );
};
