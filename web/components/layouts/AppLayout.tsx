import React, { ReactElement } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
//
import ReduxProviderWrapper from "../providers/ReduxProviderWrapper";
import Navbar from "../atoms/Navbar";
import { LayoutPropsType } from "@/types/common.types";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const AppLayout: React.FC<LayoutPropsType> = ({ children }) => {
  console.log("🚀 ~ AppLayout");
  // RENDER
  return (
    // <div className={`${geistSans.variable} ${geistMono.variable}`}>
    <ReduxProviderWrapper>
      <Navbar />
      {children}
    </ReduxProviderWrapper>
  );
};

export default AppLayout;

export function getAppLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
