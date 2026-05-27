import React from "react";
import { motion } from "framer-motion";
import {
  EngulfingLightning,
  FloatingDreams,
  Vortex,
  Elegy,
  AetherSword,
  TranquilWaters,
} from "../../assets";
import { useTheme } from "../ThemeContext";

const WeaponTab = ({ visible }) => {
  const { theme } = useTheme();

  const imageSrc = theme.ThemeZhongli
    ? Vortex
    : theme.ThemeVenti
    ? Elegy
    : theme.ThemeEi
    ? EngulfingLightning
    : theme.ThemeNahida
    ? FloatingDreams
    : theme.ThemeFocalors
    ? TranquilWaters
    : AetherSword;

  const title = theme.ThemeZhongli
    ? "Vortex"
    : theme.ThemeVenti
    ? "Elegy"
    : theme.ThemeEi
    ? "Engulfing Lightning"
    : theme.ThemeNahida
    ? "Floating Dreams"
    : theme.ThemeFocalors
    ? "Tranquil Waters"
    : "Aether Sword";

  const accent = theme.ThemeZhongli
    ? "text-yellow-300"
    : theme.ThemeVenti
    ? "text-sky-300"
    : theme.ThemeEi
    ? "text-violet-300"
    : theme.ThemeNahida
    ? "text-emerald-300"
    : theme.ThemeFocalors
    ? "text-cyan-200"
    : "text-slate-100";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_35px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-slate-950/90 min-h-[26rem] h-full"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Weapon overview</span>
          <h3 className="mt-3 text-3xl font-semibold text-white">How weapons impact build</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200">
          Gear systems
        </span>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="text-slate-300 leading-7">
            Weapons define a character's base attack, secondary stat, and passives. Choosing the right weapon is essential for maximizing role performance.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-300">
            <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">Weapon rarity and refinement shape their stat growth and ability power.</li>
            <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">Signature weapons often grant strong set bonuses and unique effects.</li>
            <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">Flexible weapon builds help characters adapt to team composition and content.</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-visible rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4 shadow-lg min-h-[18rem] flex items-end justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <img
            src={imageSrc}
            alt={title}
            className="absolute left-1/2 bottom-14 -translate-x-1/2 -translate-y-4 h-[420px] w-auto max-w-none object-contain transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-300">Featured weapon</p>
            <h4 className={`mt-2 text-2xl font-semibold ${accent}`}>{title}</h4>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeaponTab;
