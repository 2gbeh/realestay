import React from "react";
import { LuPackage } from "react-icons/lu";

type PropsType = {};

const Amenities: React.FC<PropsType> = () => {
  console.log("🚀 ~ Amenities");
  // RENDER
  return (
    <div className="border-t">
      <h1>What this place offers</h1>
      <ul className="gridTwo gap-3">
        {[
          "Kitchen",
          "Wifi",
          "Dedicated workspace",
          "Free parking on premises",
          "Pets allowed",
          "TV",
          "Free washer – In unit",
          "Exterior security cameras on property",
          "Carbon monoxide alarm",
          "Smoke alarm",
        ].map((item, i) => (
          <li key={i} className="flexCenter gap-2">
            <LuPackage />
            {item}
          </li>
        ))}
      </ul>
      <button className="btnOutline">Show all 33 amenities</button>
    </div>
  );
};

export default React.memo(Amenities);
