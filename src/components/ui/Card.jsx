import { getThemeContainerClasses } from "../../utils/themeUtils";
import { useTheme } from "../ThemeContext";

const Card = ({ 
  children, 
  className = "", 
  hover = true,
  opacity = "default",
  glassmorphism = false,
  ...props 
}) => {
  const { theme } = useTheme();
  const themeClasses = getThemeContainerClasses(theme);
  
  const baseClasses = "border-2 border-transparent rounded-lg transition-all duration-300 ease-out";
  const opacityClasses = {
    default: "opacity-80 hover:opacity-100",
    full: "opacity-100",
    low: "opacity-60 hover:opacity-80",
  };

  const hoverClasses = hover ? `${themeClasses.hover} hover:shadow-2xl hover:scale-[1.02]` : "";
  const bgClasses = glassmorphism 
    ? `${themeClasses.bg} backdrop-blur-md bg-opacity-80` 
    : themeClasses.bg;
  
  const shadowClasses = "shadow-lg hover:shadow-2xl";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${bgClasses} ${opacityClasses[opacity]} ${shadowClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

