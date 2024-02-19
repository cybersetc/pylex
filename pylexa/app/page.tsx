import Encryption from "@/components/main/Encryption";
import FaqSection from "@/components/main/FaqSection";
import Faq from "@/components/main/FaqSection";
import Hero from "@/components/main/Hero";
import Pricing from "@/components/main/Pricing";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WhatWeDo from "@/components/main/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <WhatWeDo/>
        <Skills />
        <Pricing/>
        <Encryption />
        <FaqSection/>
        <Projects />
      </div>
    </main>
  );
}
