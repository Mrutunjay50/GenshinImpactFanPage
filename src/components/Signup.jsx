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
import { Link } from "react-router-dom";

const Signup = () => {
  const { theme } = useTheme();

  return (
    <div
      className=" h-[102vh] flex justify-center items-center font-mono"
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
        className={`h-[75%] w-[80%] ${
          theme.ThemeHome
            ? "hover:border-gray-200 bg-gradient-to-r from-[#1a1a2f] to-[#ffffff4f]"
            : theme.ThemeZhongli
            ? "hover:border-yellow-200  bg-gradient-to-r from-[#282724aa] to-[#ffffff4f]"
            : theme.ThemeVenti
            ? "hover:border-[#6499fa] bg-gradient-to-r from-[#04261690] to-[#ffffff4f]"
            : theme.ThemeEi
            ? "hover:border-[#5b4aa4] bg-gradient-to-r from-[#a888fe4f] to-[#332d44b3]"
            : theme.ThemeNahida
            ? "hover:border-[#b1e96d] bg-gradient-to-r from-[#dcf7e14c] to-[#ffffff4f]"
            : theme.ThemeFocalors
            ? "hover:border-[#6d9de9] bg-gradient-to-r from-[#2857aa4c] to-[#ffffff4f]"
            : ""
        } relative rounded-md flex flex-row `}
      >
        <div className="w-[50%]  flex justify-center items-center relative">
          <img
            className={`absolute
          // ${
            theme.ThemeHome
              ? "w-[480px] z-50"
              : theme.ThemeZhongli
              ? "w-[510px] z-50"
              : theme.ThemeVenti
              ? " w-[380px] z-50"
              : theme.ThemeEi
              ? "w-[480px] z-50"
              : theme.ThemeNahida
              ? " w-[400px] z-50"
              : theme.ThemeFocalors
              ? "w-[380px] z-50 "
              : ""
          }
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
          className={` w-[50%] flex flex-col mx-12 my-4 rounded-md relative ${
            theme.ThemeZhongli
              ? " text-yellow-700 bg-[#282724aa] font-semibold"
              : theme.ThemeHome
              ? " text-[#bfe5f9] bg-[#1a1a2f7c] font-semibold"
              : theme.ThemeVenti
              ? " text-blue-300 bg-[#04261690] font-semibold"
              : theme.ThemeEi
              ? " text-[#9e86ef] bg-[#1f0b556d] font-semibold"
              : theme.ThemeNahida
              ? " text-[#ffffff] bg-[#1d4d264c] font-semibold"
              : theme.ThemeFocalors
              ? "text-white bg-[#2857aa4c]"
              : ""
          }`}
        >
          <div className={"text-center mt-4 mb-6 text-[32px] font-semibold "}>
            Signup
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
            type="text"
            name="name"
            placeholder="enter your name.."
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
            type="email"
            name="email"
            placeholder="enter your email.."
          />
          <input
            className={`mb-10 h-[6vh] text-inherit mx-10 focus:outline-none rounded-md px-2 text-[20px] font-semibold border-2 ${
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
            placeholder="enter your password.."
          />
          <input
            className={`mb-10 h-[6vh] text-inherit mx-10 focus:outline-none rounded-md px-2 text-[20px] font-semibold border-2 ${
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
            name="confirmpassword"
            placeholder="confirm password.."
          />
          <div className=" flex flex-row-reverse justify-between items-center absolute bottom-5 w-full">
            <div
              className={` h-[6vh] mx-10 cursor-pointer rounded-md px-2 text-[20px] font-semibold flex justify-center items-center w-[20%] ${
                theme.ThemeHome
                  ? " bg-[#1a1a2f]"
                  : theme.ThemeZhongli
                  ? " bg-[#282724d1]"
                  : theme.ThemeVenti
                  ? " bg-[#b5e3eb89]"
                  : theme.ThemeEi
                  ? " bg-[#1f0b55e5]"
                  : theme.ThemeNahida
                  ? " bg-[#dcf7e1c9]"
                  : theme.ThemeFocalors
                  ? " bg-[#2858aae5]"
                  : ""
              }`}
            >
              Signup
            </div>
            <div className="w-[70%] ml-12 group">
              Already Registered!!
              <Link to="/GenshinImpactFanPage/login">
              <u className="cursor-pointer group-hover:text-blue-950 transition  ease-out duration-300">
                login
              </u>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
