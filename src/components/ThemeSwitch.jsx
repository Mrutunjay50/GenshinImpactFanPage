import React, { useState } from "react";
import ThemeData from "../Constants/ThemeData";
import { useTheme } from "./ThemeContext";

const Switch = ({rot}) => {
 
 
  return (
    <div className={` origin-center transition transform duration-300 ease-in-out ${rot ? "rotate-90" : "-rotate-90"} bg-[#ffffff1b] fixed right-2 bottom-[1.5rem] z-20 rounded-full h-[40px] w-[40px] flex flex-row items-center justify-center cursor-pointer`}>
      <div className="relative w-[30px] h-[30px]  flex flex-wrap">
        <div className="bg-red-500 absolute top-1/2 transform -translate-y-1/2 left-0 rounded-full h-[15px] w-[15px]"></div>
        <div className="bg-yellow-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full h-[15px] w-[15px]"></div>
        <div className="bg-indigo-500 absolute top-1/2 transform -translate-y-1/2 right-0 rounded-full h-[15px] w-[15px]"></div>
      </div>
    </div>
  );
};

const ThemeSwitch = () => {
  const {setTheme, theme} = useTheme({});
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
    <div onClick={ () => setButton(!button)} >
      <Switch rot={button}/>
    </div>
      <div className={` ${button ? "translate-x-0" : "translate-x-[calc(700px+3rem)]"} transition duration-300 ease-in-out fixed bottom-[0.3rem] right-[3rem] z-10 bg-[#ffffff09] h-[10vh] w-[700px] p-2 flex flex-row flex-wrap rounded-sm text-white font-semibold`}>
        {ThemeData.map((item, index) => (
          <>
            <div
            onClick={() => handleThemeClick(item.theme)}
             className={`
             ${theme.ThemeHome ? "hover:border-gray-200 bg-[#1a211e5a]" : ""}
             ${theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""}
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""}
             relative mx-2 flex-1 text-center cursor-pointer transition duration-300 ease-in-out border-2 border-transparent hover:border-2 hover:bg-[#1e1d1d40]  flex flex-col justify-center rounded-[4px]`}>
              {item.name}
              <div
                className={`absolute h-[10px] w-[10px] ${item.midColor} -right-1 -top-1 rounded-full`}
              ></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ThemeSwitch;
