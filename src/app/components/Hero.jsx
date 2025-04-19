"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInterval } from "@/lib/hooks/useInterval";

import Banner1 from "../../../public/banners/1.jpg";
import Banner2 from "../../../public/banners/2.jpg";
import Banner3 from "../../../public/banners/3.jpg";
import Banner4 from "../../../public/banners/4.jpg";
import ButtonContact from "./ButtonContact";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
  };

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  useInterval(() => {
    if (api) {
      api.scrollNext();
    }
  }, 5000);

  return (
    <section className="min-h-dvh flex items-center justify-center relative overflow-hidden">
      <div className="absolute z-10 top-0 left-0 w-full h-full">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-dvh">
            <CarouselItem className="h-full">
              <Image
                src={Banner1.src}
                alt="Celestial Pet - Slide 1"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                priority
                quality={100}
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <Image
                src={Banner2.src}
                alt="Celestial Pet - Slide 2"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                quality={100}
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <Image
                src={Banner3.src}
                alt="Celestial Pet - Slide 3"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                quality={100}
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <Image
                src={Banner4.src}
                alt="Celestial Pet - Slide 4"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                quality={100}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="absolute z-30 bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-celestial-brown w-6" : "bg-celestial-brown/50"
            }`}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-celestial-beige" />
      <div className="celestial-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start pt-28 2xl:pt-40 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left max-w-2xl mx-auto lg:mx-0"
        >
          <h1 className="font-playfair text-6xl lg:text-8xl font-bold text-celestial-brown mb-4 drop-shadow-xl flex flex-col">
            <span>Celestial </span>
            <span>Pet</span>
          </h1>

          <h2 className="font-raleway text-xl md:text-2xl font-medium text-celestial-brown mb-6 italic">
            Traduzindo <strong>sentimentos</strong> em cuidado e{" "}
            <strong>homenagens!</strong>
          </h2>

          <ButtonContact />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown
          size={32}
          className="text-celestial-brown cursor-pointer"
          onClick={scrollToAbout}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
