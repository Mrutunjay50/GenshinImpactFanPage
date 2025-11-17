/**
 * Card UI Variations for Character Cards
 * Different design styles you can choose from
 */

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
  Anemo: { glow: "rgba(16, 185, 129, 0.3)", border: "rgba(16, 185, 129, 0.4)", accent: "rgb(16, 185, 129)" },
  Cryo: { glow: "rgba(6, 182, 212, 0.3)", border: "rgba(6, 182, 212, 0.4)", accent: "rgb(6, 182, 212)" },
  Dendro: { glow: "rgba(132, 204, 22, 0.3)", border: "rgba(132, 204, 22, 0.4)", accent: "rgb(132, 204, 22)" },
  Electro: { glow: "rgba(168, 85, 247, 0.3)", border: "rgba(168, 85, 247, 0.4)", accent: "rgb(168, 85, 247)" },
  Geo: { glow: "rgba(234, 179, 8, 0.3)", border: "rgba(234, 179, 8, 0.4)", accent: "rgb(234, 179, 8)" },
  Hydro: { glow: "rgba(59, 130, 246, 0.3)", border: "rgba(59, 130, 246, 0.4)", accent: "rgb(59, 130, 246)" },
  Pyro: { glow: "rgba(239, 68, 68, 0.3)", border: "rgba(239, 68, 68, 0.4)", accent: "rgb(239, 68, 68)" },
};

// VARIATION 0: Futuristic Card (Previous Style with Rotating Ball and Colored Dots)
export const FuturisticCard = ({ character, index, isHovered, setIsHovered }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);

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
          {/* Minimal rarity indicator - Colored Dots */}
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

      {/* Rotating particle effect (small ball) */}
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

