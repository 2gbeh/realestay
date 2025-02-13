import React from "react";
import TypedLink from "../atoms/TypedLink";

const Banner: React.FC = () => {
  console.log("🚀 ~ Banner");
  // RENDER
  return (
    <section className="border-b px-5 py-5 text-center bg-lightPrimary dark:bg-darkPrimary">
      <TypedLink className="font-medium underline text-lightOnPrimary dark:text-darkOnPrimary">
        Donate to help house families displaced by the LA wildfires
      </TypedLink>
    </section>
  );
};

export default React.memo(Banner);
