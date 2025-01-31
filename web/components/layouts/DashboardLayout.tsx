import React, { ReactElement } from "react";
//
import { LayoutPropsType } from "@/types/common.types";
import AppLayout from "./AppLayout";

const DashboardLayout: React.FC<LayoutPropsType> = ({ children }) => {
  console.log("🚀 ~ DashboardLayout");
  // RENDER
  return <div className="px-5">{children}</div>;
};

export default DashboardLayout;

export function getDashboardLayout(page: ReactElement) {
  return (
    <AppLayout>
      <DashboardLayout>{page}</DashboardLayout>{" "}
    </AppLayout>
  );
}
