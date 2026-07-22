import React, { useState } from "react";
import { motion } from "framer-motion";
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
  Anemo: "from-green-400/20 to-teal-500/20 border-green-400/30",
  Cryo: "from-cyan-400/20 to-blue-500/20 border-cyan-400/30",
  Dendro: "from-lime-400/20 to-green-500/20 border-lime-400/30",
  Electro: "from-purple-400/20 to-indigo-500/20 border-purple-400/30",
  Geo: "from-yellow-400/20 to-amber-500/20 border-yellow-400/30",
  Hydro: "from-blue-400/20 to-cyan-500/20 border-blue-400/30",
  Pyro: "from-red-400/20 to-orange-500/20 border-red-400/30",
};

const rarityGradientMap = {
  4: "from-purple-500/30 to-purple-600/30",
  5: "from-yellow-400/30 via-orange-500/30 to-yellow-600/30",
};

const CharacterCard = ({ character, index }) => {
  const elementIcon = elementIconMap[character.element] || null;
  const elementColor = elementColorMap[character.element] || "from-gray-400/20 to-gray-500/20 border-gray-400/30";
  const rarityGradient = rarityGradientMap[character.rarity] || "from-gray-400/30 to-gray-600/30";
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        duration: 0.2,
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="group relative w-full h-[450px] rounded-2xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-black/40 via-black/20 to-black/40 backdrop-blur-md shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:border-white/40 transition-all duration-500"
    >
      {/* Rarity gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${rarityGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
      />

      {/* Element gradient border effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${elementColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
      />

      {/* Character Image */}
      <div className="relative w-full h-[70%] overflow-hidden">
        {/* Skeleton placeholder shown until the image is fully loaded, so the
            interlaced PNG's coarse progressive pass is never visible */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 via-white/5 to-white/10" />
        )}
        <img
          ref={(node) => {
            // Handle images already complete from cache before onLoad attaches
            if (node && node.complete && node.naturalWidth > 0) {
              setImageLoaded(true);
            }
          }}
          src={imageError ? Lumine0 : character.image || Lumine0}
          alt={character.name}
          onError={handleImageError}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        {/* Character Name and Rarity */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {character.name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(character.rarity || 4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05, type: "spring" }}
                className="text-yellow-400 text-lg"
              >
                ★
              </motion.div>
            ))}
          </div>
        </div>

        {/* Element and Weapon Type */}
        <div className="flex items-center gap-3 mb-3">
          {elementIcon && (
            <motion.img
              src={elementIcon}
              alt={character.element}
              className="w-8 h-8 drop-shadow-lg"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
          )}
          <span className="text-white/80 text-sm font-semibold bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
            {character.element}
          </span>
          <span className="text-white/70 text-xs bg-black/30 px-2 py-1 rounded border border-white/10">
            {character.weaponType}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/90 text-sm line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {character.description || "No description available."}
        </p>

        {/* Hover Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-3 pt-3 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="flex flex-col gap-2 text-xs text-white/80">
            {character.birthday && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">Birthday:</span>
                <span>{character.birthday}</span>
              </div>
            )}
            {character.jpVoice && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">JP Voice:</span>
                <span>{character.jpVoice}</span>
              </div>
            )}
            {character.weapon && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">Weapon:</span>
                <span className="truncate">{character.weapon}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Region Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-white text-xs font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/30 drop-shadow-lg">
          {character.region}
        </span>
      </div>
    </motion.div>
  );
};

export default CharacterCard;

