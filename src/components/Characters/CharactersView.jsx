import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCharactersByRegion, getAllCharacters, getAvailableRegions } from "../../services/characterService";
import CharacterCard from "./CharacterCard";
import { BackgroundImage } from "../ui";
import { useTheme } from "../ThemeContext";
import Region_Data from "../../Constants/Region_Data";
import {
  Element_Anemo,
  Element_Cryo,
  Element_Dendro,
  Element_Electro,
  Element_Geo,
  Element_Hydro,
  Element_Pyro,
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

const CharactersView = () => {
  const { theme } = useTheme();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedElement, setSelectedElement] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get available regions from Region_Data
  const availableRegions = ["All", ...Region_Data.map((region) => region.nation)];
  const availableElements = [
    "All",
    ...new Set(Region_Data.map((region) => region.element)),
  ];

  useEffect(() => {
    fetchCharacters();
  }, [selectedRegion]);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);

    try {
      let response;
      if (selectedRegion === "All") {
        response = await getAllCharacters();
      } else {
        response = await getCharactersByRegion(selectedRegion);
      }

      setCharacters(response.data || []);
    } catch (err) {
      setError(err.message);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter characters by element and search query
  const filteredCharacters = characters.filter((character) => {
    const matchesElement =
      selectedElement === "All" || character.element === selectedElement;
    const matchesSearch =
      searchQuery === "" ||
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (character.description &&
        character.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesElement && matchesSearch;
  });

  return (
    <BackgroundImage
      className="min-h-screen pt-24 pb-16 px-4 md:px-8"
      backgroundOptions={{
        backgroundSize: theme.ThemeZhongli || theme.ThemeHome ? "cover" : "100% auto",
        backgroundAttachment: theme.ThemeZhongli ? "scroll" : "fixed",
        backgroundPosition: theme.ThemeZhongli || theme.ThemeEi ? "initial" : "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Characters of Teyvat
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            Explore the heroes and legends from across the seven nations
          </p>
        </motion.div>

        {/* Filters - Single Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <input
                type="text"
                placeholder="Search characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-black/40 backdrop-blur-md border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-all duration-300 text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">
                🔍
              </div>
            </div>

            {/* Region Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full sm:w-auto min-w-[140px] px-4 py-2.5 rounded-lg bg-black/40 backdrop-blur-md border-2 border-white/20 text-white text-sm focus:outline-none focus:border-white/50 transition-all duration-300 cursor-pointer"
              >
                {availableRegions.map((region) => (
                  <option key={region} value={region} className="bg-black/90">
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Element Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={selectedElement}
                onChange={(e) => setSelectedElement(e.target.value)}
                className="w-full sm:w-auto min-w-[120px] px-4 py-2.5 rounded-lg bg-black/40 backdrop-blur-md border-2 border-white/20 text-white text-sm focus:outline-none focus:border-white/50 transition-all duration-300 cursor-pointer"
              >
                {availableElements.map((element) => (
                  <option key={element} value={element} className="bg-black/90">
                    {element}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count - Compact */}
          <div className="text-center text-white/60 text-xs mt-2">
            Showing {filteredCharacters.length} character{filteredCharacters.length !== 1 ? "s" : ""}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <div className="text-white text-xl">Loading characters...</div>
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-500/20 backdrop-blur-md border-2 border-red-500/50 rounded-xl p-6 text-center text-white"
          >
            <p className="text-lg font-semibold">Error loading characters</p>
            <p className="text-sm text-white/80 mt-2">{error}</p>
          </motion.div>
        )}

        {/* Characters Grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            {filteredCharacters.length > 0 ? (
              <motion.div
                key={`${selectedRegion}-${selectedElement}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredCharacters.map((character, index) => (
                  <CharacterCard
                    key={`${character.name}-${index}`}
                    character={character}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-white/70 text-xl">
                  No characters found matching your criteria.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </BackgroundImage>
  );
};

export default CharactersView;

