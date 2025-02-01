import React from "react";

type PropsType = {};

const AvatarMenu: React.FC<PropsType> = () => {
  console.log("🚀 ~ AvatarMenu");
  // RENDER
  return <section className="">AvatarMenu</section>;
};

export default React.memo(AvatarMenu);
