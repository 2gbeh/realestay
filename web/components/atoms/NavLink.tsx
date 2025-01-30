import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type PropsType = PropsWithChildren & {
  href: string;
  className?: string;
};

const NavLink: React.FC<PropsType> = ({ href, children, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  console.log("🚀 ~ NavLink");
  // RENDER
  return (
    <Link
      {...props}
      href={href}
      style={{ color: isActive ? "#0092dd" : "inherit" }}
    >
      {children}
    </Link>
  );
};

export default React.memo(NavLink);
