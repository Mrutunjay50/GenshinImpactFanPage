import React from "react";
import { HoYo } from "../assets/index";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`${className} w-full`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center text-white/70 sm:px-6 lg:px-8">
        <img
          src={HoYo}
          alt="HoYoVerse"
          className="h-10 w-auto object-contain"
        />
        <span className="text-sm text-white/60">
          Copyright © Muraoka_Genshin. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;