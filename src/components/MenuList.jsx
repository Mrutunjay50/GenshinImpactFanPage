import React from "react";
import MenuItem from "./ui/MenuItem";
import { motion } from "framer-motion";

const MENU_ITEMS = [
  "Teyvat",
  "About Game",
  "Itinerary",
  "Manga",
  "Hoyolab",
  "SocialPage",
  "Characters",
];

const MenuList = ({ Menu }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        x: Menu ? 0 : -400
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed z-10 backdrop-blur-md bg-black/40 border-r border-white/10 h-[100vh] w-[250px] px-2 py-[13vh] shadow-2xl"
    >
      <ul className="list-none flex flex-col justify-center items-center text-[#ffffff] font-semibold">
        {MENU_ITEMS.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: Menu ? 1 : 0,
              x: Menu ? 0 : -20
            }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            <MenuItem>{item}</MenuItem>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuList;
