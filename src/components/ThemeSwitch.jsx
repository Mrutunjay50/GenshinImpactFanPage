import React, { useState } from "react";
import { motion } from "framer-motion";
import ThemeData from "../Constants/ThemeData";
import { useTheme } from "./ThemeContext";
import { getThemeContainerClasses } from "../utils/themeUtils";

const Switch = ({ rot }) => {
  return (
    <div
      className={`origin-center transition transform duration-300 ease-in-out ${
        rot ? "rotate-90" : "-rotate-90"
      } bg-[#ffffff1b] fixed right-2 bottom-[1.5rem] z-20 rounded-full h-[40px] w-[40px] flex flex-row items-center justify-center cursor-pointer`}
    >
      <div className="relative w-[30px] h-[30px] flex flex-wrap">
        <div className="bg-red-500 absolute top-1/2 transform -translate-y-1/2 left-0 rounded-full h-[15px] w-[15px]"></div>
        <div className="bg-yellow-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full h-[15px] w-[15px]"></div>
        <div className="bg-indigo-500 absolute top-1/2 transform -translate-y-1/2 right-0 rounded-full h-[15px] w-[15px]"></div>
      </div>
    </div>
  );
};

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [button, setButton] = useState(false);

  const handleThemeClick = (selectedTheme) => {
    // Create a new theme object with all values set to false
    const newTheme = Object.keys(theme).reduce((acc, themeName) => {
      acc[themeName] = false;
      return acc;
    }, {});

    // Set the selected theme to true
    newTheme[selectedTheme] = true;

    // Update the theme
    setTheme(newTheme);
  };

  return (
    <>
      <div onClick={() => setButton(!button)} role="button" tabIndex={0}>
        <Switch rot={button} />
      </div>
      <motion.div
        initial={false}
        animate={{
          x: button ? 0 : 700 + 48
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
        className="font-caveat fixed bottom-[0.3rem] right-[3rem] z-10 backdrop-blur-md bg-black/40 border border-white/10 h-[10vh] w-[700px] p-2 flex flex-row flex-wrap rounded-lg text-white font-semibold shadow-2xl"
      >
        {ThemeData.map((item, index) => {
          const isActive = theme[item.theme];
          const themeClasses = getThemeContainerClasses(theme);
          return (
            <motion.div
              key={item.theme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: button ? 1 : 0,
                scale: button ? 1 : 0.8
              }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleThemeClick(item.theme)}
              className={`relative mx-2 flex-1 text-center cursor-pointer transition-all duration-300 ease-in-out border-2 border-transparent hover:border-2 hover:bg-[#1e1d1d40] flex flex-col justify-center rounded-lg backdrop-blur-sm ${
                isActive ? `${themeClasses.hover} ${themeClasses.bg} scale-105` : "bg-white/5"
              } hover:scale-105 active:scale-95`}
            >
              {item.name}
              <motion.div
                className={`absolute h-[10px] w-[10px] ${item.midColor} -right-1 -top-1 rounded-full shadow-lg`}
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default ThemeSwitch;
