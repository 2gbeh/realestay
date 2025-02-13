import React from "react";
import Image from "next/image";
// 
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  console.log("🚀 ~ Navbar");
  // RENDER
  return (
    <footer className="flex flex-wrap items-center justify-center gap-6 py-5">
      {[
        { label: "Home", path: "/" },
        { label: "Dashboard", path: "/dashboard" },
        { label: "DashboardCatchAll", path: "/dashboard/1/2" },
      ].map((item, i) => (
        <NavLink
          key={i}
          href={item.path}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {item.label}
        </NavLink>
      ))}
    </footer>
  );
};

export default React.memo(Navbar);
