import React, { useState, useEffect, useRef } from "react";
import LOGO from "../assets/index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router-dom";
import { getThemeBackgroundStyle } from "../utils/themeUtils";
import NavLink from "./ui/NavLink";

const REGIONS = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine"];

const NavBar = () => {
  const [showRegionBar, setShowRegionBar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const prevScrollPos = useRef(0);
  const ticking = useRef(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;

          if (currentScrollPos < 250) {
            setShowNavbar(true);
          } else if (prevScrollPos.current > currentScrollPos) {
            setShowNavbar(true);
          } else {
            setShowNavbar(false);
          }

          prevScrollPos.current = currentScrollPos;
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `${showNavbar ? "translate-y-0" : "-translate-y-full"} fixed z-40 w-full top-0 left-0 font-semibold transition-transform duration-300 ease-out backdrop-blur-2xl border-b border-white/6`;

  const backgroundStyle = getThemeBackgroundStyle(theme, {
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  });

  return (
    <div className={navbarClasses} style={backgroundStyle}>
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/GenshinImpactFanPage/" className="z-50 transform-gpu transition duration-200 hover:scale-105">
            <img src={LOGO} alt="GENSHIN" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-3 text-white"> 
            <NavLink to="/GenshinImpactFanPage/characters" className="px-3 py-2 rounded-md transition-colors duration-200 bg-white/6 hover:bg-white/12">
              Characters
            </NavLink>
            <NavLink to="/GenshinImpactFanPage/login" className="px-3 py-2 rounded-md transition-colors duration-200 bg-white/6 hover:bg-white/12">
              Login
            </NavLink>
            <NavLink to="/GenshinImpactFanPage/signup" className="px-3 py-2 rounded-md transition-colors duration-200 bg-gradient-to-tr from-violet-600/30 to-pink-600/20 hover:from-violet-600/40 hover:to-pink-600/30">
              Sign up
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className={`${showRegionBar ? "hidden" : "hidden md:flex"} items-center gap-3 text-sm text-white/90`}>
            {REGIONS.slice(0,3).map((r) => (
              <NavLink key={r} to="#" className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 hover:bg-white/8 transition">
                {r}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={showRegionBar}
            onClick={() => setShowRegionBar((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/40 text-white shadow-md backdrop-blur-md transition hover:bg-white/8"
            aria-label="Toggle regions"
          >
            {showRegionBar ? <UpOutlined /> : <DownOutlined />}
          </button>
        </div>
      </div>

      <div className={`relative overflow-hidden transition-[max-height,opacity] duration-300 ${showRegionBar ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 backdrop-blur-2xl bg-black/55 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            {REGIONS.map((region) => (
              <NavLink
                key={region}
                to="#"
                className="rounded-full border border-white/8 bg-white/4 px-4 py-2 hover:border-white/20 hover:bg-white/10 transition"
              >
                {region}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
