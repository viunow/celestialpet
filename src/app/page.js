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
    <div className="bg-blue300 w-full min-h-screen flex flex-col items-center relative">
      <div
        className={`${playfair.className} text-center max-w-3xl px-4 md:px-0 z-10 mt-10 md:mt-16`}
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-wide mb-3">
          Em breve, <span className="italic">Celestial Pet</span>
        </h1>
        <p className="text-white text-lg md:text-xl font-medium">
          Confortando tutores na despedida de seus companheiros, com dignidade e
          respeito.
        </p>
      </div>
      <div className="mt-auto ml-auto">
        <Image
          src={cover.src}
          width={900}
          height={600}
          quality={100}
          alt="Banner Celestial Pet"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
