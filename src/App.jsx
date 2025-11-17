import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { FcSettings } from "react-icons/fc";
import NavBar from "./components/NavBar";
import TEYVAT_REGION from "./components/Home/TEYVAT_REGION";
import CharactersView from "./components/Characters/CharactersView";
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
          <motion.div
            className="fixed left-4 bottom-4 z-50 cursor-pointer"
            onClick={handleMenuToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleMenuToggle();
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="h-14 w-14 rounded-full backdrop-blur-md bg-black/60 border-2 border-white/30 shadow-2xl flex items-center justify-center text-white text-2xl hover:border-white/50 hover:bg-black/80 transition-all duration-300"
              animate={{
                rotate: isMenu ? 90 : 0,
                boxShadow: isMenu 
                  ? "0 0 30px rgba(255,255,255,0.3)" 
                  : "0 4px 20px rgba(0,0,0,0.3)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <FcSettings className="text-3xl" />
            </motion.div>
          </motion.div>
          <NavBar />
          <MenuList Menu={isMenu} onClose={() => setIsMenu(false)} />
          <ThemeSwitch />
          <Routes>
            <Route path="/GenshinImpactFanPage" element={<TEYVAT_REGION />} />
            <Route path="/GenshinImpactFanPage/characters" element={<CharactersView />} />
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
