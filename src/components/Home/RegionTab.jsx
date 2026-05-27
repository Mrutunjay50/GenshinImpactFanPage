import React from "react";
import Region_Data from "../../Constants/Region_Data";
import { motion } from "framer-motion";
import NavLink from "../ui/NavLink";

const regionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const RegionData = ({ item, index }) => (
  <motion.article
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={regionVariants}
    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20"
  >
    {/* Background region image (subtle, under gradient) */}
    {item.regionSerenties && item.regionSerenties[0] && (
      <img
        src={item.regionSerenties[0]}
        alt={`${item.nation} background`}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-20"
      />
    )}

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />

    {/* Character preview image that slides in on hover */}
    {item.imgCharacter && (
      <img
        src={item.imgCharacter}
        alt={`${item.nation} character`}
        className="absolute right-4 top-4 h-48 w-auto object-contain opacity-0 translate-x-6 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none"
      />
    )}

    {/* Element icon that appears on hover */}
    {item.elementLogo && (
      <img
        src={item.elementLogo}
        alt={`${item.element} icon`}
        className="absolute right-4 bottom-4 h-12 w-12 opacity-0 group-hover:opacity-100 transition-all duration-400 z-20"
      />
    )}

    <div className="relative z-30 flex h-full flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Region</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{item.nation}</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">
            {item.element}
          </span>
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-300 line-clamp-5">
        {item.description || `Discover the beauty and lore of ${item.nation} in Teyvat.`}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
          Archon: {item.Archon}
        </span>
        <NavLink
          to="/GenshinImpactFanPage/characters"
          className="rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 px-5 py-2 text-sm text-white shadow-lg shadow-indigo-500/10 transition hover:scale-105 hover:bg-white/15"
        >
          View Characters
        </NavLink>
      </div>
    </div>
  </motion.article>
);

const RegionTab = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8 grid gap-3">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Teyvat regions</p>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Explore the seven nations</h2>
        <p className="max-w-3xl text-slate-300 leading-7">
          Every region is now presented with smoother reveal transitions and a responsive card layout that works across mobile, tablet, and desktop.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Region_Data.map((item, index) => (
          <RegionData key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default RegionTab;
