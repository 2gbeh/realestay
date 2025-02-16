import React from "react";
import TypedLink from "../atoms/TypedLink";

type PropsType = {};

const Banner: React.FC<PropsType> = () => {
  console.log("🚀 ~ Banner");
  // RENDER
  return (
    <section className="border-b bg-lightPrimary px-5 py-5 text-center dark:bg-darkPrimary">
      <TypedLink className="font-medium text-lightOnPrimary underline dark:text-darkOnPrimary">
        Donate to help house families displaced by the LA wildfires
      </TypedLink>
    </section>
  );
};

export default React.memo(Banner);
