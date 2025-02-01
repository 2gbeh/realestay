import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";

const Property: NextPageWithLayout = () => {
  console.log("🚀 ~ Property");
  // RENDER
  return <h1>Property</h1>;
};

Property.getLayout = getGuestLayout;

export default Property;
