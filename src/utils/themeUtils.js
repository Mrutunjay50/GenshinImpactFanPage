import {
  Liyue,
  Mondstadt16,
  Inazuma3,
  Sumeru6,
  Fontaine_Ori,
  Lumine1,
  Home,
} from "../assets";

/**
 * Get background image based on current theme
 */
export const getThemeBackgroundImage = (theme) => {
  if (theme.ThemeVenti) return Mondstadt16;
  if (theme.ThemeZhongli) return Liyue;
  if (theme.ThemeEi) return Inazuma3;
  if (theme.ThemeNahida) return Sumeru6;
  if (theme.ThemeFocalors) return Fontaine_Ori;
  return theme.ThemeHome ? Lumine1 : Home;
};

/**
 * Get background style object based on theme
 */
export const getThemeBackgroundStyle = (theme, options = {}) => {
  const {
    backgroundSize = "cover",
    backgroundAttachment = "fixed",
    backgroundPosition = "center",
  } = options;

  const image = getThemeBackgroundImage(theme);
  const size = theme.ThemeZhongli || theme.ThemeHome ? "cover" : backgroundSize;
  const attachment = theme.ThemeZhongli ? "" : backgroundAttachment;
  const position = theme.ThemeZhongli || theme.ThemeEi ? "" : backgroundPosition;

  return {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: size,
    backgroundAttachment: attachment,
    backgroundPosition: position,
  };
};

/**
 * Get theme-based CSS classes for containers
 */
export const getThemeContainerClasses = (theme) => {
  if (theme.ThemeHome) {
    return {
      hover: "hover:border-gray-200",
      bg: "bg-[#1a1a2f]",
      bgHover: "hover:bg-[#1a1a2f]",
      text: "text-[#bfe5f9]",
      border: "border-gray-200",
    };
  }
  if (theme.ThemeZhongli) {
    return {
      hover: "hover:border-yellow-200",
      bg: "bg-[#282724]",
      bgHover: "hover:bg-[#282724e7]",
      text: "text-yellow-700",
      border: "border-yellow-200",
    };
  }
  if (theme.ThemeVenti) {
    return {
      hover: "hover:border-[#6499fa]",
      bg: "bg-[#04261690]",
      bgHover: "hover:bg-[#235d486b]",
      text: "text-blue-300",
      border: "border-[#99b2e4]",
    };
  }
  if (theme.ThemeEi) {
    return {
      hover: "hover:border-[#5b4aa4]",
      bg: "bg-[#332d44]",
      bgHover: "hover:bg-[#332d44d4]",
      text: "text-[#9e86ef]",
      border: "border-[#5b4aa4]",
    };
  }
  if (theme.ThemeNahida) {
    return {
      hover: "hover:border-[#b1e96d]",
      bg: "bg-[#dcf7e14c]",
      bgHover: "hover:bg-[#328942bd]",
      text: "text-white",
      border: "border-[#b1e96d]",
    };
  }
  if (theme.ThemeFocalors) {
    return {
      hover: "hover:border-[#6d9de9]",
      bg: "bg-[#2857aa4c]",
      bgHover: "hover:bg-[#2858aa8f]",
      text: "text-white",
      border: "border-[#6d9de9]",
    };
  }
  return {
    hover: "hover:border-gray-200",
    bg: "bg-[#1a1a2f]",
    bgHover: "hover:bg-[#1a1a2f]",
    text: "text-white",
    border: "border-gray-200",
  };
};

/**
 * Get theme-based gradient classes
 */
export const getThemeGradientClasses = (theme) => {
  if (theme.ThemeHome) {
    return "bg-gradient-to-r from-[#1a1a2f] to-[#ffffff4f] hover:border-gray-200";
  }
  if (theme.ThemeZhongli) {
    return "bg-gradient-to-r from-[#282724aa] to-[#ffffff4f] hover:border-yellow-200";
  }
  if (theme.ThemeVenti) {
    return "bg-gradient-to-r from-[#04261690] to-[#ffffff4f] hover:border-[#6499fa]";
  }
  if (theme.ThemeEi) {
    return "bg-gradient-to-r from-[#a888fe4f] to-[#332d44b3] hover:border-[#5b4aa4]";
  }
  if (theme.ThemeNahida) {
    return "bg-gradient-to-r from-[#dcf7e14c] to-[#ffffff4f] hover:border-[#b1e96d]";
  }
  if (theme.ThemeFocalors) {
    return "bg-gradient-to-r from-[#2857aa4c] to-[#ffffff4f] hover:border-[#6d9de9]";
  }
  return "bg-gradient-to-r from-[#1a1a2f] to-[#ffffff4f] hover:border-gray-200";
};

/**
 * Get theme-based input classes
 */
export const getThemeInputClasses = (theme) => {
  const baseClasses = "focus:outline-none rounded-md px-2 text-[20px] font-semibold border-2 transition duration-300";
  const themeClasses = getThemeContainerClasses(theme);
  return `${baseClasses} ${themeClasses.border} ${themeClasses.bg} ${themeClasses.bgHover}`;
};

/**
 * Get theme-based button classes
 */
export const getThemeButtonClasses = (theme) => {
  if (theme.ThemeHome) return "bg-[#1a1a2f]";
  if (theme.ThemeZhongli) return "bg-[#282724d1]";
  if (theme.ThemeVenti) return "bg-[#b5e3eb89]";
  if (theme.ThemeEi) return "bg-[#1f0b55e5]";
  if (theme.ThemeNahida) return "bg-[#dcf7e1c9]";
  if (theme.ThemeFocalors) return "bg-[#2858aae5]";
  return "bg-[#1a1a2f]";
};

