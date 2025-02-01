import React from "react";

type PropsType = {};

const Template: React.FC<PropsType> = () => {
  console.log("🚀 ~ Template");
  // RENDER
  return <section className="">Template</section>;
};

export default React.memo(Template);
