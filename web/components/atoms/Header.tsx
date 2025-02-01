import React from "react";

type PropsType = {};

const Header: React.FC<PropsType> = () => {
  console.log("🚀 ~ Header");
  // RENDER
  return <section className="">Header</section>;
};

export default React.memo(Header);
