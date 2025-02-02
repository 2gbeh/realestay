import React from "react";
import { LuMenu } from "react-icons/lu";
//
import Avatar from "./Avatar";

const AvatarMenu: React.FC = () => {
  console.log("🚀 ~ AvatarMenu");
  // RENDER
  return (
    <figure className="flexCenterBetween cursor-pointer gap-4 rounded-full py-1.5 pl-3 pr-1.5 shadow hover:shadow-md">
      <LuMenu />
      <Avatar src="/images/my-avatar.png" size={40} priority />
    </figure>
  );
};

export default React.memo(AvatarMenu);
