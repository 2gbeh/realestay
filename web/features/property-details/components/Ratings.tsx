import React from "react";

type PropsType = {};

const Ratings: React.FC<PropsType> = () => {
  console.log("🚀 ~ Ratings");
  // RENDER
  return <section className="">Ratings</section>;
};

export default React.memo(Ratings);
