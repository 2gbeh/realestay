import React from "react";

type PropsType = {};

const SearchBar: React.FC<PropsType> = () => {
  console.log("🚀 ~ SearchBar");
  // RENDER
  return <section className="">SearchBar</section>;
};

export default React.memo(SearchBar);
