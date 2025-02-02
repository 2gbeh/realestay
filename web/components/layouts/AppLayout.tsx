import React, { PropsWithChildren, ReactElement } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";
//
import ReduxProvider from "../providers/ReduxProvider";
import MantineProvider from "../providers/MantineProvider";
import { useMantineColorScheme } from "@mantine/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: apply font and theme
const AppLayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <div className={clsx(geistSans.variable, geistMono.variable, colorScheme)}>
      {children}
    </div>
  );
};

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ AppLayout");
  // RENDER
  return (
    <ReduxProvider>
      <MantineProvider>
        <AppLayoutContainer>{children}</AppLayoutContainer>
      </MantineProvider>
    </ReduxProvider>
  );
};

export default AppLayout;

export function getAppLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
