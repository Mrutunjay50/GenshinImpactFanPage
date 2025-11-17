import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MdHome, 
  MdInfo, 
  MdEvent, 
  MdMenuBook, 
  MdLanguage, 
  MdPeople,
  MdPerson
} from "react-icons/md";
const MENU_ITEMS = [
  { name: "Teyvat", path: "/GenshinImpactFanPage", icon: MdHome },
  { name: "Characters", path: "/GenshinImpactFanPage/characters", icon: MdPerson, highlight: true },
  { name: "About Game", path: "#", icon: MdInfo },
  { name: "Itinerary", path: "#", icon: MdEvent },
  { name: "Manga", path: "#", icon: MdMenuBook },
  { name: "Hoyolab", path: "#", icon: MdLanguage },
  { name: "SocialPage", path: "#", icon: MdPeople },
];

const MenuList = ({ Menu, onClose }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {Menu && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9]"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed z-10 backdrop-blur-xl bg-black/70 border-r-2 border-white/20 h-[100vh] w-[320px] shadow-2xl"
            style={{
              boxShadow: "4px 0 32px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)"
            }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <h2 className="text-white text-2xl font-bold mb-1">Navigation</h2>
              <p className="text-white/60 text-sm">Explore Teyvat</p>
            </div>

            {/* Menu Items */}
            <ul className="list-none flex flex-col px-4 py-6 gap-2 overflow-y-auto h-[calc(100vh-120px)]">
              {MENU_ITEMS.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                const isHighlighted = item.highlight;
                
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: Menu ? 1 : 0,
                      x: Menu ? 0 : -30
                    }}
                    transition={{ 
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="w-full"
                  >
                    <Link 
                      to={item.path} 
                      className="block"
                      onClick={onClose}
                    >
                      <motion.div
                        className={`
                          relative group flex items-center gap-4 px-5 py-4 rounded-xl
                          transition-all duration-300 ease-in-out
                          ${isActive 
                            ? "bg-white/20 border-2 border-white/40 shadow-lg scale-[1.02]" 
                            : isHighlighted
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/30 hover:border-yellow-400/50"
                            : "bg-white/5 border-2 border-transparent hover:border-white/20 hover:bg-white/10"
                          }
                        `}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Icon */}
                        <div className={`
                          text-2xl transition-colors duration-300
                          ${isActive ? "text-white" : isHighlighted ? "text-yellow-300" : "text-white/70 group-hover:text-white"}
                        `}>
                          <Icon />
                        </div>
                        
                        {/* Label */}
                        <span className={`
                          font-semibold text-lg flex-1
                          ${isActive ? "text-white" : isHighlighted ? "text-yellow-200" : "text-white/80 group-hover:text-white"}
                        `}>
                          {item.name}
                        </span>

                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}

                        {/* Highlight Badge */}
                        {isHighlighted && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.08 + 0.3 }}
                            className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                          >
                            NEW
                          </motion.div>
                        )}

                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </motion.div>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/40">
              <p className="text-white/40 text-xs text-center">
                Genshin Impact Fan Page
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuList;
