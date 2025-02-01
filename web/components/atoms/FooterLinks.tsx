import React from "react";

type PropsType = {};

const FooterLinks: React.FC<PropsType> = () => {
  console.log("🚀 ~ FooterLinks");
  // RENDER
  return <section className="">FooterLinks</section>;
};

export default React.memo(FooterLinks);
