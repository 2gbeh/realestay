import React from "react";
import TypedLink from "./TypedLink";

const Banner: React.FC = () => {
  console.log("🚀 ~ Banner");
  // RENDER
  return (
    <section className="border-mutedBorder bg-surface border-b px-5 py-5 text-center">
      <TypedLink className="font-medium underline text-onSurface">
        Donate to help house families displaced by the LA wildfires
      </TypedLink>
    </section>
  );
};

export default React.memo(Banner);
