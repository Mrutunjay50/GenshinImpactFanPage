import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "../ThemeContext";
import CharacterTab from "./CharacterTab";
import WeaponTab from "./WeaponTab";

const OutlinedInfo = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const { theme } = useTheme();

  function getDayFromDate(dateString) {
    const Days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dateDay = new Date(dateString);
    const day = dateDay.getDay();

    return Days[day];
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // else if(!isInView) {
    //   mainControls.start("hidden");
    // }
  }, [isInView, mainControls]);

  useEffect(() => {
    setDay(getDayFromDate(date));
  }, [date]);

  return (
    <>
      <CharacterTab ref={ref} mainControls={mainControls} />
      <WeaponTab ref={ref} mainControls={mainControls} />
      {/* Artifact Sets */}
      <motion.div
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{
          type: "spring", duration: 0.3, bounce: 0.3  // Reduce bounce
        }}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`group relative border-2 border-dimWhite  ${
          theme.ThemeHome
            ? "hover:border-gray-200 bg-[#1a1a2f9d] hover:bg-[#1a1a2f]"
            : theme.ThemeZhongli
            ? "hover:border-yellow-200 bg-[#2827244d] hover:bg-[#282724e7] "
            : theme.ThemeVenti
            ? "hover:border-[#99b2e4] bg-[#b5ebd73e] hover:bg-[#235d486b]"
            : theme.ThemeEi
            ? "hover:border-[#5b4aa4] bg-[#332d4467] hover:bg-[#332d44d4]"
            : theme.ThemeNahida
            ? "hover:border-[#b1e96d] bg-[#dcf7e14c] hover:bg-[#328942bd]"
            : theme.ThemeFocalors
            ? "hover:border-[#6d9de9] bg-[#2857aa4c] hover:bg-[#2858aa8f]"
            : ""
        } w-[500px] p-5 h-[600px] opacity-70 transition ease-all duration-500 hover:opacity-100 bg-[#282724] m-8 rounded-md`}
      >
        <h2 className=" text-center text-[25px] text-yellow-400">
          Date to Day Calculator
        </h2>
        <div className=" mt-10 flex flex-col items-center">
          <h3 className="text-center text-[20px] text-yellow-400">
            Input the Date
          </h3>
          <input
            className="bg-[#282724] border-2 border-yellow-400 rounded-md w-[200px] text-dimWhite text-center"
            type="date"
            name="date"
            id="Date"
            onChange={handleDate}
          />
        </div>
        <div className=" mt-10 flex flex-col items-center">
          <h3 className="text-center text-[20px] text-yellow-400">
            Day of the Date
          </h3>
          <div className="bg-[#282724] border-2 border-yellow-400 rounded-md w-[200px] text-dimWhite h-[30px] text-center">
            {day}
          </div>
        </div>
      </motion.div>
      {/*Weekly Bosses*/}
      <motion.div
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{
          type: "spring", duration: 0.3, bounce: 0.3  // Reduce bounce
        }}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`group relative border-2 border-dimWhite  ${
          theme.ThemeHome
            ? "hover:border-gray-200 bg-[#1a1a2f9d] hover:bg-[#1a1a2f]"
            : theme.ThemeZhongli
            ? "hover:border-yellow-200 bg-[#2827244d] hover:bg-[#282724e7] "
            : theme.ThemeVenti
            ? "hover:border-[#99b2e4] bg-[#b5ebd73e] hover:bg-[#235d486b]"
            : theme.ThemeEi
            ? "hover:border-[#5b4aa4] bg-[#332d4467] hover:bg-[#332d44d4]"
            : theme.ThemeNahida
            ? "hover:border-[#b1e96d] bg-[#dcf7e14c] hover:bg-[#328942bd]"
            : theme.ThemeFocalors
            ? "hover:border-[#6d9de9] bg-[#2857aa4c] hover:bg-[#2858aa8f]"
            : ""
        } w-[500px] p-5 h-[600px] opacity-70 transition ease-all duration-500 hover:opacity-100 bg-[#282724] m-8 rounded-md`}
      ></motion.div>
    </>
  );
};

export default OutlinedInfo;
