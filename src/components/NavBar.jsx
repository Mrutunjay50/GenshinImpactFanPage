import React, { useState, useEffect } from "react";
import LOGO, { WindBlume, Liyue, Inazuma3, Sumeru6, Fontaine_Ori,Home } from "../assets/index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showRegionBar, setShowRegionBar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const {theme, setTheme} = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 300) {
        setShowNavbar(true);
      } else if (prevScrollPos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <div
      className={`${
        showNavbar
          ? " transition ease-in-out translate-y-0 transform duration-300"
          : "-translate-y-full transition transform ease-in-out duration-300"
      } fixed z-10 w-full top-0 font-semibold bg-[#5a227450] h-[13vh]`}
      style={{
        backgroundImage: theme.ThemeVenti
          ? ``
          : theme.ThemeZhongli
          ? `url(${Liyue})`
          : theme.ThemeEi
          ? `url(${""})`
          : theme.ThemeNahida
          ? `url(${Sumeru6})`
          : theme.ThemeFocalors
          ? `url(${Fontaine_Ori})`
          : `url()`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="navbar m-0 h-[13vh] flex flex-row  justify-between items-center relative">
        <Link to="/GenshinImpactFanPage/"  className="z-50">
        <img
          src={LOGO}
          alt="GENSHIN"
          className=" xs:h-[80px] ss:h-[50px] sm:h-[100px] xs:w-[160px] ss:w-[100px] sm:w-[180px] ml-4"
        />
        </Link>

          <ul className=" flex flex-row justify-center items-center text-white mr-4 z-10">
          <Link to="/GenshinImpactFanPage/login">
          <li className="xs:mx-1 sm:mx-5 hover:text-[#e7dc36] cursor-pointer border-[1px] border-transparent transition ease-in-out duration-300 hover:border-white  px-2 py-1 rounded-md">
            Login
          </li>
          </Link>
          <Link to="/GenshinImpactFanPage/signup">
          <li className="xs:mx-1 sm:mx-5 hover:text-[#e7dc36] cursor-pointer border-[1px] border-transparent transition ease-in-out duration-300 hover:border-white  px-2 py-1 rounded-md">
            Sign up
          </li>
          </Link>
        </ul>

        <div
          className=" w-[20%] absolute z-20 right-[40%] bottom-1 flex items-center justify-center transition-all duration-300"
          onClick={() => setShowRegionBar(!showRegionBar)}
        >
          {showRegionBar ? (
            <UpOutlined
              style={{ color: "#ffffff" }}
              className="cursor-pointer"
            />
          ) : (
            <DownOutlined
              className="cursor-pointer"
              style={{ color: "#ffffff" }}
            />
          )}
        </div>
        <div
          className={`transition-all duration-300 ${
            showRegionBar ? "opacity-100 " : "opacity-0 -translate-y-6"
          } m-0 absolute w-[100%] h-[13vh] flex flex-row px-4 justify-center items-center`}

          style={{
            backgroundImage: theme.ThemeVenti
          ? ``
          : theme.ThemeZhongli
          ? `url(${Liyue})`
          : theme.ThemeEi
          ? `url(${Inazuma3})`
          : theme.ThemeNahida
          ? `url(${Sumeru6})`
          : theme.ThemeFocalors
          ? `url(${Fontaine_Ori})`
          : `url(${Home})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <ul className=" flex-row flex justify-center items-center text-white ">
          {["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine"].map((item, index) => (
            <li className="xs:mx-1 sm:mx-5 hover:text-[#e7dc36] cursor-pointer border-[1px] border-transparent transition ease-in-out duration-300 hover:border-white  px-2 py-1 rounded-md">
              {item}
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
