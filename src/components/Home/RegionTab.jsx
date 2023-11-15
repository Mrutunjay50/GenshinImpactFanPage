import React, { useEffect, useRef } from "react";
import Region_Data from "../../Constants/Region_Data";
import { useIsVisible } from "../hooks/useIsVisible";

const RegionData = ({ item, index }) => {
  
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <>
      <div
        ref={ref1} 
        key={index}
        className={` ${isVisible1 ? "scale-100" : "scale-0"} group px-5 mx-12 mb-8 border-2 border-transparent box-border rounded-md transform transition ease-in duration-700 hover:border-white h-[200px] flex flex-col relative justify-center items-center`}
        style={{
          backgroundImage: `url(${item.regionSerenties[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute text-white font-bold text-[32px]">
          {item.nation}
        </div>
        <a
          className="absolute text-white bottom-10 text-[16px]"
          href="/"
        >
          <div>For More</div>
        </a>
        <div className="opacity-0 transition ease-in-out duration-700 group-hover:opacity-100 ">
          <p className="absolute left-16 top-2 text-white font-bold text-[20px]">
            Archon : {item.Archon}
          </p>
          <div className="w-[250px] object-contain absolute top-[-50%] right-[-4%]">
            <img src={item.imgCharacter} alt="Img" />
          </div>
          <div className="flex flex-col justify-center items-center absolute bottom-2 right-[-4%] w-[full]">
            <img
              className=" w-[20%] text-[16px]"
              src={item.elementLogo}
              alt={item.element}
            />
            <div className=" text-white font-bold text-center text-[20px]">
              Gnosis : {item.element}
            </div>
          </div>
          <p className="absolute left-16 bottom-2 text-white font-bold text-[16px]">
            Ideals : {item.Ideals}
          </p>
        </div>
      </div>
    </>
  );
};

const RegionTab = () => {
  return (
    <div className="mb-10 box-border">
      {/* regions overviews */}
      {Region_Data.map((item, index) => (
        <>
          <RegionData item={item} index={index} />
        </>
      ))}
    </div>
  );
};

export default RegionTab;
