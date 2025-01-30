import type { GetServerSideProps } from "next";
import Image from "next/image";
//
import type { NextPageWithLayout } from "./_app";
import { getAuthLayout } from "@/components/layouts/AuthLayout";

type ReturnType = {
  title?: string;
};

export const getStaticProps: GetServerSideProps<ReturnType> = async () => {
  return { props: { title: "Home" } };
};

const Home: NextPageWithLayout = () => {
  return (
    <Image
      className="dark:invert"
      src="/next.svg"
      alt="Next.js logo"
      width={180}
      height={38}
      priority
    />
  );
};

Home.getLayout = getAuthLayout;

export default Home;
