import { createContext, useContext, useState } from "react";

const CardStyleContext = createContext();

export const CardStyleProvider = ({ children }) => {
  const [cardStyle, setCardStyle] = useState("futuristic");

  const cardStyles = [
    { id: "futuristic", name: "Futuristic", icon: "🌌" },
    { id: "glassmorphic", name: "Glassmorphic", icon: "🔮" },
    { id: "minimalist", name: "Minimalist", icon: "✨" },
    { id: "detailed", name: "Detailed", icon: "📋" },
    { id: "neon", name: "Neon Glow", icon: "⚡" },
    { id: "compact", name: "Compact", icon: "📦" },
  ];

  return (
    <CardStyleContext.Provider value={{ cardStyle, setCardStyle, cardStyles }}>
      {children}
    </CardStyleContext.Provider>
  );
};

export const useCardStyle = () => {
  const context = useContext(CardStyleContext);
  if (!context) {
    throw new Error("useCardStyle must be used within CardStyleProvider");
  }
  return context;
};

