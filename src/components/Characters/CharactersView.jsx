import { useState, useEffect } from "react";
import { getCharactersByRegion, getAllCharacters, getAvailableRegions } from "../../services/characterService";
import CharacterCard from "./CharacterCard";
import CardStyleSelector from "./CardStyleSelector";
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
  const [selectedRarity, setSelectedRarity] = useState("All");
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

  // Filter characters by element, rarity, and search query
  const filteredCharacters = characters.filter((character) => {
    const matchesElement =
      selectedElement === "All" || character.element === selectedElement;
    const matchesRarity =
      selectedRarity === "All" || 
      character.rarity === parseInt(selectedRarity) ||
      character.rarity === selectedRarity;
    const matchesSearch =
      searchQuery === "" ||
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (character.description &&
        character.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesElement && matchesRarity && matchesSearch;
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
        {/* Header with Card Style Selector */}
        <div className="relative mb-12 animate-fade-in-down z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Characters of Teyvat
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Explore the heroes and legends from across the seven nations
            </p>
          </div>
          {/* Card Style Selector - Top Right */}
          <div className="absolute top-0 right-0">
            <CardStyleSelector />
          </div>
        </div>

        {/* Filters - Single Line */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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

            {/* Rarity Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
                className="w-full sm:w-auto min-w-[110px] px-4 py-2.5 rounded-lg bg-black/40 backdrop-blur-md border-2 border-white/20 text-white text-sm focus:outline-none focus:border-white/50 transition-all duration-300 cursor-pointer"
              >
                <option value="All" className="bg-black/90">All Stars</option>
                <option value="5" className="bg-black/90">5 ⭐</option>
                <option value="4" className="bg-black/90">4 ⭐</option>
              </select>
            </div>
          </div>

          {/* Results Count - Compact */}
          <div className="text-center text-white/60 text-xs mt-2 z-0">
            Showing {filteredCharacters.length} character{filteredCharacters.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20 animate-fade-in">
            <div className="text-white text-xl">Loading characters...</div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-500/20 backdrop-blur-md border-2 border-red-500/50 rounded-xl p-6 text-center text-white animate-scale-in">
            <p className="text-lg font-semibold">Error loading characters</p>
            <p className="text-sm text-white/80 mt-2">{error}</p>
          </div>
        )}

        {/* Characters Grid */}
        {!loading && !error && (
          <>
            {filteredCharacters.length > 0 ? (
              <div
                key={`${selectedRegion}-${selectedElement}-${selectedRarity}-${searchQuery}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in"
              >
                {filteredCharacters.map((character, index) => (
                  <CharacterCard
                    key={`${character.name}-${index}`}
                    character={character}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 animate-fade-in-up">
                <p className="text-white/70 text-xl">
                  No characters found matching your criteria.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </BackgroundImage>
  );
};

export default CharactersView;

