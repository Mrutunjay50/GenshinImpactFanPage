import React, { useState } from "react";
import { Paimon } from "../../assets";
import { motion } from "framer-motion";
import LOGO from "../../assets";
import { useTheme } from "../ThemeContext";
import BackgroundImage from "../ui/BackgroundImage";
import Card from "../ui/Card";
import NavLink from "../ui/NavLink";
import { getThemeContainerClasses } from "../../utils/themeUtils";
import OutlinedInfo from "./OutlinedInfo";
import RegionTab from "./RegionTab";

const Teyvat_Region = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { theme } = useTheme();
  const themeClasses = getThemeContainerClasses(theme);

  return (
    <BackgroundImage
      className="relative min-h-screen overflow-hidden bg-[#090802] px-4 pb-16 pt-24 sm:px-6 lg:px-8"
      backgroundOptions={{
        backgroundSize: theme.ThemeZhongli || theme.ThemeHome ? "cover" : "100% auto",
        backgroundAttachment: theme.ThemeZhongli ? "scroll" : "fixed",
        backgroundPosition: theme.ThemeZhongli || theme.ThemeEi ? "initial" : "center",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.25 }}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] items-center"
        >
          <Card
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            opacity="default"
            glassmorphism={true}
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover Teyvat in a smoother, richer fan experience.
              </h1>
              <p className="max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Explore beautiful regions, meet legendary characters, and enjoy fluid page animations across the whole fan page.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-white/5">
                  <h2 className="text-sm uppercase tracking-[0.35em] text-slate-300">Immersive world</h2>
                  <p className="mt-2 text-sm text-slate-200">Smooth transitions and clean layout let you focus on the lore.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-white/5">
                  <h2 className="text-sm uppercase tracking-[0.35em] text-slate-300">Responsive UI</h2>
                  <p className="mt-2 text-sm text-slate-200">Improved readability, buttons, and modern spacing for all screen sizes.</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent opacity-90" />

            <motion.div
              className="absolute right-4 top-6 rounded-3xl border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              onMouseEnter={() => setShowMessage(true)}
              onMouseLeave={() => setShowMessage(false)}
            >
              <div className="flex items-center gap-3">
                <img src={Paimon} alt="Paimon" className="h-14 w-14 rounded-full border border-white/10" />
                <div>
                  <p className="text-sm font-semibold text-white">Paimon</p>
                  <p className="text-xs text-slate-300">Teyvat guide</p>
                </div>
              </div>
              <motion.div
                animate={{ opacity: showMessage ? 1 : 0, y: showMessage ? 0 : 10 }}
                transition={{ duration: 0.25 }}
                className="mt-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-xs text-slate-100"
              >
                Hello there! I am your full-time Teyvat guide.
              </motion.div>
            </motion.div>
          </Card>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-2xl text-rose-300">✨</span>
              <div>
                <h2 className="text-xl font-semibold text-white">Why this fan page?</h2>
                <p className="text-sm text-slate-300">A polished, modern take on the Genshin Impact world with better flow and clearer navigation.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <h3 className="text-base font-semibold text-white">Crisp animations</h3>
                <p className="mt-2 text-sm text-slate-300">Every panel and page feels natural with subtle motion and smooth fade transitions.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <h3 className="text-base font-semibold text-white">Organized content</h3>
                <p className="mt-2 text-sm text-slate-300">Regions, characters, and account pages are easier to scan and use.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <h3 className="text-base font-semibold text-white">Modern polish</h3>
                <p className="mt-2 text-sm text-slate-300">Updated visual hierarchy, spacing, and glass effects for a premium feel.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <div className="mx-auto mt-16 max-w-7xl px-2 sm:px-0">
          <OutlinedInfo />
        </div>

        <div className="mt-16">
          <RegionTab />
        </div>

        <motion.div
          className="mt-20 flex flex-col items-center gap-6 text-center text-slate-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={LOGO}
            alt="GENSHIN"
            className="mx-auto h-20 w-auto object-contain drop-shadow-2xl"
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink
              to="#about"
              className="rounded-3xl border border-white/15 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/15"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              About Me
            </NavLink>
            <NavLink
              to="#contact"
              className="rounded-3xl border border-white/15 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/15"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Contact Me
            </NavLink>
          </div>
        </motion.div>
      </div>
    </BackgroundImage>
  );
};

export default Teyvat_Region;
