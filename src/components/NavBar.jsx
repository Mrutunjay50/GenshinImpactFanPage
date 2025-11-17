import React, { useState, useEffect } from "react";
import LOGO from "../assets/index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router-dom";
import { getThemeBackgroundStyle } from "../utils/themeUtils";
import NavLink from "./ui/NavLink";

const REGIONS = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine"];

const NavBar = () => {
  const [showRegionBar, setShowRegionBar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const { theme } = useTheme();

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

  const navbarClasses = `${
    showNavbar
      ? "translate-y-0"
      : "-translate-y-full"
  } fixed z-10 w-full top-0 font-semibold h-[13vh] transition ease-in-out transform duration-300 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg`;

  const backgroundStyle = getThemeBackgroundStyle(theme, {
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  });

  return (
    <div className={navbarClasses} style={backgroundStyle}>
      <div className="navbar m-0 h-[13vh] flex flex-row justify-between items-center relative">
        <Link to="/GenshinImpactFanPage/" className="z-50 hover:scale-105 transition-transform duration-300">
          <img
            src={LOGO}
            alt="GENSHIN"
            className="xs:h-[80px] ss:h-[50px] sm:h-[100px] xs:w-[160px] ss:w-[100px] sm:w-[180px] ml-4 drop-shadow-lg"
          />
        </Link>

        <ul className="flex flex-row justify-center items-center text-white mr-4 z-10">
          <li className="xs:mx-1 sm:mx-5">
            <NavLink to="/GenshinImpactFanPage/characters" className="backdrop-blur-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">
              Characters
            </NavLink>
          </li>
          <li className="xs:mx-1 sm:mx-5">
            <NavLink to="/GenshinImpactFanPage/login" className="backdrop-blur-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">
              Login
            </NavLink>
          </li>
          <li className="xs:mx-1 sm:mx-5">
            <NavLink to="/GenshinImpactFanPage/signup" className="backdrop-blur-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">
              Sign up
            </NavLink>
          </li>
        </ul>

        <div
          className="w-[20%] absolute z-20 right-[40%] bottom-1 flex items-center justify-center transition-all duration-300 cursor-pointer"
          onClick={() => setShowRegionBar(!showRegionBar)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowRegionBar(!showRegionBar);
            }
          }}
        >
          {showRegionBar ? (
            <UpOutlined style={{ color: "#ffffff" }} />
          ) : (
            <DownOutlined style={{ color: "#ffffff" }} />
          )}
        </div>

        <div
          className={`transition-all duration-300 ${
            showRegionBar ? "opacity-100" : "opacity-0 -translate-y-6"
          } m-0 absolute w-[100%] h-[13vh] flex flex-row px-4 justify-center items-center backdrop-blur-md bg-black/40`}
          style={backgroundStyle}
        >
          <ul className="flex-row flex justify-center items-center text-white">
            {REGIONS.map((region, index) => (
              <li key={index} className="xs:mx-1 sm:mx-5">
                <NavLink to="#" className="text-white backdrop-blur-sm bg-white/5 hover:bg-white/15 px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105">
                  {region}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
