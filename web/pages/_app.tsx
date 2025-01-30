import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux";
//
import { APP } from "@/constants/APP";
import { NextPageWithLayout } from "@/types/common.types";
import store from "@/store";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // console.log("🚀 ~ MyApp ~ pageProps:", pageProps);
  return getLayout(
    <ReduxProvider store={store}>
      <Head>
        <title>
          {pageProps?.title ? `${pageProps.title} | ${APP.name}` : APP.name}
        </title>
      </Head>
      <Component {...pageProps} />
    </ReduxProvider>,
  );
}
