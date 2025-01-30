import React, { ReactElement } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
//
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
  return (
    // <div className={`${geistSans.variable} ${geistMono.variable}`}>
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;

export function getAppLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
