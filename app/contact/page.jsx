"use client";
import ContactForm from "@/components/ContactForm";
import { openLinkInNewWindow } from "@/utils/navigation";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill, RiWhatsappFill } from "react-icons/ri";

const Page = () => {
  return (
    <section className="container mx-auto min-h-screen">
      <div className="flex flex-col justify-center justify-items-center items-center lg:flex-row mt-24">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">
            Lets Work&thinsp;
            <div className="relative inline-flex">
              <span className="absolute inset-x-0 bottom-[3px] border-b-[10px] border-yellow-300 dark:border-yellow-200/70"></span>
              <h1 className="relative text-3xl font-bold">Together</h1>
            </div>
          </h1>
          <p className="subtitle text-justify mt-4">
            Let&apos;s create something amazing together! Fill out the contact form, or reach out to me directly via
            whatsapp, email, or LinkedIn. I&apos;m excited to discuss how we can work on your next project !
          </p>

          <ContactForm />
        </div>

        <div className="mt-0 lg:w-1/2">
          <div className="hidden xl:flex w-full h-[500px] bg-contact bg-contain bg-top bg-no-repeat"></div>
        </div>
      </div>

      <hr className="my-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-row gap-x-4 p-4 rounded-lg text-primary md:p-4 border border-primary/25 shadow-lg">
          <span
            className="flex p-3 rounded-lg bg-primary/80 hover:bg-primary justify-items-center justify-center items-center cursor-pointer"
            onClick={() => openLinkInNewWindow("https://wa.me/6281931604332")}
          >
            <RiWhatsappFill size={18} className="text-primary-foreground" />
          </span>

          <div className="">
            <h2 className="text-base font-medium text-primary">Whatsapp</h2>
            <p className="mt-0 text-xs text-primary/90">+62819 3160 4332</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 p-4 rounded-lg text-primary md:p-4 border border-primary/25 shadow-lg">
          <span
            className="flex p-3 rounded-lg bg-primary/80 hover:bg-primary justify-items-center justify-center items-center cursor-pointer"
            onClick={() => openLinkInNewWindow("mailto:safri.firmansyah@gmail.com")}
          >
            <RiMailFill size={18} className="text-primary-foreground" />
          </span>

          <div className="">
            <h2 className="text-base font-medium text-primary">Email</h2>
            <p className="mt-0 text-xs text-primary/90">safri.firmansyah@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 p-4 rounded-lg text-primary md:p-4 border border-primary/25 shadow-lg">
          <span
            className="flex p-3 rounded-lg bg-primary/80 hover:bg-primary justify-items-center justify-center items-center cursor-pointer"
            onClick={() => openLinkInNewWindow("https://www.linkedin.com/in/m-syafrie-firmansyah/")}
          >
            <FaLinkedin size={18} className="text-primary-foreground" />
          </span>

          <div className="">
            <h2 className="text-base font-medium text-primary">LinkedIn</h2>
            <p className="mt-0 text-xs text-primary/90">M Syafrie Firmansyah</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
