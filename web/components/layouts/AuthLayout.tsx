import React, { PropsWithChildren, ReactElement } from "react";
import Image from "next/image";
import AppLayout from "./AppLayout";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ AuthLayout");
  // RENDER
  return (
    <div className="flexCentered bg-gray-50">
      <div className="flex h-full w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
        <aside className="w-1/2 bg-white">{children}</aside>
        <figure className="relative w-1/2">
          <Image
            src="/images/map.png"
            alt=""
            objectFit="cover"
            layout="fill"
            className="rounded-r-lg"
          />
        </figure>
      </div>
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
