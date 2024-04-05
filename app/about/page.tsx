import { Metadata } from "next";
import Contact from "./components/contact";
import Features from "./components/features";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "蝦名結芽のポートフォリオサイトです",
};

export default function Page() {
  return (
    <div>
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}
