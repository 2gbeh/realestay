import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Banner from "@/components/atoms/Banner";
import Header from "@/components/atoms/Header";
import SearchBar from "@/components/atoms/SearchBar";
import FiltersToolbar from "@/components/atoms/FiltersToolbar";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <>
      <Banner />
      <Header />
      <main>
        <div className="border-b"></div>
        <FiltersToolbar />
      </main>
    </>
  );
};

Home.getLayout = getGuestLayout;

export default Home;
