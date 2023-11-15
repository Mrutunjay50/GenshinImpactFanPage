import React from "react";
import {
  Raiden_shogun20,
  Nahida,
  Zhongli,
  Venti_Ori,
  FurinaOri1,
  Lumine0,
} from "../../assets";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const CharacterTab = ({ ref, mainControls }) => {
  const { theme } = useTheme();
  return (
    <>
      <motion.div
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`group relative border-2 border-dimWhite  ${
          theme.ThemeHome
            ? "hover:border-gray-200 bg-[#1a1a2f9d] hover:bg-[#1a1a2f]"
            : ""
        }
             ${
               theme.ThemeZhongli
                 ? "hover:border-yellow-200 bg-[#2827244d] hover:bg-[#282724e7] "
                 : ""
             }
            ${
              theme.ThemeVenti
                ? "hover:border-[#99b2e4] bg-[#b5ebd73e] hover:bg-[#235d486b]"
                : ""
            }
            ${
              theme.ThemeEi
                ? "hover:border-[#5b4aa4] bg-[#332d44a3] hover:bg-[#332d44e2]"
                : ""
            }
            ${
              theme.ThemeNahida
                ? "hover:border-[#b1e96d] bg-[#dcf7e14c] hover:bg-[#328942bd]"
                : ""
            }
            ${
              theme.ThemeFocalors
                ? "hover:border-[#6d9de9] bg-[#2857aa4c] hover:bg-[#2858aa8f]"
                : ""
            } w-[500px] p-5 h-[600px] opacity-70 transition ease-all duration-500 hover:opacity-100 bg-[#282724] m-8 rounded-md`}
      >
        <img
          className={`absolute  opacity-0
          // ${theme.ThemeHome ? "bottom-28 right-10" : ""}
            ${theme.ThemeZhongli ? "bottom-20 right-10" : ""}
            ${theme.ThemeVenti ? "w-[70%] h-[auto] bottom-40 left-10" : ""}
            ${theme.ThemeEi ? "bottom-20 right-10" : ""}
            ${theme.ThemeNahida ? "w-[70%] h-[auto] bottom-40 left-0" : ""}
            ${theme.ThemeFocalors ? "w-[70%] h-[auto] bottom-20 left-0" : ""}
           transition ease-all duration-300 group-hover:opacity-100`}
          src={
            theme.ThemeHome ?
            Lumine0 :
            theme.ThemeEi
              ? Raiden_shogun20
              : theme.ThemeZhongli
              ? Zhongli
              : theme.ThemeVenti
              ? Venti_Ori
              : theme.ThemeNahida
              ? Nahida
              : theme.ThemeFocalors
              ? FurinaOri1
              : ""
          }
          alt="Characters"
        />
        <h4
          className={`${
            theme.ThemeZhongli ? " text-yellow-700 font-semibold" : ""
          }
            ${theme.ThemeHome ? " text-[#bfe5f9] font-semibold" : ""}
            ${theme.ThemeVenti ? " text-blue-300 font-semibold" : ""}
            ${theme.ThemeEi ? " text-[#9e86ef] font-semibold" : ""}
            ${theme.ThemeNahida ? " text-green-600 font-semibold" : ""}
            ${theme.ThemeFocalors ? "text-white" : ""}
            text-right font-poppins font-semibold text-[20px] mb-10`}
        >
          Character Section
        </h4>
        <pre
          className={`
        ${
          theme.ThemeZhongli
            ? " top-10 left-20 text-yellow-300 font-semibold"
            : ""
        }
            ${
              theme.ThemeHome
                ? "text-[#bfe5f9] top-5 left-10 font-semibold "
                : ""
            }
            ${
              theme.ThemeVenti
                ? "top-[20%] left-20 text-blue-300 font-semibold"
                : ""
            }
            ${
              theme.ThemeEi
                ? "bottom-60 left-16 text-[#9e86ef] font-semibold"
                : ""
            }
            ${
              theme.ThemeNahida
                ? "top-5 left-20 text-green-600 font-semibold"
                : ""
            }
            ${theme.ThemeFocalors ? "top-5 left-12 text-white font-semibold" : ""}
         absolute opacity-0 transition ease-all duration-300 group-hover:opacity-100`}
        >
          CH
          <br />
          AR
          <br />
          AC
          <br />
          TE
          <br />R
        </pre>
        <pre
          className={`${
            theme.ThemeZhongli
              ? "bottom-40 right-[45%] text-yellow-300 font-semibold"
              : ""
          }
            ${
              theme.ThemeHome
                ? "text-[#bfe5f9] bottom-60 right-[40%] font-semibold"
                : ""
            }
            ${
              theme.ThemeVenti
                ? " bottom-60 right-[45%] text-blue-300 font-semibold"
                : ""
            }
            ${
              theme.ThemeEi
                ? "bottom-40 right-[45%] text-[#9e86ef] font-semibold"
                : ""
            }
            ${
              theme.ThemeNahida
                ? "bottom-64 right-[35%] text-green-600 font-semibold"
                : ""
            }
            ${
              theme.ThemeFocalors ? "bottom-40 right-[45%] text-white font-semibold" : ""
            } absolute  opacity-0 transition ease-all duration-300 group-hover:opacity-100`}
        >
          DE
          <br />
          TA
          <br />
          IL
          <br />S
        </pre>
        <div className={`${
            theme.ThemeZhongli ? " text-yellow-700 font-semibold" : ""
          }
            ${theme.ThemeHome ? " text-[#bfe5f9] font-semibold" : ""}
            ${theme.ThemeVenti ? " text-blue-300 font-semibold" : ""}
            ${theme.ThemeEi ? " text-[#9e86ef] font-semibold" : ""}
            ${theme.ThemeNahida ? " text-green-600 font-semibold" : ""}
            ${theme.ThemeFocalors ? "text-white" : ""}
            `}>
        <p className="text-dimWhite transition ease-all  xs:text-[14px] sx:text-[15px] ss:text-[16px] duration-500 opacity-100 group-hover:opacity-0">
          Characters are primarily obtained by performing Wishes using
          Intertwined Fates or Acquaint Fates.
          <br />
          These Wishing Items can be:
        </p>
        <ul className=" list-disc px-6 text-dimWhite xs:text-[14px] text-inherit sx:text-[15px] ss:text-[16px] opacity-100 transition ease-all duration-500 group-hover:opacity-0">
          <li>Purchased with Primogems.</li>
          <li>Earned from Events and Quests.</li>
          <li>
            Exchanged with Masterless Starglitter Masterless Starglitter ×5 each
            in the Paimon's Bargains shop.
          </li>
          <li>
            Exchanged for a monthly limit with Masterless Stardust Masterless
            Stardust ×75 each in the Paimon's Bargains shop.
          </li>
        </ul>
        <hr className="mt-[45%] mb-[3%]" />
        <span className="mb-[10%] text-left text-dimWhite xs:text-[14px] sx:text-[15px] ss:text-[16px] font-semibold">
          <a href="https://genshin-impact.fandom.com/wiki/Character">
            For More Info
          </a>
        </span>
        </div>
      </motion.div>
    </>
  );
};

export default CharacterTab;