// VARIATION 1: Glassmorphic Card (Modern Glass Effect)
export const GlassmorphicCard = ({ character, index, isHovered, setIsHovered }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[500px] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl"
      style={{
        transform: isHovered ? "translateY(-15px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isHovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${elementStyle.glow}`
          : "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold text-2xl">{character.name}</h3>
            {elementIcon && (
              <div
                className="transition-transform duration-500"
                style={{ transform: isHovered ? "rotate(360deg) scale(1.2)" : "rotate(0deg) scale(1)" }}
              >
                <img src={elementIcon} alt={character.element} className="w-8 h-8" />
              </div>
            )}
          </div>
          <div className="flex gap-2 mb-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
              {character.element}
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
              {character.weaponType}
            </span>
          </div>
          <p className="text-white/70 text-sm line-clamp-2 mb-3">{character.description}</p>

          {/* Hover Details */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isHovered ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="pt-3 border-t border-white/10 space-y-2">
              {character.birthday && (
                <div className="flex justify-between text-xs text-white/60">
                  <span>Birthday</span>
                  <span>{character.birthday}</span>
                </div>
              )}
              {character.jpVoice && (
                <div className="flex justify-between text-xs text-white/60">
                  <span>Voice</span>
                  <span className="truncate ml-4">{character.jpVoice}</span>
                </div>
              )}
              {character.weapon && (
                <div className="flex justify-between text-xs text-white/60">
                  <span>Weapon</span>
                  <span className="truncate ml-4">{character.weapon}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rarity Stars */}
      <div className="absolute top-4 right-4 z-10 flex gap-1">
        {[...Array(character.rarity || 4)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">⭐</span>
        ))}
      </div>

      {/* Region Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-white/80 text-xs font-medium px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
          {character.region}
        </span>
      </div>
    </div>
  );
};

// VARIATION 2: Minimalist Card (Clean & Simple)
export const MinimalistCard = ({ character, index, isHovered, setIsHovered }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[560px] rounded-lg overflow-hidden bg-black/50 border border-white/5"
      style={{
        transform: isHovered ? "translateY(-15px)" : "translateY(0)",
        transition: "transform 0.3s ease-out",
        borderColor: isHovered ? elementStyle.border : "rgba(255,255,255,0.05)",
      }}
    >
      {/* Character Image */}
      <div className="relative h-[55%] overflow-hidden">
        <img
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Minimal Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 to-transparent">
        <h3 className="text-white text-xl font-semibold mb-2">{character.name}</h3>
        <div className="flex items-center gap-3 text-sm text-white/60 mb-3">
          {elementIcon && <img src={elementIcon} alt={character.element} className="w-5 h-5" />}
          <span>{character.element}</span>
          <span className="text-white/40">•</span>
          <span>{character.weaponType}</span>
        </div>
        
        {/* All Character Data */}
        <div className="space-y-1.5 text-xs text-white/70">
          {character.birthday && (
            <div className="flex items-center justify-between">
              <span className="text-white/50">Birthday</span>
              <span>{character.birthday}</span>
            </div>
          )}
          {character.jpVoice && (
            <div className="flex items-center justify-between">
              <span className="text-white/50">Voice</span>
              <span className="truncate ml-2">{character.jpVoice}</span>
            </div>
          )}
          {character.weapon && (
            <div className="flex items-center justify-between">
              <span className="text-white/50">Weapon</span>
              <span className="truncate ml-2">{character.weapon}</span>
            </div>
          )}
          {character.gender && (
            <div className="flex items-center justify-between">
              <span className="text-white/50">Gender</span>
              <span>{character.gender}</span>
            </div>
          )}
          {character.region && (
            <div className="flex items-center justify-between">
              <span className="text-white/50">Region</span>
              <span>{character.region}</span>
            </div>
          )}
          {character.description && (
            <div className="pt-2 mt-2 border-t border-white/10">
              <p className="text-white/60 text-xs line-clamp-2">{character.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Rarity Indicator */}
      <div className="absolute top-3 right-3">
        <div className="flex gap-0.5">
          {[...Array(character.rarity || 4)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full ${
                character.rarity === 5 ? "bg-yellow-400" : "bg-purple-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// VARIATION 3: Detailed Card (More Information)
export const DetailedCard = ({ character, index, isHovered, setIsHovered }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[520px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2"
      style={{
        transform: isHovered ? "translateY(-15px) rotateY(2deg)" : "translateY(0) rotateY(0deg)",
        transition: "all 0.4s ease-out",
        borderColor: isHovered ? elementStyle.border : "rgba(255,255,255,0.1)",
        boxShadow: isHovered
          ? `0 25px 50px rgba(0,0,0,0.6), 0 0 50px ${elementStyle.glow}`
          : "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      {/* Character Image */}
      <div className="relative h-[60%] overflow-hidden">
        <img
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-all duration-700"
          style={{
            transform: isHovered ? "scale(1.15) translateY(-10px)" : "scale(1)",
            filter: isHovered ? "brightness(1.1)" : "brightness(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-black/70 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-white text-2xl font-bold mb-1">{character.name}</h3>
            <p className="text-white/60 text-sm">{character.region}</p>
          </div>
          {elementIcon && (
            <div
              className="transition-transform duration-500"
              style={{ transform: isHovered ? "rotate(360deg) scale(1.2)" : "rotate(0deg) scale(1)" }}
            >
              <img src={elementIcon} alt={character.element} className="w-10 h-10" />
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span
            className="px-3 py-1.5 rounded-lg text-sm font-medium border"
            style={{
              backgroundColor: `${elementStyle.accent}20`,
              borderColor: elementStyle.border,
              color: elementStyle.accent,
            }}
          >
            {character.element}
          </span>
          <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 border border-white/20 text-white">
            {character.weaponType}
          </span>
          <div className="ml-auto flex items-center gap-1 flex-shrink-0">
            {[...Array(character.rarity || 4)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${character.rarity === 5 ? "text-yellow-400" : "text-purple-400"}`}
              >
                ⭐
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{character.description}</p>

        {/* Hover Details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-white/10 space-y-2">
            {character.birthday && (
              <div className="flex justify-between text-xs text-white/60">
                <span>Birthday</span>
                <span>{character.birthday}</span>
              </div>
            )}
            {character.jpVoice && (
              <div className="flex justify-between text-xs text-white/60">
                <span>Voice</span>
                <span className="truncate ml-4">{character.jpVoice}</span>
              </div>
            )}
            {character.weapon && (
              <div className="flex justify-between text-xs text-white/60">
                <span>Weapon</span>
                <span className="truncate ml-4">{character.weapon}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// VARIATION 4: Neon Glow Card (Cyberpunk Style)
export const NeonGlowCard = ({ character, index, isHovered, setIsHovered }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[480px] rounded-lg overflow-hidden bg-black border-2"
      style={{
        transform: isHovered ? "translateY(-15px)" : "translateY(0)",
        transition: "all 0.3s ease-out",
        borderColor: isHovered ? elementStyle.accent : "rgba(255,255,255,0.1)",
        boxShadow: isHovered
          ? `0 0 30px ${elementStyle.glow}, 0 0 60px ${elementStyle.glow}, inset 0 0 30px ${elementStyle.glow}`
          : "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      {/* Neon Border Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 20px ${elementStyle.accent}`,
        }}
      />

      {/* Character Image */}
      <div className="relative h-[65%] overflow-hidden">
        <img
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            filter: isHovered ? `brightness(1.2) saturate(1.3)` : "brightness(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
      </div>

      {/* Content with Neon Accents */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-2xl font-bold uppercase tracking-wider"
            style={{
              color: elementStyle.accent,
              textShadow: `0 0 20px ${elementStyle.glow}, 0 0 40px ${elementStyle.glow}`,
            }}
          >
            {character.name}
          </h3>
          {elementIcon && (
            <img
              src={elementIcon}
              alt={character.element}
              className="w-8 h-8 transition-transform duration-500"
              style={{
                transform: isHovered ? "rotate(360deg) scale(1.2)" : "rotate(0deg) scale(1)",
                filter: `drop-shadow(0 0 10px ${elementStyle.accent})`,
              }}
            />
          )}
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest border"
            style={{
              borderColor: elementStyle.accent,
              color: elementStyle.accent,
              boxShadow: `0 0 10px ${elementStyle.glow}`,
            }}
          >
            {character.element}
          </span>
          <span className="text-white/60 text-xs uppercase">{character.weaponType}</span>
        </div>

        <p className="text-white/70 text-xs line-clamp-2 mb-3">{character.description}</p>

        {/* Rarity with Glow */}
        <div className="flex gap-1">
          {[...Array(character.rarity || 4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                character.rarity === 5 ? "bg-yellow-400" : "bg-purple-400"
              }`}
              style={{
                boxShadow: `0 0 10px ${character.rarity === 5 ? "#fbbf24" : "#a855f7"}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// VARIATION 5: Compact Card (Smaller, More Cards Per Row)
export const CompactCard = ({ character, index, isHovered, setIsHovered }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementStyle = elementColorMap[character.element] || {
    glow: "rgba(156, 163, 175, 0.3)",
    border: "rgba(156, 163, 175, 0.4)",
    accent: "rgb(156, 163, 175)",
  };
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[320px] rounded-lg overflow-hidden bg-black/60 border border-white/10"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s ease-out",
        boxShadow: isHovered
          ? `0 12px 28px rgba(0,0,0,0.5), 0 0 20px ${elementStyle.glow}`
          : "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Character Image */}
      <div className="relative h-[80%] overflow-hidden">
        <img
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent" />
      </div>

      {/* Compact Content */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/95 to-black/70">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-white font-semibold text-sm truncate flex-1">{character.name}</h3>
          {elementIcon && (
            <img
              src={elementIcon}
              alt={character.element}
              className="w-5 h-5 flex-shrink-0 ml-1 transition-transform duration-500"
              style={{ transform: isHovered ? "rotate(360deg)" : "rotate(0deg)" }}
            />
          )}
        </div>
        
        {/* Weapon Type with Details */}
        <div className="flex items-center gap-1.5 text-[10px] text-white/80 mb-1">
          <span className="font-medium">{character.element}</span>
          <span className="text-white/40">•</span>
          <span className="font-medium">{character.weaponType}</span>
          {character.weapon && (
            <>
              <span className="text-white/40">•</span>
              <span className="text-white/60 truncate max-w-[100px]" title={character.weapon}>
                {character.weapon}
              </span>
            </>
          )}
        </div>

        {/* Bottom Row: Rarity and Region */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(character.rarity || 4)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full ${
                  character.rarity === 5 ? "bg-yellow-400" : "bg-purple-400"
                }`}
              />
            ))}
          </div>
          {character.region && (
            <span className="text-[9px] text-white/50 uppercase tracking-wide truncate ml-2">
              {character.region}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

