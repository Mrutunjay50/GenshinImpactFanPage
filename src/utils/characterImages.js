import {
  Lumine0,
  Raiden_shogun20,
  Zhongli,
  Venti_Ori,
  Nahida,
  FurinaOri1,
} from "../assets";

/**
 * Get character image based on current theme
 */
export const getThemeCharacterImage = (theme) => {
  if (theme.ThemeHome) return Lumine0;
  if (theme.ThemeEi) return Raiden_shogun20;
  if (theme.ThemeZhongli) return Zhongli;
  if (theme.ThemeVenti) return Venti_Ori;
  if (theme.ThemeNahida) return Nahida;
  if (theme.ThemeFocalors) return FurinaOri1;
  return Lumine0;
};

/**
 * Get character image width based on theme
 */
export const getThemeCharacterWidth = (theme) => {
  if (theme.ThemeHome) return "w-[480px]";
  if (theme.ThemeZhongli) return "w-[510px]";
  if (theme.ThemeVenti) return "w-[380px]";
  if (theme.ThemeEi) return "w-[480px]";
  if (theme.ThemeNahida) return "w-[400px]";
  if (theme.ThemeFocalors) return "w-[380px]";
  return "w-[480px]";
};

