"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import HeroImage from "../../../public/cachorro-gato.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-celestial-blue pt-16 relative overflow-hidden">
      <div className="celestial-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-4">
            <span className="block">Celestial</span>
            <span className="text-celestial-brown">Pet</span>
          </h1>

          <h2 className="font-raleway text-xl md:text-2xl font-medium text-celestial-brown mb-6 italic">
            Traduzindo sentimentos em homenagens
          </h2>

          <p className="text-celestial-brown text-lg mb-8">
            Confortando tutores na despedida de seus companheiros, com dignidade
            e respeito.
          </p>

          <Button
            onClick={scrollToAbout}
            className="bg-white text-celestial-brown hover:bg-opacity-90 shadow-md"
          >
            Conheça Nossos Serviços
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-video max-w-[600px] mx-auto">
            <Image
              src={HeroImage.src}
              alt="Celestial Pet"
              width={600}
              height={500}
              className="object-contain rounded-xl drop-shadow-xl contrast-[1.20]"
              priority
              quality={100}
            />
          </div>
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

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-celestial-beige rounded-full opacity-20 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-celestial-lightBeige rounded-full opacity-20 translate-y-1/3 -translate-x-1/3"></div>
    </section>
  );
};

export default Hero;
