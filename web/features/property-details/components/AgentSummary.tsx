import React from "react";

type PropsType = {};

const AgentSummary: React.FC<PropsType> = () => {
  console.log("🚀 ~ AgentSummary");
  // RENDER
  return <section className="">AgentSummary</section>;
};

export default React.memo(AgentSummary);
