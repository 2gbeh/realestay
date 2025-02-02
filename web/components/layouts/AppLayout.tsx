import React, { ReactElement } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
//
import ReduxProvider from "../providers/ReduxProvider";
import MantineProvider from "../providers/MantineProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ AppLayout");
  // RENDER
  return (
    // <div className={`${geistSans.variable} ${geistMono.variable}`}>
    <ReduxProvider>
      <MantineProvider>{children}</MantineProvider>
    </ReduxProvider>
  );
};

export default AppLayout;

export function getAppLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
