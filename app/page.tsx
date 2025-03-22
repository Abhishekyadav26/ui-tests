"use client";

import { Avatar2 } from "@/components/avatar1";
// import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { Connect } from "@/components/connect";
import { Footer } from "@/components/footer";
import { Footer2 } from "@/components/footer2";
import { Footer3 } from "@/components/footer3";
import { Kire } from "@/components/kire";
// import { Globe } from "@/components/ui/globe";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

export default function Home() {
  return (
    <>
    <div className="flex bg-black text-white items-center justify-center h-screen">
       <Avatar2 />
    </div>
    <div className="flex bg-black text-white items-center justify-center h-screen">
       <Connect />
    </div>
    <div className="flex bg-black text-white items-center justify-center h-screen">
       <SparklesText text="I Love Frontend" />
    </div>
    <div className="flex bg-black dark items-center justify-center h-screen">
      <TypewriterEffect words={words} />
    </div>
    <div className="flex bg-black dark items-center justify-center h-screen">
      <TextHoverEffect text="ABHI" />
    </div>
    <div className="flex bg-black dark items-center justify-center h-screen">
      <Footer />
    </div>
    <div className="flex bg-black dark items-center justify-center h-screen">
      <Footer2 />
    </div>
    <div className="flex bg-black dark items-center justify-center h-screen">
      <Footer3 />
    </div>
    <div className="flex bg-black dark text-white items-center justify-center h-screen">
       {/* <Globe /> */}
       <Kire />
    </div>
    </>
  );
}
