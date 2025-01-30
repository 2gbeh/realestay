import type { PropsWithChildren, ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type { GetStaticProps, GetServerSideProps } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type LayoutPropsType = PropsWithChildren

export type PagePropsType = {
  title?: string;
};
