import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CharacterTab from "./CharacterTab";
import WeaponTab from "./WeaponTab";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const OutlinedInfo = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (!date) {
      setDay("");
      return;
    }

    const value = new Date(date);
    if (!Number.isNaN(value.getTime())) {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      setDay(days[value.getDay()]);
    } else {
      setDay("");
    }
  }, [date]);

  return (
    <section className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid gap-10"
      >
        <div className="max-w-2xl space-y-8">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Essentials
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Interactive tools that make every page more useful.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300 leading-8">
              The updated interface now includes richer context cards, smoother reveals, and responsive panels for both character and weapon information.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4 text-slate-200">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Fast access</p>
              <p className="mt-3 text-sm leading-6">Jump straight to character and weapon insights without clutter.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4 text-slate-200">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Clear hierarchy</p>
              <p className="mt-3 text-sm leading-6">Bold sectioning keeps the page readable and polished across screens.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4 text-slate-200">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Balanced visuals</p>
              <p className="mt-3 text-sm leading-6">Compact cards reduce wasted vertical space and boost content clarity.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{ y: -2 }}
          className="relative self-start overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_45px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
        >
          <div className="pointer-events-none absolute -left-8 top-8 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-30" />
          <div className="relative grid gap-4">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/90 p-5 shadow-inner shadow-white/5">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Featured panels</span>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xs">
                  <h3 className="text-3xl font-semibold text-white">Character & weapon insights</h3>
                </div>
                <p className="max-w-sm text-sm text-slate-300">A polished visual hub for quick build reference and example gear.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div className="min-h-[26rem] h-full" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
                <CharacterTab visible={true} />
              </motion.div>
              <motion.div className="min-h-[26rem] h-full" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
                <WeaponTab visible={true} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Date to Day Calculator</h3>
          <p className="mt-3 text-slate-400 leading-7">
            Enter a date and instantly see what day of the week it lands on. This tool works cleanly on mobile and desktop.
          </p>
          <div className="mt-8 space-y-4">
            <label className="block text-sm font-medium text-slate-300">Select a date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Result</h3>
          <p className="mt-3 text-slate-400 leading-7">
            The day appears automatically after choosing a date.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center text-2xl font-semibold text-white">
            {day || "No date selected"}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OutlinedInfo;
