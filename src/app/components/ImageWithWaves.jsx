"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageWithWaves = ({ src, alt, width, height, className = "" }) => {
  // Waves animation variants
  const waveVariants = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`relative ${className}`}>
      {/* Wave decoration around the image */}
      <div className="absolute -inset-6">
        {/* Top waves */}
        <motion.svg
          width="120%"
          height="40"
          viewBox="0 0 400 40"
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
          variants={waveVariants}
          animate="animate"
        >
          <path
            d="M0,20 C40,10 60,30 100,20 C140,10 160,30 200,20 C240,10 260,30 300,20 C340,10 360,30 400,20"
            fill="none"
            stroke="rgba(96, 60, 0, 0.35)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Bottom waves */}
        <motion.svg
          width="120%"
          height="40"
          viewBox="0 0 400 40"
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
          variants={waveVariants}
          animate="animate"
          style={{ originY: 0 }}
        >
          <path
            d="M0,20 C40,10 60,30 100,20 C140,10 160,30 200,20 C240,10 260,30 300,20 C340,10 360,30 400,20"
            fill="none"
            stroke="rgba(96, 60, 0, 0.35)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Left waves */}
        <motion.svg
          width="40"
          height="120%"
          viewBox="0 0 40 400"
          className="absolute -left-10 top-1/2 transform -translate-y-1/2"
          variants={waveVariants}
          animate="animate"
        >
          <path
            d="M20,0 C10,40 30,60 20,100 C10,140 30,160 20,200 C10,240 30,260 20,300 C10,340 30,360 20,400"
            fill="none"
            stroke="rgba(96, 60, 0, 0.35)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Right waves */}
        <motion.svg
          width="40"
          height="120%"
          viewBox="0 0 40 400"
          className="absolute -right-10 top-1/2 transform -translate-y-1/2"
          variants={waveVariants}
          animate="animate"
        >
          <path
            d="M20,0 C10,40 30,60 20,100 C10,140 30,160 20,200 C10,240 30,260 20,300 C10,340 30,360 20,400"
            fill="none"
            stroke="rgba(96, 60, 0, 0.35)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      {/* Actual image with subtle pulse animation */}
      <motion.div
        className="relative rounded-xl overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 10px rgba(200, 220, 255, 0.3)",
            "0 0 20px rgba(200, 220, 255, 0.5)",
            "0 0 10px rgba(200, 220, 255, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain rounded-xl"
          priority
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default ImageWithWaves;
