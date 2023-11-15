import React, { useState } from "react";
import {
  Liyue,
  Mondstadt16,
  Inazuma3,
  Sumeru6,
  Fontaine_Ori,
  Lumine1
} from "../../assets";
import { Paimon } from "../../assets";
import { motion, spring, useAnimation, useInView } from "framer-motion";
import LOGO from "../../assets";
import { useTheme } from "../ThemeContext";

import OutlinedInfo from "./OutlinedInfo";

import RegionTab from "./RegionTab";

const Teyvat_Region = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <div
        className=" relative pt-[13%] bg-[#090802]"
        style={{
          backgroundImage: theme.ThemeVenti
            ? `url(${Mondstadt16})`
            : theme.ThemeZhongli
            ? `url(${Liyue})`
            : theme.ThemeEi
            ? `url(${(Inazuma3)})`
            : theme.ThemeNahida
            ? `url(${Sumeru6})`
            : theme.ThemeFocalors
            ? `url(${Fontaine_Ori})`
            : `url(${Lumine1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: theme.ThemeZhongli  ? "cover" : theme.ThemeHome ? "cover" : "100% auto",
          backgroundAttachment : theme.ThemeZhongli ? "" : "fixed",
          backgroundPosition : theme.ThemeZhongli || theme.ThemeEi ? "" : "center",

        }}
      >
        {/* <motion.h1
      initial={{x : 0}}
      animate={{x : 1000}}
      transition={
        {
          duration : 3,
          repeat : Infinity,
          repeatDelay : 0.1
        }
      }>
      Sunday Monmday Office will be closed
      </motion.h1> */}

        {/* OverView */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          className="h-[calc(100vh-20vh)] flex flex-row justify-center"
        >
          <div
            className={`group text-white
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#1a1a2f]" : ""}
            ${theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#282724]" : ""}
            ${theme.ThemeVenti ? "hover:border-[#6499fa] bg-[#04261690]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d44]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""}
             w-[60%] h-[280px] mx-[1%] opacity-70 transition ease-all duration-300 hover:opacity-100 p-8 border-2 border-transparent  rounded-md text-dimWhite relative`}
          >
            <p>
              You have arrived in Teyvat — a fantasy world where the seven
              elements flow and converge.
            </p>
            <br />
            <p>
              In the distant past, the Archons granted mortals unique elemental
              abilities. With the help of such powers, people formed a bountiful
              homeland out of the wilderness. However, 500 years ago, the
              collapse of an ancient civilization turned the universe upside
              down...
            </p>
            <br />
            <p>
              Though the calamity the world suffered has ceased, peace has yet
              to be restored.
            </p>
            <br />
            <div
              className="  w-[250px] absolute top-[-25%] overflow-hidden right-[-15%] transition ease-all duration-500 xs:opacity-90 ss:opacity-0 opacity-0 group-hover:opacity-100  cursor-pointer"
              onMouseEnter={() => setShowMessage(true)}
              onMouseLeave={() => setShowMessage(false)}
            >
              <img src={Paimon} alt="Paimon" />
            </div>
            <span
              className={`ease-in-out bg-[#1a1a2f] p-3 w-[200px] rounded-xl absolute top-[-30%] right-[-30%] ${
                showMessage ? "opacity-100" : "opacity-0"
              } ${theme.ThemeZhongli ? " bg-[#282724]" : ""}
            ${theme.ThemeVenti ? " bg-[#042616a3]" : ""}
            ${theme.ThemeEi ? " bg-[#332d44]" : ""}
            ${theme.ThemeNahida ? " bg-[#dcf7e14c]" : ""}
            ${theme.ThemeFocalors ? " bg-[#2857aa4c]" : ""}
               z-0 transition duration-500`}
            >
              Hello there!! This is Paimon your full time Teyvat guide
            </span>
            <hr className="border-yellow-200" />
            <br />
            <span className="absolute right-8 bottom-4">
              <a href="https://genshin.hoyoverse.com/en/home">
                Visit Official Genshin Page
              </a>
            </span>
          </div>
        </motion.div>

        <RegionTab />
        {/* more In game Details */}
        <div className="mx-5 flex flex-wrap justify-center items-center pt-32">
          <OutlinedInfo />
        </div>
        <div className=" flex flex-col text-[#e2dfdf] items-center pb-4">
          <img
            src={LOGO}
            alt="GENSHIN"
            className=" xs:h-[80px] ss:h-[50px] sm:h-[70px] xs:w-[160px] ss:w-[100px] sm:w-[120px] z-10"
          />
          <ul className=" flex items-center justify-around w-[20%] z-10">
            <li className="xs:mx-1 sm:mx-5 hover:text-[#e7dc36] cursor-pointer border-[1px] border-transparent transition ease-in-out duration-300 hover:border-white  px-2 py-1 rounded-md">
              About Me
            </li>
            <li className="xs:mx-1 sm:mx-5 hover:text-[#e7dc36] cursor-pointer border-[1px] border-transparent transition ease-in-out duration-300 hover:border-white  px-2 py-1 rounded-md">
              Contact Me
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Teyvat_Region;
