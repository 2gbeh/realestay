import React from "react";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  console.log("🚀 ~ Footer");
  // RENDER
  return <section className="">Footer</section>;
};

export default React.memo(Footer);
