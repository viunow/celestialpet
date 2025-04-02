import React from "react";
import cover from "../../public/cover.png";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className="bg-blue300 w-full h-dvh flex flex-col items-center justify-between overflow-hidden relative">
      <div
        className={`${playfair.className} text-center max-w-3xl px-4 md:px-0 z-10 pt-10 md:pt-16`}
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-wide mb-3">
          Em breve, <span className="italic">Celestial Pet</span>
        </h1>
        <p className="text-white text-lg md:text-xl font-medium">
          Confortando tutores na despedida de seus companheiros, com dignidade e
          respeito.
        </p>
      </div>

      <div className="w-full h-auto flex justify-end items-end">
        <div className="relative w-full md:w-auto max-h-[100vh]">
          <Image
            src={cover.src}
            width={900}
            height={600}
            quality={100}
            alt="Banner Celestial Pet"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
