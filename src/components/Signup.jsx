import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundImage from "./ui/BackgroundImage";
import { getThemeCharacterImage } from "../utils/characterImages";
import { getThemeAccent } from "../utils/themeUtils";

const Signup = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup:", formData);
  };

  const characterImage = getThemeCharacterImage(theme);
  const accent = getThemeAccent(theme);

  const inputClasses = `w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 transition focus:bg-white/10 focus:outline-none focus:ring-2 ${accent.focus}`;

  return (
    <BackgroundImage
      className="relative min-h-screen flex justify-center items-center px-4 py-10"
      backgroundOptions={{
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Dark wash so the card always reads clearly over any theme background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.9, bounce: 0.25 }}
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      >
        <div className="grid md:grid-cols-2">
          {/* Character showcase */}
          <div className={`relative hidden min-h-[600px] items-end justify-center overflow-hidden bg-gradient-to-b ${accent.panel} md:flex`}>
            <div className={`pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full ${accent.glow1} blur-3xl`} />
            <div className={`pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full ${accent.glow2} blur-3xl`} />
            <motion.img
              key={characterImage}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              src={characterImage}
              alt="Character"
              className="relative z-10 h-[95%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
            />
          </div>

          {/* Form */}
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Join the journey
              </p>
              <h1 className="text-4xl font-semibold text-white">Create account</h1>
              <p className="text-sm text-slate-400">
                Begin your adventure across Teyvat.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Traveler"
                  className={inputClasses}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@teyvat.com"
                  className={inputClasses}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className={inputClasses}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Confirm password
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className={inputClasses}
                />
              </label>

              <button
                type="submit"
                className={`mt-2 w-full rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] ${accent.button}`}
              >
                Signup
              </button>
            </form>

            <p className="text-center text-sm text-slate-400">
              Already registered?{" "}
              <Link
                to="/GenshinImpactFanPage/login"
                className={`font-semibold underline-offset-4 transition hover:underline ${accent.link}`}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </BackgroundImage>
  );
};

export default Signup;
