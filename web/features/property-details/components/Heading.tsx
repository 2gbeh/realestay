import React from "react";
import { LuHeart, LuShare } from "react-icons/lu";

type PropsType = {};

const Heading: React.FC<PropsType> = () => {
  console.log("🚀 ~ Heading");
  // RENDER
  return (
    <section className="flexCenterBetween">
      <h1 className="text-2xl font-medium">
        Beautiful house, complete and with a hydro tub
      </h1>
      <div className="flexCenter gap-5">
        <i className="flexCenter gap-2 underline">
          <LuShare />
          Share
        </i>
        <i className="flexCenter gap-2 underline">
          <LuHeart /> Save
        </i>
      </div>
    </section>
  );
};

export default React.memo(Heading);
