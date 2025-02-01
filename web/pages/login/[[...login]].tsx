import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";

const Login: NextPageWithLayout = () => {
  console.log("🚀 ~ Login");
  // RENDER
  return <h1>Login</h1>;
};

Login.getLayout = getGuestLayout;

export default Login;
