"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Banner1 from "../../../public/banners/1.jpg";
import Banner2 from "../../../public/banners/2.jpg";
import Banner3 from "../../../public/banners/3.jpg";
import Banner4 from "../../../public/banners/4.jpg";

import ButtonContact from "./ButtonContact";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-dvh flex items-center justify-center relative overflow-hidden">
      <div className="absolute z-10 top-0 left-0 w-full h-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="w-full h-full"
        >
          <SwiperSlide className="h-full">
            <Image
              src={Banner1.src}
              alt="Celestial Pet - Slide 1"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              priority
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Image
              src={Banner2.src}
              alt="Celestial Pet - Slide 2"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Image
              src={Banner3.src}
              alt="Celestial Pet - Slide 3"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Image
              src={Banner4.src}
              alt="Celestial Pet - Slide 4"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-celestial-beige/90" />
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
