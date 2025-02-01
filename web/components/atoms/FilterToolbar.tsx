import React from "react";

type PropsType = {};

const FilterToolbar: React.FC<PropsType> = () => {
  console.log("🚀 ~ FilterToolbar");
  // RENDER
  return <section className="">FilterToolbar</section>;
};

export default React.memo(FilterToolbar);
