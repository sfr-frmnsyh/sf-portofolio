import { About } from "@/components/dashboard/About";
import { Cta } from "@/components/dashboard/Cta";
import { Hero } from "@/components/dashboard/Hero";
import { Projects } from "@/components/dashboard/Projects";
import { Skills } from "@/components/dashboard/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Cta />
    </main>
  );
}
