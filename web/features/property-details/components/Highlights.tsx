import React from "react";

type PropsType = {};

const Highlights: React.FC<PropsType> = () => {
  console.log("🚀 ~ Highlights");
  // RENDER
  return <section className="">Highlights</section>;
};

export default React.memo(Highlights);
