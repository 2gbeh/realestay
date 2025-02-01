import React from "react";

const Banner: React.FC = () => {
  console.log("🚀 ~ Banner");
  // RENDER
  return (
    <section className="border-b border-[#ddd] bg-[#e7e7e2] px-5 py-5 text-center">
      <p className="font-medium underline">
        Donate to help house families displaced by the LA wildfires
      </p>
    </section>
  );
};

export default React.memo(Banner);
