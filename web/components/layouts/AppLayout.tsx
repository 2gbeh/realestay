import React, { PropsWithChildren, ReactElement } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../atoms/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type PropsType = PropsWithChildren;

const AppLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;

export function getAppLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
