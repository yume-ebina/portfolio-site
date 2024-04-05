import Image from "next/image";
import Hero from "./about/components/hero";
import Features from "./about/components/features";
import Contact from "./about/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Contact />
    </main>
  );
}
