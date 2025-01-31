import Image from "next/image";
//
import { getAuthLayout } from "@/components/layouts/AuthLayout";
import type {
  GetStaticProps,
  PagePropsType,
  NextPageWithLayout,
} from "@/types/common.types";

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  return { props: { title: "Home" } };
};

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
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
