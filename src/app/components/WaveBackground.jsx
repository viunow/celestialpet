"use client";

import React from "react";
import { motion } from "framer-motion";

const WaveBackground = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Multiple wave paths with different animations */}
        <motion.path
          d="M0,350 C100,300 250,450 400,350 C550,250 700,400 850,350 C1000,300 1150,350 1300,350 L1300,1300 L0,1300 Z"
          fill="rgba(96, 60, 0, 0.15)"
          animate={{
            d: [
              "M0,350 C100,300 250,450 400,350 C550,250 700,400 850,350 C1000,300 1150,350 1300,350 L1300,1300 L0,1300 Z",
              "M0,350 C100,400 250,350 400,450 C550,350 700,300 850,400 C1000,350 1150,350 1300,350 L1300,1300 L0,1300 Z",
              "M0,350 C100,300 250,450 400,350 C550,250 700,400 850,350 C1000,300 1150,350 1300,350 L1300,1300 L0,1300 Z",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.path
          d="M0,400 C150,350 300,500 450,400 C600,300 750,450 900,400 C1050,350 1200,400 1350,400 L1350,1350 L0,1350 Z"
          fill="rgba(250, 221, 169, 0.15)"
          animate={{
            d: [
              "M0,400 C150,350 300,500 450,400 C600,300 750,450 900,400 C1050,350 1200,400 1350,400 L1350,1350 L0,1350 Z",
              "M0,400 C150,450 300,400 450,500 C600,400 750,350 900,450 C1050,400 1200,400 1350,400 L1350,1350 L0,1350 Z",
              "M0,400 C150,350 300,500 450,400 C600,300 750,450 900,400 C1050,350 1200,400 1350,400 L1350,1350 L0,1350 Z",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.path
          d="M0,450 C200,400 350,550 500,450 C650,350 800,500 950,450 C1100,400 1250,450 1400,450 L1400,1400 L0,1400 Z"
          fill="rgba(200, 220, 255, 0.15)"
          animate={{
            d: [
              "M0,450 C200,400 350,550 500,450 C650,350 800,500 950,450 C1100,400 1250,450 1400,450 L1400,1400 L0,1400 Z",
              "M0,450 C200,500 350,450 500,550 C650,450 800,400 950,500 C1100,450 1250,450 1400,450 L1400,1400 L0,1400 Z",
              "M0,450 C200,400 350,550 500,450 C650,350 800,500 950,450 C1100,400 1250,450 1400,450 L1400,1400 L0,1400 Z",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
