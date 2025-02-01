import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Banner from "@/components/atoms/Banner";
import Header from "@/components/atoms/Header";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <>
      <Banner />
      <Header />
      <div className="border-b"></div>
      <main></main>
    </>
  );
};

Home.getLayout = getGuestLayout;

export default Home;
