import { useRouter } from "next/router";
import {
  LuCalendarFold,
  LuKeyRound,
  LuMapPin,
  LuPackage,
  LuStar,
} from "react-icons/lu";
import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Avatar from "@/components/atoms/Avatar";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
//
import {
  Heading,
  PhotoGallery,
  Summary,
  CheckoutCard,
  PropertyMap,
  AgentProfileCard,
  AgentProfileDetails,
  Policy,
  Reviews,
  Ratings,
  Amenities,
  Highlights,
  AgentSummary,
} from "@/features/property-details";

const PropertyDetails: NextPageWithLayout = () => {
  const router = useRouter();
  console.log("🚀 ~ PropertyDetails", router.query);
  // RENDER
  return (
    <>
      <main className="rootContainer py-10">
        <div className="rootWrapperLg space-y-10">
          {/* HEADING */}
          <Heading />
          {/* GALLERY */}
          <PhotoGallery />
          {/* SUMMARY */}
          <section className="flex gap-20">
            <aside className="flex-1">
              <Summary />
              <AgentSummary />
              <Highlights />
              <div className="border-t"></div>
              <Amenities />
            </aside>
            {/* CHECKOUT */}
            <CheckoutCard />
          </section>
          {/* RATINGS */}
          <div className="border-t"></div>
          <Ratings />
          {/* REVIEWS */}
          <div className="border-t"></div>
          <Reviews />
          {/* GOOGLE MAP */}
          <div className="border-t"></div>
          <PropertyMap />
          {/* AGENT PROFILE */}
          <div className="border-t"></div>
          <section className="space-y-5">
            <h2 className="text-xl font-medium">Meet your host</h2>
            <div className="flex gap-10">
              <AgentProfileCard />
              <AgentProfileDetails />
            </div>
          </section>
          {/* POLICY */}
          <div className="border-t"></div>
          <Policy />
        </div>
      </main>
      {/* BREADCRUMBS */}
      <section className="rootContainer border-b border-t bg-gray-100">
        <div className="rootWrapperLg py-5">
          <Breadcrumbs
            trail={["Airbnb", "Brazil", "State of Santa Catarina", "Garopaba"]}
          />
        </div>
      </section>
    </>
  );
};

PropertyDetails.getLayout = getGuestLayout;

export default PropertyDetails;
