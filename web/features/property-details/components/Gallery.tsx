import React from "react";

type PropsType = {};

const Gallery: React.FC<PropsType> = () => {
  console.log("🚀 ~ Gallery");
  // RENDER
  return <section className="">Gallery</section>;
};

export default React.memo(Gallery);
