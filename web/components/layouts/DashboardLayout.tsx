import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ DashboardLayout");
  // RENDER
  return <div className="">{children}</div>;
};

export default DashboardLayout;

export function getDashboardLayout(page: ReactElement) {
  return (
    <AppLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </AppLayout>
  );
}
