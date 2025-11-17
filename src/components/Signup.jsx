import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundImage from "./ui/BackgroundImage";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { getThemeGradientClasses, getThemeContainerClasses } from "../utils/themeUtils";
import { getThemeCharacterImage, getThemeCharacterWidth } from "../utils/characterImages";

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

  const themeClasses = getThemeContainerClasses(theme);
  const gradientClasses = getThemeGradientClasses(theme);
  const characterImage = getThemeCharacterImage(theme);
  const characterWidth = getThemeCharacterWidth(theme);

  return (
    <BackgroundImage
      className="h-[102vh] flex justify-center items-center font-mono"
      backgroundOptions={{
        backgroundSize: theme.ThemeZhongli || theme.ThemeHome ? "cover" : "100% auto",
        backgroundAttachment: theme.ThemeZhongli ? "scroll" : "fixed",
        backgroundPosition: theme.ThemeZhongli || theme.ThemeEi ? "initial" : "center",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className={`h-[75%] w-[80%] mt-10 ${gradientClasses} relative rounded-2xl flex flex-row backdrop-blur-sm shadow-2xl border border-white/10`}
      >
        <div className="w-[50%] flex justify-center items-center relative">
          <img
            className={`absolute ${characterWidth} z-50 transition ease-all duration-300`}
            src={characterImage}
            alt="Character"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-[50%] flex flex-col mx-12 my-4 rounded-md relative ${themeClasses.text} ${themeClasses.bg} font-semibold`}
        >
          <div className="text-center mt-4 mb-6 text-[32px] font-semibold">
            Signup
          </div>
          <Input
            type="text"
            name="name"
            placeholder="enter your name.."
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="enter your email.."
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="enter your password.."
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm password.."
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="flex flex-row-reverse justify-between items-center absolute bottom-5 w-full">
            <Button type="submit" className="mx-10 w-[20%]">
              Signup
            </Button>
            <div className="w-[70%] ml-12 group">
              Already Registered!!{" "}
              <Link to="/GenshinImpactFanPage/login">
                <u className="cursor-pointer group-hover:text-blue-950 transition ease-out duration-300">
                  login
                </u>
              </Link>
            </div>
          </div>
        </form>
      </motion.div>
    </BackgroundImage>
  );
};

export default Signup;
