import React from "react";
import { getThemeBackgroundStyle } from "../../utils/themeUtils";
import { useTheme } from "../ThemeContext";

const BackgroundImage = ({ 
  children, 
  className = "",
  backgroundOptions = {},
  ...props 
}) => {
  const { theme } = useTheme();
  const backgroundStyle = getThemeBackgroundStyle(theme, backgroundOptions);

  return (
    <div
      className={className}
      style={backgroundStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;

