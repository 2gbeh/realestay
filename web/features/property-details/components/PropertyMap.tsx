import React from "react";

type PropsType = {};

const PropertyMap: React.FC<PropsType> = () => {
  console.log("🚀 ~ PropertyMap");
  // RENDER
  return (
    <figure className="space-y-5">
      <figcaption className="text-xl font-medium">
        Garopaba, Santa Catarina, Brazil
      </figcaption>
      <img src="/images/map.png" alt="" width="100%" />
    </figure>
  );
};

export default React.memo(PropertyMap);
