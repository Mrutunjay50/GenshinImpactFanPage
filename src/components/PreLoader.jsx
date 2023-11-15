import React from "react";
import { Loader1, Loader } from "../assets/index";
import { motion } from "framer-motion";

const PreLoader = () => {
  const containerVariants = {
    initial: {
      width: "0px",
      opacity: 1,
      height : "45px"
    },
    animate: {
      width: "300px",
      opacity: 1,
      height : "45px",
      transition: {
        duration: 2, // Adjust the duration as needed
      },
    },
  };
  return (
    <div className=" relative h-[100vh] w-[100%]">
      <img
        src={Loader}
        className="  h-[45px] absolute top-[50%] left-[40%] translate-y-[-50%] object-left object-cover"
        alt="Loader.."
      />
      
      <motion.img
      variants={containerVariants}
        initial="initial"
        animate="animate"
        src={Loader1}
        className=" h-[45px] bg-white absolute top-[50%] left-[40%] translate-y-[-50%] object-cover object-left"
        alt=""
      />
    </div>
  );
};

export default PreLoader;
