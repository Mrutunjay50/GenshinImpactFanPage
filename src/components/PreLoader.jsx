import React from "react";
import { Loader1, Loader } from "../assets/index";
import { motion } from "framer-motion";

const PreLoader = () => {
  const containerVariants = {
    initial: {
      width: "0px",
      opacity: 1,
      height: "45px"
    },
    animate: {
      width: "300px",
      opacity: 1,
      height: "45px",
      transition: {
        duration: 2,
        ease: "easeInOut"
      },
    },
  };

  const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative h-[100vh] w-[100%] bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2f] to-[#0a0a0f] flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 2;
          const randomDuration = 3 + Math.random() * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
                opacity: 0
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 50) % 100}%`],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <img
            src={Loader}
            className="h-[45px] object-left object-cover drop-shadow-2xl"
            alt="Loader"
          />
          
          <motion.img
            variants={containerVariants}
            initial="initial"
            animate="animate"
            src={Loader1}
            className="h-[45px] bg-white absolute top-0 left-0 object-cover object-left rounded-3xl"
            alt=""
            style={{ clipPath: "inset(0 0 0 0)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-white/60 text-sm font-light tracking-wider"
        >
          Loading Teyvat...
        </motion.div>
      </div>
    </div>
  );
};

export default PreLoader;
