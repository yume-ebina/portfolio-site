import About from "./about/page";
import Skills from "./skills/page";
import Works from "./works/page";
import Hero from "@/components/hero";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
