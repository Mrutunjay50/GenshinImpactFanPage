import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import NavBar from "./components/NavBar";
import TEYVAT_REGION from "./components/Home/TEYVAT_REGION";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
import MenuList from "./components/MenuList";
import ThemeSwitch from "./components/ThemeSwitch";

const PRELOADER_DELAY = 3000;

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const contentLoadTimer = setTimeout(() => {
      setContentLoaded(true);
    }, PRELOADER_DELAY);

    return () => {
      clearTimeout(contentLoadTimer);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <div className="w-full relative min-h-[100vh]">
      {contentLoaded ? (
        <>
          <FcSettings
            className={`text-[52px] fixed left-2 bottom-0 z-50 cursor-pointer origin-center transition duration-300 ease-in-out ${
              isMenu ? "rotate-90" : "-rotate-90"
            }`}
            onClick={handleMenuToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleMenuToggle();
              }
            }}
          />
          <NavBar />
          <MenuList Menu={isMenu} />
          <ThemeSwitch />
          <Routes>
            <Route path="/GenshinImpactFanPage" element={<TEYVAT_REGION />} />
            <Route path="/GenshinImpactFanPage/login" element={<Login />} />
            <Route path="/GenshinImpactFanPage/signup" element={<Signup />} />
          </Routes>
          <Footer className="bg-black flex flex-col items-center justify-center text-[#cdc4c4] h-[120px] absolute w-full -bottom-28" />
        </>
      ) : (
        <PreLoader />
      )}
    </div>
  );
};

export default App;
