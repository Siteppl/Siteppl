import * as React from "react";
import { motion } from "framer-motion";

export default function Example () {
  return (
    <motion.div
      animate={{
        x: [-200, -200, -200],
        width: [50, 100, 50],
        scale: [1, 1, 1, 1],
        rotate: [-25, -50, -25, -50, -25],
        borderRadius: ["30%", "30%", "30%", "30%", "30%"]
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
};