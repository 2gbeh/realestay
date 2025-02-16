import React from "react";

type PropsType = {};

const Amenities: React.FC<PropsType> = () => {
  console.log("🚀 ~ Amenities");
  // RENDER
  return <section className="">Amenities</section>;
};

export default React.memo(Amenities);
