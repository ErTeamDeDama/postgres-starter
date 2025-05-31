"use client";

import { motion } from "framer-motion";

export default function AnimatedArcs() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-end justify-start">
      {/* Cerchio grande: solo 1/4 visibile */}
      <div className="absolute -bottom-[250px] -left-[250px] w-[500px] h-[500px] rounded-full bg-panel" />

      {/* Cerchietti che ruotano */}
      {positions.map(({ delay, angle }, index) => (
        <motion.div
          key={index}
          initial={{ rotate: 0 }}
          animate={{ rotate: angle }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="absolute bottom-[250px] left-[250px] origin-bottom-left"
        >
          <div
            className="w-10 h-10 rounded-full bg-darkBackground"
            
          />
        </motion.div>
      ))}
    </div>
  );
}

// Ogni cerchio ruota lungo l'arco
const positions = [
  { angle: 45, delay: 0.1 }, 
  { angle: 75, delay: 0.3 }, 
  { angle: 110, delay: 0.5 }, 
];
