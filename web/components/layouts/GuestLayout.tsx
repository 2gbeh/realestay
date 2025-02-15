import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";
import Banner from "../molecules/Banner";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import SearchBar from "../molecules/SearchBar";
import { useRouterFacade } from "@/hooks/useRouterFacade";

const GuestLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { routeIs, shallowPush } = useRouterFacade();
  const isHomePath = routeIs("/");
  console.log("🚀 ~ GuestLayout");
  // RENDER
  return (
    <>
      {/* BANNER */}
      {isHomePath && <Banner />}

      {/* HEADER */}
      <Header>
        {isHomePath ? (
          <nav className="flexCenterCenter flex-1 gap-4 font-medium">
            <button onClick={() => shallowPush({ forRent: true })}>
              For Rent
            </button>
            <button
              onClick={() => shallowPush({ onSale: true })}
              className="boxRoundedOnHover mutedText px-4 py-2"
            >
              On Sale
            </button>
          </nav>
        ) : (
          <SearchBar compact />
        )}
      </Header>

      {/* SEARCH BAR */}
      {isHomePath && <SearchBar />}

      {/* MAIN */}
      <div className="border-b"></div>
      {children}

      {/* FOOTER */}
      <Footer extended />
    </>
  );
};

export default GuestLayout;

export function getGuestLayout(page: ReactElement) {
  return (
    <AppLayout>
      <GuestLayout>{page}</GuestLayout>
    </AppLayout>
  );
}
