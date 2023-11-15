import React from "react";
import { useTheme } from "./ThemeContext";

const MenuList = ({ Menu }) => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`fixed z-10 bg-[#d7d3d300] h-[100vh] w-[250px] px-2 py-[13vh] transition duration-500 ease-in-out ${
          Menu ? "translate-x-0" : "-translate-x-[100vh]"
        }`}
      >
        <ul className=" list-none flex flex-col justify-center items-center text-[#ffffff] font-semibold">
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            Teyvat
          </li>
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            About Game
          </li>
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            Itinerary
          </li>
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            Manga
          </li>
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            Hoyolab
          </li>
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            SocialPage
          </li>
          <li
            className={` w-full py-4 px-8 my-2 ${
              theme.ThemeZhongli ? "hover:border-yellow-200 bg-[#2827244d]" : ""
            }
            ${theme.ThemeVenti ? "hover:border-[#99b2e4] bg-[#b5ebd73e]" : ""}
            ${theme.ThemeHome ? "hover:border-gray-200 bg-[#b5ebd73e]" : ""}
            ${theme.ThemeEi ? "hover:border-[#5b4aa4] bg-[#332d4467]" : ""}
            ${theme.ThemeNahida ? "hover:border-[#b1e96d] bg-[#dcf7e14c]" : ""}
            ${
              theme.ThemeFocalors ? "hover:border-[#6d9de9] bg-[#2857aa4c]" : ""
            } rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out`}
          >
            Characters
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuList;
