import React from "react";
import { LuMenu } from "react-icons/lu";
//
import Avatar from "../atoms/Avatar";
import { useRouter } from "next/router";
import { PATH } from "@/constants/PATH";

const AvatarMenu: React.FC = () => {
  const router = useRouter();
  const gotoLogin = () => router.push(PATH.login);
  console.log("🚀 ~ AvatarMenu");
  // RENDER
  return (
    <figure className="flexCenterBetween gap-4 rounded-full py-1.5 pl-3 pr-1.5 shadow hover:shadow-md">
      <LuMenu onClick={gotoLogin} className="cursor-pointer" />
      <Avatar src="/images/my-avatar.png" size={40} priority />
    </figure>
  );
};

export default React.memo(AvatarMenu);
