import React from "react";
import { Loader1, Loader } from "../assets/index";
import { motion } from "framer-motion";

const PreLoader = () => {
  const containerVariants = {
    initial: { width: "0px", opacity: 1, height: "45px" },
    animate: {
      width: "280px",
      opacity: 1,
      height: "45px",
      transition: { duration: 1.8, ease: "easeInOut" },
    },
  };

  const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#020410] via-[#090b18] to-[#06080e] text-white">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 1.8;
          const randomDuration = 2.8 + Math.random() * 1.6;

          return (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/20"
              initial={{ x: `${randomX}%`, y: `${randomY}%`, opacity: 0 }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 40) % 100}%`, `${randomY}%`],
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{ duration: randomDuration, repeat: Infinity, delay: randomDelay, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div variants={fadeInVariants} initial="initial" animate="animate" className="relative">
          <img src={Loader} className="h-[45px] object-cover drop-shadow-2xl" alt="Loader" />
          <motion.img
            variants={containerVariants}
            initial="initial"
            animate="animate"
            src={Loader1}
            className="absolute left-0 top-0 h-[45px] object-cover"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 text-center text-sm text-white/60 tracking-[0.18em]"
        >
          Loading Teyvat...
        </motion.div>
      </div>
    </div>
  );
};

export default PreLoader;
