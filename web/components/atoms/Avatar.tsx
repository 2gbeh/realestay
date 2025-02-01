import React from "react";
import Image from "next/image";

type PropsType = {
  src?: string;
  size?: number;
  priority?: boolean;
};

const Avatar: React.FC<PropsType> = ({ src= "/images/avatar-flat.png", size = 40, priority }) => {
  console.log("🚀 ~ Avatar");
  // RENDER
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="rounded-full"
      priority={priority}
    />
  );
};

export default React.memo(Avatar);
