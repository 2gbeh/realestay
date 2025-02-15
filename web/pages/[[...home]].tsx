import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import SearchBar from "@/components/molecules/SearchBar";
import FiltersToolbar from "@/components/molecules/FiltersToolbar";
import PropertyCard from "@/features/properties/components/property-card";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <main className="">
      <div className="border-b"></div>
      <FiltersToolbar />
      <section className="rootContainer mt-4">
        <div className="rootWrapper gridOneSix gap-8">
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
