import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TEYVAT_REGION from "./components/Home/TEYVAT_REGION";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
import { FcSettings } from "react-icons/fc";
import MenuList from "./components/MenuList";
import ThemeSwitch from "./components/ThemeSwitch";

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    // Simulate content loading with a setTimeout
    const delay = 3000; // Adjust the delay time as needed
    const contentLoadTimer = setTimeout(() => {
      // Set contentLoaded to true after the delay
      setContentLoaded(true);
    }, delay);

    return () => {
      // Clear the timer if the component unmounts before the delay completes
      clearTimeout(contentLoadTimer);
    };
  }, []);
  return (
    <div className="w-full relative min-h-[100vh]">
      {contentLoaded ? (
        <>
          <FcSettings className={`text-[52px] fixed left-2 bottom-0 z-50 cursor-pointer origin-center transition duration-300 ease-in-out  ${isMenu ? "rotate-90" : "-rotate-90"}`} onClick={() => setIsMenu(!isMenu)}/>
          <NavBar/>
          <MenuList Menu={isMenu}/>
          <ThemeSwitch/>
          <Routes>
            <Route path="/GenshinImpactFanPage"  element={<TEYVAT_REGION />} />
            
            <Route path="/GenshinImpactFanPage/login" element={<Login/>}/>
            <Route path="/GenshinImpactFanPage/signup" element={<Signup/>}/>
          </Routes>
          <Footer className={' bg-black flex flex-col items-center justify-center text-[#cdc4c4] h-[120px] absolute w-full -bottom-28'}/>
        </>
      ) : (
        <PreLoader />
      )}
    </div>
  );
};

export default App;
