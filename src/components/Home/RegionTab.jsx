import { useRef, useState } from "react";
import Region_Data from "../../Constants/Region_Data";
import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";
import { Teyvat, Home, Lumine0, Paimon } from "../../assets";

// Default images
const DEFAULT_REGION_IMAGE = Teyvat || Home;
const DEFAULT_CHARACTER_IMAGE = Lumine0 || Paimon;

const RegionData = ({ item, index }) => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const [regionImageError, setRegionImageError] = useState(false);
  const [characterImageError, setCharacterImageError] = useState(false);
  const [elementImageError, setElementImageError] = useState(false);

  // Get region image with fallback
  const getRegionImage = () => {
    if (item.regionSerenties && item.regionSerenties.length > 0 && item.regionSerenties[0]) {
      return item.regionSerenties[0];
    }
    return DEFAULT_REGION_IMAGE;
  };

  // Get character image with fallback
  const getCharacterImage = () => {
    if (item.imgCharacter && !characterImageError) {
      return item.imgCharacter;
    }
    return DEFAULT_CHARACTER_IMAGE;
  };

  // Get element logo with fallback
  const getElementLogo = () => {
    if (item.elementLogo && !elementImageError) {
      return item.elementLogo;
    }
    // Return a default element logo based on element type
    return item.elementLogo || null;
  };

  const regionImage = regionImageError ? DEFAULT_REGION_IMAGE : getRegionImage();

  return (
    <motion.div
      ref={ref1}
      key={index}
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={isVisible1 ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 50 }}
      transition={{ 
        type: "spring", 
        duration: 0.8, 
        delay: index * 0.15,
        stiffness: 80,
        damping: 15
      }}
      className="font-revolution group px-5 mx-12 mb-8 border-2 border-white/20 box-border rounded-2xl hover:border-white/60 h-[220px] flex flex-col relative justify-center items-center shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] backdrop-blur-sm bg-black/10 overflow-visible"
      style={{ overflow: 'visible' }}
    >
      {/* Background Image - with overflow-hidden to maintain rounded corners */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${regionImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hidden img to detect load errors */}
        <img
          src={regionImage}
          alt=""
          className="hidden"
          onError={() => setRegionImageError(true)}
        />
      </div>
      {/* Overlay gradient - with overflow-hidden to maintain rounded corners */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 rounded-2xl overflow-hidden"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        <motion.div 
          className="text-white/90 group-hover:text-white font-bold text-[36px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] transition-all duration-500"
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={isVisible1 ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.9 }}
          transition={{ 
            delay: index * 0.15 + 0.3,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
          whileHover={{ scale: 1.1 }}
        >
          {item.nation}
        </motion.div>
        
        <motion.a
          className="absolute bottom-8 text-white text-[16px] font-semibold px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
          href="/"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isVisible1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
          transition={{ 
            delay: index * 0.15 + 0.5,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.a>
      </div>

      {/* Hover Details with smooth staggered animations - positioned outside card bounds */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute z-20 pointer-events-none" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Archon Info */}
        <p className="absolute left-6 top-4 text-white font-bold text-[22px] drop-shadow-2xl bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transform -translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-[500ms] delay-[100ms] ease-out">
          Archon: <span className="text-yellow-300">{item.Archon}</span>
        </p>
        
        {/* Character Image with smooth entrance - positioned to overflow */}
        <div 
          className="w-[280px] object-contain absolute pointer-events-auto transform scale-75 translate-x-5 -rotate-[5deg] group-hover:scale-100 group-hover:translate-x-0 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] delay-[150ms] ease-out"
          style={{ 
            top: '-55%', 
            right: '-5%',
            zIndex: 30
          }}
        >
          <img 
            src={getCharacterImage()} 
            alt={item.Archon || item.nation} 
            className="drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] w-full h-auto" 
            onError={() => setCharacterImageError(true)}
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Element Logo and Gnosis */}
        <div 
          className="flex flex-col justify-center items-center absolute pointer-events-auto bg-black/50 px-4 py-3 rounded-xl backdrop-blur-md border border-white/20 transform translate-y-8 scale-75 group-hover:translate-y-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-[500ms] delay-[200ms] ease-out"
          style={{ 
            bottom: '16px', 
            right: '-5%',
            zIndex: 30
          }}
        >
          {getElementLogo() && (
            <img
              className="w-[70px] mb-3 drop-shadow-2xl transform -rotate-180 scale-0 group-hover:rotate-0 group-hover:scale-100 transition-all duration-[600ms] delay-[300ms] ease-out"
              src={getElementLogo()}
              alt={item.element}
              onError={() => setElementImageError(true)}
            />
          )}
          <div className="text-white font-bold text-center text-[18px] drop-shadow-lg">
            <span className="text-yellow-300">Gnosis:</span> {item.element}
          </div>
        </div>
        
        {/* Ideals */}
        <p className="absolute left-6 bottom-4 text-white font-bold text-[18px] drop-shadow-2xl bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transform -translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-[500ms] delay-[250ms] ease-out">
          Ideals: <span className="text-yellow-300">{item.Ideals}</span>
        </p>
      </div>
    </motion.div>
  );
};

const RegionTab = () => {
  return (
    <motion.div 
      className="mb-10 box-border"
      style={{ overflow: 'visible' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {Region_Data.map((item, index) => (
        <RegionData key={index} item={item} index={index} />
      ))}
    </motion.div>
  );
};

export default RegionTab;
