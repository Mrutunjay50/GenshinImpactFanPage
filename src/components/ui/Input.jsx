import React from "react";
import { getThemeInputClasses } from "../../utils/themeUtils";
import { useTheme } from "../ThemeContext";

const Input = ({ 
  type = "text", 
  placeholder = "", 
  name, 
  value,
  onChange,
  className = "",
  required = false,
  ...props 
}) => {
  const { theme } = useTheme();
  const themeClasses = getThemeInputClasses(theme);
  const baseClasses = "mb-10 h-[6vh] text-inherit mx-10 backdrop-blur-sm focus:backdrop-blur-md transition-all duration-300 focus:ring-2 focus:ring-opacity-50 focus:scale-[1.02] placeholder:text-white/60";

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${baseClasses} ${themeClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;

