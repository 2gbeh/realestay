import React, { PropsWithChildren } from "react";
import Link from "next/link";
//
import { PathType, PATH } from "@/constants/PATH";

type PropsType = PropsWithChildren & {
  href?: PathType;
  className?: string;
  title?: string;
};

const TypedLink: React.FC<PropsType> = ({
  children,
  href,
  ...props
}) => {
  let to = href && typeof PATH[href] === "string" ? PATH[href] : PATH.hash;
  console.log("🚀 ~ TypedLink");
  // RENDER
  return (
    <Link href={to} {...props}>
      {children}
    </Link>
  );
};

export default React.memo(TypedLink);
