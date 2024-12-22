import Link from "next/link";

export const Logo = ({ containerStyles }) => {
  return (
    <Link href="/">
      <div className={`${containerStyles}`}>
        <div
          className={`size-8 bg-logo-light dark:bg-logo-dark bg-contain bg-no-repeat`}
        ></div>
        <div className="font-semibold lg:inline-block">SF Portofolio</div>
      </div>
    </Link>
  );
};
