import Image from "next/image";
import { LuHouse } from "react-icons/lu";
//
import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Banner from "@/components/atoms/Banner";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <main>
      <Banner />
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

Home.getLayout = getGuestLayout;

export default Home;
