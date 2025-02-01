import React, { ReactElement } from "react";
//
import AppLayout from "./AppLayout";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ AuthLayout");
  // RENDER
  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;

export function getAuthLayout(page: ReactElement) {
  return (
    <AppLayout>
      <AuthLayout>{page}</AuthLayout>
    </AppLayout>
  );
}
