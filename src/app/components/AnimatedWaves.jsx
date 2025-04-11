"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedWaves = ({
  color = "rgba(96, 60, 0, 0.2)",
  className = "",
  waveHeight = 25,
  speed = 20,
  delay = 0,
}) => {
  return (
    <div className={`absolute w-full h-full overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <motion.path
          d={`M0,${waveHeight} C300,${
            waveHeight * 3
          } 400,0 600,${waveHeight} C800,${
            waveHeight * 2
          } 900,0 1200,${waveHeight} L1200,120 L0,120 Z`}
          fill={color}
          initial={{ translateX: -1000 }}
          animate={{
            translateX: [0, -1000, 0],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedWaves;
