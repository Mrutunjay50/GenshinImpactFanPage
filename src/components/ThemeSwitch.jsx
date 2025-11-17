import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdPalette, MdClose } from "react-icons/md";
import ThemeData from "../Constants/ThemeData";
import { useTheme } from "./ThemeContext";
import { getThemeContainerClasses } from "../utils/themeUtils";

const Switch = ({ isOpen, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      className="fixed right-4 bottom-4 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="h-14 w-14 rounded-full backdrop-blur-md bg-black/60 border-2 border-white/30 shadow-2xl flex items-center justify-center text-white text-2xl hover:border-white/50 hover:bg-black/80 transition-all duration-300"
        animate={{
          rotate: isOpen ? 180 : 0,
          boxShadow: isOpen 
            ? "0 0 30px rgba(255,255,255,0.3)" 
            : "0 4px 20px rgba(0,0,0,0.3)"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <MdClose />
            </motion.div>
          ) : (
            <motion.div
              key="palette"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MdPalette />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeClick = (selectedTheme) => {
    // Create a new theme object with all values set to false
    const newTheme = Object.keys(theme).reduce((acc, themeName) => {
      acc[themeName] = false;
      return acc;
    }, {});

    // Set the selected theme to true
    newTheme[selectedTheme] = true;

    // Update the theme
    setTheme(newTheme);
  };

  return (
    <>
      <Switch isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 z-40 backdrop-blur-xl bg-black/70 border-2 border-white/20 rounded-2xl p-6 shadow-2xl min-w-[320px] max-w-[90vw]"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)"
            }}
          >
            <div className="mb-4">
              <h3 className="text-white text-xl font-bold mb-1 flex items-center gap-2">
                <MdPalette className="text-2xl" />
                Choose Theme
              </h3>
              <p className="text-white/60 text-sm">Select your preferred visual style</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {ThemeData.map((item, index) => {
                const isActive = theme[item.theme];
                const themeClasses = getThemeContainerClasses(theme);
                return (
                  <motion.div
                    key={item.theme}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
                    onClick={() => {
                      handleThemeClick(item.theme);
                      setIsOpen(false);
                    }}
                    className={`relative group cursor-pointer transition-all duration-300 ease-in-out border-2 rounded-xl p-4 backdrop-blur-sm ${
                      isActive 
                        ? `${themeClasses.hover} ${themeClasses.bg} border-white/50 shadow-lg scale-[1.02]` 
                        : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                    } hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-lg">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        {/* Color Preview */}
                        <div className="flex gap-1">
                          <div className={`w-4 h-4 rounded-full ${item.lightColor} border border-white/20`}></div>
                          <div className={`w-4 h-4 rounded-full ${item.midColor} border border-white/20`}></div>
                          <div className={`w-4 h-4 rounded-full ${item.darkColor} border border-white/20`}></div>
                        </div>
                        
                        {/* Active Indicator */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              className={`h-3 w-3 ${item.midColor} rounded-full shadow-lg`}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Active Pulse Effect */}
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 ${item.midColor} opacity-20 rounded-xl blur-xl -z-10`}
                        animate={{ 
                          opacity: [0.2, 0.4, 0.2],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitch;
