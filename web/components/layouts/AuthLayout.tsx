import React, { PropsWithChildren, ReactElement } from "react";
import AppLayout from "./AppLayout";

type PropsType = PropsWithChildren;

const AuthLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
