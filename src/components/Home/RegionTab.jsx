import { useRef } from "react";
import Region_Data from "../../Constants/Region_Data";
import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";

const RegionData = ({ item, index }) => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <motion.div
      ref={ref1}
      key={index}
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ 
        type: "spring", 
        duration: 0.6, 
        delay: index * 0.1,
        stiffness: 100 
      }}
      className="font-revolution group px-5 mx-12 mb-8 border-2 border-white/20 box-border rounded-xl transform transition-all duration-500 ease-out hover:border-white/60 h-[200px] flex flex-col relative justify-center items-center overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
      style={{
        backgroundImage: `url(${item.regionSerenties[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 group-hover:from-black/20 transition-all duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        <motion.div 
          className="text-white/80 group-hover:text-white font-bold text-[32px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:scale-110"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {item.nation}
        </motion.div>
        
        <motion.a
          className="absolute bottom-10 text-white text-[16px] font-semibold px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
          href="/"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          For More
        </motion.a>
      </div>

      {/* Hover Details */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/50 backdrop-blur-sm"
        initial={false}
      >
        <div className="relative w-full h-full p-4">
          <motion.p 
            className="absolute left-4 top-4 text-white font-bold text-[20px] drop-shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Archon : {item.Archon}
          </motion.p>
          
          <motion.div 
            className="w-[250px] object-contain absolute top-[-25%] right-[-4%]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={item.imgCharacter} alt={item.Archon} className="drop-shadow-2xl" />
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center items-center absolute bottom-4 right-[-4%]"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              className="w-[60px] mb-2 drop-shadow-lg"
              src={item.elementLogo}
              alt={item.element}
            />
            <div className="text-white font-bold text-center text-[18px] drop-shadow-lg bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm">
              Gnosis : {item.element}
            </div>
          </motion.div>
          
          <motion.p 
            className="absolute left-4 bottom-4 text-white font-bold text-[16px] drop-shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ideals : {item.Ideals}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const RegionTab = () => {
  return (
    <div className="mb-10 box-border">
      {Region_Data.map((item, index) => (
        <RegionData key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default RegionTab;
