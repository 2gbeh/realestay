import React from "react";
import Avatar from "@/components/atoms/Avatar";

type PropsType = {};

const AgentSummary: React.FC<PropsType> = () => {
  console.log("🚀 ~ AgentSummary");
  // RENDER
  return (
    <div className="border-b border-t py-5">
      <figure className="flexCenter gap-5">
        <Avatar />
        <figcaption className="-space-y-1">
          <strong>Hosted by Fabiana</strong>
          <p className="mutedText">Superhost &bull; 6 years hosting</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default React.memo(AgentSummary);
