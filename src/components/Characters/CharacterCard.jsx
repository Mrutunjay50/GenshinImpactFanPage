import { useState } from "react";
import { useCardStyle } from "../../contexts/CardStyleContext";
import {
  FuturisticCard,
  GlassmorphicCard,
  MinimalistCard,
  DetailedCard,
  NeonGlowCard,
  CompactCard,
} from "./CardVariations";

const CharacterCard = ({ character, index }) => {
  const { cardStyle } = useCardStyle();
  const [isHovered, setIsHovered] = useState(false);

  const cardProps = {
    character,
    index,
    isHovered,
    setIsHovered,
  };

  switch (cardStyle) {
    case "futuristic":
      return <FuturisticCard {...cardProps} />;
    case "glassmorphic":
      return <GlassmorphicCard {...cardProps} />;
    case "minimalist":
      return <MinimalistCard {...cardProps} />;
    case "detailed":
      return <DetailedCard {...cardProps} />;
    case "neon":
      return <NeonGlowCard {...cardProps} />;
    case "compact":
      return <CompactCard {...cardProps} />;
    default:
      return <FuturisticCard {...cardProps} />;
  }
};

export default CharacterCard;

