import React from "react";
import { getThemeButtonClasses } from "../../utils/themeUtils";
import { useTheme } from "../ThemeContext";

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary",
  type = "button",
  disabled = false,
  ...props 
}) => {
  const { theme } = useTheme();
  const themeClasses = getThemeButtonClasses(theme);
  
  const baseClasses = "h-[6vh] cursor-pointer rounded-lg px-6 text-[20px] font-semibold flex justify-center items-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
  
  const variantClasses = {
    primary: `${themeClasses} shadow-lg hover:shadow-xl hover:scale-105 active:scale-95`,
    secondary: "bg-transparent border-2 border-white/80 hover:border-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "bg-transparent hover:bg-white/10 backdrop-blur-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
    </button>
  );
};

export default Button;

