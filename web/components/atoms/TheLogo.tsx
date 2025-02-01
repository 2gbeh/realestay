import React from "react";
import Image from "next/image";

type PropsType = {
  size?: number;
  compact?: boolean;
};

const TheLogo: React.FC<PropsType> = ({ size = 100, compact }) => {
  console.log("🚀 ~ TheLogo");
  // RENDER
  return (
    <Image
      src={compact ? "/icon.png" : "/logo.png"}
      alt=""
      width={size}
      height={size}
      priority
    />
  );
};

export default React.memo(TheLogo);
