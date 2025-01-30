import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";

type PropsType = PropsWithChildren;

const DashboardLayout: React.FC<PropsType> = ({ children }) => {
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
