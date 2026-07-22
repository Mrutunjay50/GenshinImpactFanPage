import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

// Keep the preloader up at least this long so the reveal animation can finish,
// even if the page finishes loading sooner (e.g. from cache).
const MIN_PRELOADER_TIME = 1800;

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MIN_PRELOADER_TIME - elapsed, 0);
      setTimeout(() => setContentLoaded(true), remaining);
    };

    // Wait until every resource (images, fonts, etc.) is fully loaded.
    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading);
    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#02050b] text-white">
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
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.div
              className="h-14 w-14 rounded-full backdrop-blur-2xl bg-white/10 border border-white/15 shadow-[0_16px_60px_rgba(0,0,0,0.35)] flex items-center justify-center text-white text-2xl transition-all duration-300"
              animate={{
                rotate: isMenu ? 135 : 0,
                boxShadow: isMenu
                  ? "0 0 32px rgba(255,255,255,0.25)"
                  : "0 12px 32px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
            >
              <FcSettings className="text-3xl" />
            </motion.div>
          </motion.div>

          <NavBar />
          <MenuList Menu={isMenu} onClose={() => setIsMenu(false)} />
          <ThemeSwitch />

          <main className="pt-16">
            <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="min-h-[calc(100vh-4rem)]"
                >
                <Routes location={location}>
                  <Route path="/GenshinImpactFanPage" element={<TEYVAT_REGION />} />
                  <Route path="/GenshinImpactFanPage/characters" element={<CharactersView />} />
                  <Route path="/GenshinImpactFanPage/login" element={<Login />} />
                  <Route path="/GenshinImpactFanPage/signup" element={<Signup />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer className="bg-slate-950/90 border-t border-white/10 flex flex-col items-center justify-center text-[#cdc4c4] py-8" />
        </>
      ) : (
        <PreLoader />
      )}
    </div>
  );
};

export default App;
