import React, { useState, useEffect, createContext, useContext } from "react";
// import jwt_decode from 'jwt-decode';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        ThemeVenti : false,
        ThemeZhongli : false,
        ThemeEi : false,
        ThemeNahida : false,
        ThemeFocalors : false,
        ThemeHome : true
    })
//   const navigate = useNavigate();
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};