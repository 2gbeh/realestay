import React from "react";

type PropsType = {};

const Summary: React.FC<PropsType> = () => {
  console.log("🚀 ~ Summary");
  // RENDER
  return <section className="">Summary</section>;
};

export default React.memo(Summary);
