import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Banner from "@/components/molecules/Banner";
import Header from "@/components/molecules/Header";
import SearchBar from "@/components/molecules/SearchBar";
import FiltersToolbar from "@/components/molecules/FiltersToolbar";
import Footer from "@/components/molecules/Footer";
import PropertyCard from "@/features/properties/components/PropertyCard";

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
        <section className="rootContainer">
          <div className="rootWrapper gridTwoFourSix gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <PropertyCard key={i} />
            ))}
          </div>
          <div>
            <p>Continue exploring new homes</p>
            <button>Show more</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

Home.getLayout = getGuestLayout;

export default Home;
