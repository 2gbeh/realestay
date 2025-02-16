import React from "react";
import { LuStar } from "react-icons/lu";

type PropsType = {};

const Summary: React.FC<PropsType> = () => {
  console.log("🚀 ~ Summary");
  // RENDER
  return (
    <div className="flex">
      <div className="flex-1">
        <h2 className="text-xl font-medium">Entire home in Garopaba, Brazil</h2>
        <p className="mutedText">
          7 guests &bull; 3 bedrooms &bull; 3 beds &bull; 3 baths
        </p>
        <div className="flexCenter gap-2">
          <LuStar />
          5.0 &bull; <span className="underline">4 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Summary);
