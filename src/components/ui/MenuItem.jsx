import React from "react";
import { getThemeContainerClasses } from "../../utils/themeUtils";
import { useTheme } from "../ThemeContext";

const MenuItem = ({ 
  children, 
  onClick,
  className = "",
  ...props 
}) => {
  const { theme } = useTheme();
  const themeClasses = getThemeContainerClasses(theme);

  const baseClasses = "w-full py-4 px-8 my-2 rounded-sm hover:border-2 border-2 border-transparent cursor-pointer transition duration-300 ease-in-out";

  return (
    <li
      onClick={onClick}
      className={`${baseClasses} ${themeClasses.hover} ${themeClasses.bg} ${className}`}
      {...props}
    >
      {children}
    </li>
  );
};

export default MenuItem;

