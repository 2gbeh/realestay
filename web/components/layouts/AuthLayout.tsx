import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ AuthLayout");
  // RENDER
  return <div className="flexCentered">{children}</div>;
};

export default AuthLayout;

export function getAuthLayout(page: ReactElement) {
  return (
    <AppLayout>
      <AuthLayout>{page}</AuthLayout>
    </AppLayout>
  );
}
