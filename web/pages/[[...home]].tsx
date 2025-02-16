import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import FiltersToolbar from "@/components/molecules/FiltersToolbar";
import PropertyCard from "@/features/home/components/property-card";

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <main className="rootContainer">
      <div className="rootWrapper">
        <FiltersToolbar />
        <section className="mt-4">
          <div className="gridOneSix gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <PropertyCard key={i} />
            ))}
          </div>
        </section>
        <section className="flexCenterCenter my-10 flex-col space-y-4">
          <p className="text-lg">Continue exploring new homes</p>
          <button className="btn">Show more</button>
        </section>
      </div>
    </main>
  );
};

Home.getLayout = getGuestLayout;

export default Home;
