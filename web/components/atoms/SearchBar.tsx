import React from "react";

type PropsType = {
  compact?: boolean;
};

const SearchBar: React.FC<PropsType> = ({ compact }) => {
  console.log("🚀 ~ SearchBar");
  // RENDER
  return <section className="">SearchBar</section>;
};

export default React.memo(SearchBar);
