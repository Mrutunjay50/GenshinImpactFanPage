import React, { useState } from "react";
import { Paimon } from "../../assets";
import { motion } from "framer-motion";
import LOGO from "../../assets";
import { useTheme } from "../ThemeContext";
import BackgroundImage from "../ui/BackgroundImage";
import Card from "../ui/Card";
import NavLink from "../ui/NavLink";
import { getThemeContainerClasses } from "../../utils/themeUtils";
import OutlinedInfo from "./OutlinedInfo";
import RegionTab from "./RegionTab";

const Teyvat_Region = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { theme } = useTheme();
  const themeClasses = getThemeContainerClasses(theme);

  const paimonMessageClasses = `ease-in-out p-3 w-[200px] rounded-xl absolute top-[-30%] right-[-30%] ${
    showMessage ? "opacity-100" : "opacity-0"
  } ${themeClasses.bg} z-0 transition duration-500`;

  return (
    <BackgroundImage
      className="relative pt-[13%] bg-[#090802]"
      backgroundOptions={{
        backgroundSize: theme.ThemeZhongli || theme.ThemeHome ? "cover" : "100% auto",
        backgroundAttachment: theme.ThemeZhongli ? "scroll" : "fixed",
        backgroundPosition: theme.ThemeZhongli || theme.ThemeEi ? "initial" : "center",
      }}
    >
      {/* Overview Section */}
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
        <Card
          className="group text-white w-[60%] h-[280px] mx-[1%] p-8 text-dimWhite relative font-caveat text-[18px]"
          opacity="default"
          glassmorphism={true}
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
            className="w-[250px] absolute top-[-25%] overflow-hidden right-[-15%] transition ease-all duration-500 xs:opacity-90 ss:opacity-0 opacity-0 group-hover:opacity-100 cursor-pointer"
            onMouseEnter={() => setShowMessage(true)}
            onMouseLeave={() => setShowMessage(false)}
          >
            <img src={Paimon} alt="Paimon" />
          </div>
          <span className={paimonMessageClasses}>
            Hello there!! This is Paimon your full time Teyvat guide
          </span>
          <hr className="border-yellow-200" />
          <br />
          <span className="absolute right-8 bottom-4">
            <a
              href="https://genshin.hoyoverse.com/en/home"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e7dc36] transition duration-300"
            >
              Visit Official Genshin Page
            </a>
          </span>
        </Card>
      </motion.div>

      <RegionTab />

      {/* More In Game Details */}
      <div className="mx-5 flex flex-wrap justify-center items-center pt-32">
        <OutlinedInfo />
      </div>

      {/* Footer Section */}
      <motion.div 
        className="flex flex-col text-[#e2dfdf] items-center pb-8 pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={LOGO}
          alt="GENSHIN"
          className="xs:h-[80px] ss:h-[50px] sm:h-[70px] xs:w-[160px] ss:w-[100px] sm:w-[120px] z-10 mb-6 drop-shadow-lg"
        />
        <ul className="flex items-center justify-center gap-8 z-10 flex-wrap">
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-[#e2dfdf] backdrop-blur-sm bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold cursor-pointer inline-block"
            >
              About Me
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-[#e2dfdf] backdrop-blur-sm bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold cursor-pointer inline-block"
            >
              Contact Me
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </BackgroundImage>
  );
};

export default Teyvat_Region;
