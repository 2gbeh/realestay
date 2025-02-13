import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useMantineColorScheme } from "@mantine/core";
import Logo from "../atoms/Logo";
import TypedLink from "../atoms/TypedLink";
//
import AvatarMenu from "./AvatarMenu";
import { useRouterFacade } from "@/hooks/useRouterFacade";

type PropsType = {
  compact?: boolean;
};

const Header: React.FC<PropsType> = ({ compact }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const { shallow } = useRouterFacade();
  console.log("🚀 ~ Header");
  // RENDER
  return (
    <section className="rootContainer bg-white py-2">
      <div className="flexCenterBetween rootWrapper">
        <figure className="flex h-20 flex-1 items-center">
          <TypedLink href="home" title="Home" className="inline-block">
            <Logo />
          </TypedLink>
        </figure>
        <nav className="flexCenterCenter flex-1 gap-4 font-medium">
          <button onClick={() => shallow({ forRent: true })}>For Rent</button>
          <button
            onClick={() => shallow({ onSale: true })}
            className="boxRoundedOnHover mutedText px-4 py-2"
          >
            On Sale
          </button>
        </nav>
        <ul className="flexCenterEnd flex-1 gap-4">
          <li className="boxRoundedOnHover px-3.5 py-2 text-sm font-medium">
            Agent Portal
          </li>
          <li
            className="boxRounded p-1.5"
            title="Theme"
            onClick={toggleColorScheme}
          >
            {colorScheme === "light" ? <LuMoon /> : <LuSun />}
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
