import "@/styles/globals.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { APP } from "@/constants/APP";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // console.log("🚀 ~ MyApp ~ pageProps:", pageProps);
  return getLayout(
    <>
      <Head>
        <title>
          {pageProps?.title ? `${pageProps.title} | ${APP.name}` : APP.name}
        </title>
      </Head>
      <Component {...pageProps} />
    </>,
  );
}
