import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";
import Banner from "../molecules/Banner";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

const GuestLayout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ GuestLayout");
  // RENDER
  return (
    <>
      <Banner />
      <Header />
      {children}
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
