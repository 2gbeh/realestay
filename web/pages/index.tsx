import Image from "next/image";
import { LuHouse } from "react-icons/lu";
//
import { getAuthLayout } from "@/components/layouts/AuthLayout";
import type { NextPageWithLayout } from "@/types/common.types";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <main>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <LuHouse size={24} color="#555" />
    </main>
  );
};

Home.getLayout = getAuthLayout;

export default Home;
