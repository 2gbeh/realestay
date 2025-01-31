import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
//
import { APP } from "@/constants/APP";
import { NextPageWithLayout } from "@/types/common.types";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  // console.log("🚀 ~ MyApp", pageProps);
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
