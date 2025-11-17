import { useState } from "react";
import {
  Element_Anemo,
  Element_Cryo,
  Element_Dendro,
  Element_Electro,
  Element_Geo,
  Element_Hydro,
  Element_Pyro,
  Lumine0,
} from "../../assets";

const elementIconMap = {
  Anemo: Element_Anemo,
  Cryo: Element_Cryo,
  Dendro: Element_Dendro,
  Electro: Element_Electro,
  Geo: Element_Geo,
  Hydro: Element_Hydro,
  Pyro: Element_Pyro,
};

const elementColorMap = {
  Anemo: {
    glow: "rgba(16, 185, 129, 0.3)",
    border: "rgba(16, 185, 129, 0.4)",
    accent: "rgb(16, 185, 129)",
  },
  Cryo: {
    glow: "rgba(6, 182, 212, 0.3)",
    border: "rgba(6, 182, 212, 0.4)",
    accent: "rgb(6, 182, 212)",
  },
  Dendro: {
    glow: "rgba(132, 204, 22, 0.3)",
    border: "rgba(132, 204, 22, 0.4)",
    accent: "rgb(132, 204, 22)",
  },
  Electro: {
    glow: "rgba(168, 85, 247, 0.3)",
    border: "rgba(168, 85, 247, 0.4)",
    accent: "rgb(168, 85, 247)",
  },
  Geo: {
    glow: "rgba(234, 179, 8, 0.3)",
    border: "rgba(234, 179, 8, 0.4)",
    accent: "rgb(234, 179, 8)",
  },
  Hydro: {
    glow: "rgba(59, 130, 246, 0.3)",
    border: "rgba(59, 130, 246, 0.4)",
    accent: "rgb(59, 130, 246)",
  },
  Pyro: {
    glow: "rgba(239, 68, 68, 0.3)",
    border: "rgba(239, 68, 68, 0.4)",
    accent: "rgb(239, 68, 68)",
  },
};

const CharacterCard = ({ character, index }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[480px] rounded-xl overflow-hidden bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm border border-white/10"
      style={{
        boxShadow: isHovered 
          ? `0 0 30px ${elementStyle.glow}, 0 8px 32px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: isHovered ? "translateY(-15px)" : "translateY(0)",
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
        willChange: "transform",
      }}
    >
      {/* Futuristic border glow */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-400"
        style={{
          border: `1px solid ${elementStyle.border}`,
          opacity: isHovered ? 1 : 0.3,
        }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 h-12 w-px bg-gradient-to-t from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Character Image with minimal overlay */}
      <div className="relative w-full h-[68%] overflow-hidden">
        <img
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={handleImageError}
          className={`w-full h-full object-cover object-center transition-transform duration-600 ease-out ${
            isHovered ? "scale-108" : "scale-100"
          }`}
        />
        {/* Minimal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Subtle scan line effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent ${
            isHovered ? "animate-scan-line" : ""
          }`}
        />
      </div>

      {/* Content Section - Minimalist Design */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/95 to-transparent">
        {/* Character Name - Futuristic Typography */}
        <div
          className={`flex items-center justify-between mb-4 transition-transform duration-300 ${
            isHovered ? "translate-x-1" : "translate-x-0"
          }`}
        >
          <h3 
            className="text-white font-light text-2xl tracking-wider uppercase"
            style={{
              textShadow: `0 0 20px ${elementStyle.glow}, 0 2px 10px rgba(0,0,0,0.8)`,
              letterSpacing: "0.15em",
            }}
          >
            {character.name}
          </h3>
          {/* Minimal rarity indicator */}
          <div className="flex items-center gap-0.5">
            {[...Array(character.rarity || 4)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full animate-scale-in ${
                  character.rarity === 5 ? "bg-yellow-400" : "bg-purple-400"
                }`}
                style={{
                  boxShadow: character.rarity === 5 
                    ? "0 0 8px rgba(234, 179, 8, 0.6)"
                    : "0 0 8px rgba(168, 85, 247, 0.6)",
                  animationDelay: `${index * 0.08 + i * 0.03}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Element and Weapon - Clean Badges */}
        <div className="flex items-center gap-3 mb-4">
          {elementIcon && (
            <div
              className={`relative cursor-pointer transition-all duration-800 ease-in-out ${
                isHovered ? "scale-110 rotate-360" : "scale-100 rotate-0"
              } hover:scale-120 hover:rotate-360`}
            >
              <img
                src={elementIcon}
                alt={character.element}
                className="w-7 h-7 opacity-80"
              />
            </div>
          )}
          <span 
            className="text-xs font-medium tracking-wider uppercase px-3 py-1.5 border border-white/20 bg-black/40 backdrop-blur-sm"
            style={{
              color: elementStyle.accent,
              borderColor: elementStyle.border,
            }}
          >
            {character.element}
          </span>
          <span className="text-white/60 text-xs font-light tracking-wide uppercase px-2.5 py-1.5 border border-white/10 bg-black/30">
            {character.weaponType}
          </span>
        </div>

        {/* Description - Minimal */}
        <p
          className={`text-white/70 text-xs leading-relaxed line-clamp-2 font-light tracking-wide transition-opacity duration-300 ${
            isHovered ? "opacity-90" : "opacity-70"
          }`}
        >
          {character.description || "No description available."}
        </p>

        {/* Hover Details - Minimal Info */}
        <div
          className={`overflow-hidden mt-4 pt-4 border-t border-white/10 transition-all duration-500 ease-out ${
            isHovered ? "opacity-100 max-h-96 pt-4" : "opacity-0 max-h-0 pt-0"
          }`}
        >
          <div className={`flex flex-col gap-2 text-xs text-white/60 font-light tracking-wide transition-all duration-500 ease-out ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}>
            {character.birthday && (
              <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
                isHovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`} style={{ transitionDelay: isHovered ? "0.1s" : "0s" }}>
                <span className="uppercase tracking-wider text-white/40">Birthday</span>
                <span>{character.birthday}</span>
              </div>
            )}
            {character.jpVoice && (
              <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
                isHovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`} style={{ transitionDelay: isHovered ? "0.15s" : "0s" }}>
                <span className="uppercase tracking-wider text-white/40">Voice</span>
                <span className="truncate">{character.jpVoice}</span>
              </div>
            )}
            {character.weapon && (
              <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
                isHovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`} style={{ transitionDelay: isHovered ? "0.2s" : "0s" }}>
                <span className="uppercase tracking-wider text-white/40">Weapon</span>
                <span className="truncate">{character.weapon}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Region Badge - Minimal */}
      <div
        className="absolute top-4 left-4 z-20 animate-scale-in"
        style={{
          animationDelay: `${index * 0.08 + 0.2}s`,
        }}
      >
        <span className="text-white/80 text-[10px] font-light tracking-widest uppercase px-3 py-1.5 border border-white/20 bg-black/40 backdrop-blur-sm">
          {character.region}
        </span>
      </div>

      {/* Subtle particle effect */}
      {isHovered && (
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-particle-float"
          style={{
            backgroundColor: elementStyle.accent,
            boxShadow: `0 0 10px ${elementStyle.accent}`,
          }}
        />
      )}
    </div>
  );
};

export default CharacterCard;

