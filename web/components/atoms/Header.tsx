import React from "react";
import { LuGlobe } from "react-icons/lu";
//
import TheLogo from "./TheLogo";
import TypedLink from "./TypedLink";
import AvatarMenu from "./AvatarMenu";
import { useRouterFacade } from "@/hooks/useRouterFacade";

type PropsType = {
  compact?: boolean;
};

const Header: React.FC<PropsType> = ({ compact }) => {
  const { shallow } = useRouterFacade();
  console.log("🚀 ~ Header");
  // RENDER
  return (
    <section className="root-container py-2">
      <div className="flex-center-between root-wrapper">
        <figure className="flex h-20 flex-1 items-center">
          <TypedLink href="home" title="Home" className="inline-block">
            <TheLogo />
          </TypedLink>
        </figure>
        <nav className="flex-center-center flex-1 gap-4 font-medium">
          <button onClick={() => shallow({ forRent: true })}>For Rent</button>
          <button
            onClick={() => shallow({ onSale: true })}
            className="text-mutedText ghost-hover px-4 py-2"
          >
            On Sale
          </button>
        </nav>
        <ul className="flex-center-end flex-1 gap-4">
          <li className="ghost-hover px-3.5 py-2 text-sm font-medium">
            Agent Console
          </li>
          <li className="ghost-hover p-2">
            <LuGlobe />
          </li>
          <li>
            <AvatarMenu />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default React.memo(Header);
