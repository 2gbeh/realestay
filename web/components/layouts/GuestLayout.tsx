import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";

const GuestLayout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ GuestLayout");
  // RENDER
  return <div className="">{children}</div>;
};

export default GuestLayout;

export function getGuestLayout(page: ReactElement) {
  return (
    <AppLayout>
      <GuestLayout>{page}</GuestLayout>
    </AppLayout>
  );
}
