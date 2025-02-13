import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import SearchBar from "@/components/molecules/SearchBar";
import FiltersToolbar from "@/components/molecules/FiltersToolbar";
import PropertyCard from "@/features/properties/components/PropertyCard";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <main>
      <div className="border-b"></div>
      <FiltersToolbar />
      <section className="rootContainer">
        <div className="rootWrapper gridTwoFourSix gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <PropertyCard key={i} />
          ))}
        </div>
      </section>
      <div className="flexCenterCenter my-10 flex-col space-y-4">
        <p className="text-lg">Continue exploring new homes</p>
        <button className="btn">Show more</button>
      </div>
    </main>
  );
};

Home.getLayout = getGuestLayout;

export default Home;
