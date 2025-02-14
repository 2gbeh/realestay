import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouterFacade } from "@/hooks/useRouterFacade";

type PropsType = PropsWithChildren & {
  href: string;
  className?: string;
};

const NavLink: React.FC<PropsType> = ({ href, children, ...props }) => {
  const { routeIs } = useRouterFacade();
  console.log("🚀 ~ NavLink");
  // RENDER
  return (
    <Link
      {...props}
      href={href}
      style={{ color: routeIs(href) ? "#0092dd" : "inherit" }}
    >
      {children}
    </Link>
  );
};

export default React.memo(NavLink);
