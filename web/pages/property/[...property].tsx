import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";

const PropertyDetails: NextPageWithLayout = () => {
  console.log("🚀 ~ PropertyDetails");
  // RENDER
  return <h1>PropertyDetails</h1>;
};

PropertyDetails.getLayout = getGuestLayout;

export default PropertyDetails;
