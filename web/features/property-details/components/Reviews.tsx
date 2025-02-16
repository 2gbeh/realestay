import React from "react";

type PropsType = {};

const Reviews: React.FC<PropsType> = () => {
  console.log("🚀 ~ Reviews");
  // RENDER
  return <section className="">Reviews</section>;
};

export default React.memo(Reviews);
