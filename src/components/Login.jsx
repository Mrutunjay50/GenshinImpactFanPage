import React from "react";
import {
  Liyue,
  Mondstadt16,
  Inazuma3,
  Sumeru6,
  Fontaine_Ori,
  Lumine1,
  Raiden_shogun20,
  Nahida,
  Zhongli,
  Venti_Ori,
  FurinaOri1,
  Lumine0,
} from "../assets";
import { useTheme } from "./ThemeContext";

const Login = () => {
  const { theme } = useTheme();

  return (
    <div
      className=" h-[102vh] flex justify-center items-center"
      style={{
        backgroundImage: theme.ThemeVenti
          ? `url(${Mondstadt16})`
          : theme.ThemeZhongli
          ? `url(${Liyue})`
          : theme.ThemeEi
          ? `url(${Inazuma3})`
          : theme.ThemeNahida
          ? `url(${Sumeru6})`
          : theme.ThemeFocalors
          ? `url(${Fontaine_Ori})`
          : `url(${Lumine1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: theme.ThemeZhongli
          ? "cover"
          : theme.ThemeHome
          ? "cover"
          : "100% auto",
        backgroundAttachment: theme.ThemeZhongli ? "" : "fixed",
        backgroundPosition: theme.ThemeZhongli || theme.ThemeEi ? "" : "center",
      }}
    >
      <div
        className={`h-[70%] w-[80%] ${
          theme.ThemeHome
            ? "hover:border-gray-200 bg-gradient-to-r from-[#1a1a2f] to-[#ffffff4f]"
            : ""
        }
            ${
              theme.ThemeZhongli
                ? "hover:border-yellow-200  bg-gradient-to-r from-[#282724aa] to-[#ffffff4f]"
                : ""
            }
            ${
              theme.ThemeVenti
                ? "hover:border-[#6499fa] bg-gradient-to-r from-[#04261690] to-[#ffffff4f]"
                : ""
            }
            ${
              theme.ThemeEi
                ? "hover:border-[#5b4aa4] bg-gradient-to-r from-[#a888fe4f] to-[#332d44b3]"
                : ""
            }
            ${
              theme.ThemeNahida
                ? "hover:border-[#b1e96d] bg-gradient-to-r from-[#dcf7e14c] to-[#ffffff4f]"
                : ""
            }
            ${
              theme.ThemeFocalors
                ? "hover:border-[#6d9de9] bg-gradient-to-r from-[#2857aa4c] to-[#ffffff4f]"
                : ""
            } relative rounded-md flex flex-row `}
      >
        <div className="w-[50%]  flex justify-center items-center">
          <img
            className={`absolute
          // ${theme.ThemeHome ? "w-[480px] -bottom-2 left-10 z-50" : ""}
            ${theme.ThemeZhongli ? "w-[510px] -bottom-2 left-10 z-50" : ""}
            ${theme.ThemeVenti ? " w-[380px] -bottom-2 left-10 z-50" : ""}
            ${theme.ThemeEi ? "w-[450px] -bottom-2 left-10 z-50" : ""}
            ${theme.ThemeNahida ? " w-[350px] -bottom-2 left-10 z-50" : ""}
            ${theme.ThemeFocalors ? "w-[380px] -bottom-2 left-10 z-50 " : ""}
           transition ease-all duration-300`}
            src={
              theme.ThemeHome
                ? Lumine0
                : theme.ThemeEi
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
        </div>
        <div
          className={` w-[50%] flex flex-col mx-5 my-4 rounded-md ${
            theme.ThemeZhongli
              ? " text-yellow-700 bg-[#282724aa] font-semibold"
              : theme.ThemeHome
              ? " text-[#bfe5f9] bg-[#1a1a2f] font-semibold"
              : theme.ThemeVenti
              ? " text-blue-300 bg-[#04261690] font-semibold"
              : theme.ThemeEi
              ? " text-[#9e86ef] bg-[#1f0b556d] font-semibold"
              : theme.ThemeNahida
              ? " text-green-600 bg-[#dcf7e14c] font-semibold"
              : theme.ThemeFocalors
              ? "text-white bg-[#2857aa4c]"
              : ""
          }`}
        >
          <div className={"text-center my-10 text-[32px] font-semibold "}>
            Login
          </div>
          <input
            className={`mb-10 h-[6vh] mx-10 focus:outline-none rounded-md px-2 text-[20px] font-semibold border-2 ${
              theme.ThemeHome
                ? "border-gray-200 bg-[#1a1a2f9d] hover:bg-[#1a1a2f]"
                : theme.ThemeZhongli
                ? "border-yellow-700 bg-[#2827244d]  "
                : theme.ThemeVenti
                ? "border-[#99b2e4] bg-[#b5ebd73e]"
                : theme.ThemeEi
                ? "border-[#5b4aa4] bg-[#1f0b556d]"
                : theme.ThemeNahida
                ? "border-[#b1e96d] bg-[#dcf7e14c]"
                : theme.ThemeFocalors
                ? "border-[#6d9de9] bg-[#2857aa4c]"
                : ""
            }`}
            type="email"
            name="email"
          />
          <input
            className={`mb-10 h-[6vh] mx-10 focus:outline-none rounded-md px-2 text-[20px] font-semibold border-2 ${
              theme.ThemeHome
                ? "border-gray-200 bg-[#1a1a2f9d] hover:bg-[#1a1a2f]"
                : theme.ThemeZhongli
                ? "border-yellow-700 bg-[#2827244d]  "
                : theme.ThemeVenti
                ? "border-[#99b2e4] bg-[#b5ebd73e]"
                : theme.ThemeEi
                ? "border-[#5b4aa4] bg-[#1f0b556d]"
                : theme.ThemeNahida
                ? "border-[#b1e96d] bg-[#dcf7e14c]"
                : theme.ThemeFocalors
                ? "border-[#6d9de9] bg-[#2857aa4c]"
                : ""
            }`}
            type="password"
            name="password"
          />
          <div className={``}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
