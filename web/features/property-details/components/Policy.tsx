import React from "react";

type PropsType = {};

const Policy: React.FC<PropsType> = () => {
  console.log("🚀 ~ Policy");
  // RENDER
  return <section className="">Policy</section>;
};

export default React.memo(Policy);
