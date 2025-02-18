import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import { LuPackage } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const Login: NextPageWithLayout = () => {
  console.log("🚀 ~ Login");
  // RENDER
  return (
    <main className="rootContainer">
      <div className="rootWrapperSm py-20">
        <form className="flexCol gap-5 rounded-xl border border-black pb-10">
          <p className="border-b p-5 text-center">Log in or sign up</p>
          <div className="flexCol gap-5 px-10">
            <h1 className="text-2xl font-medium">Welcome to Airbnb</h1>
            <div>
              <input
                type="email"
                placeholder="Enter email"
                className="inputAuth rounded-bl-none rounded-br-none border-b-0"
              />
              <input
                type="password"
                placeholder="Enter password"
                className="inputAuth rounded-tl-none rounded-tr-none"
              />
            </div>
            <small>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <a href="" className="underline">
                Privacy Policy
              </a>
            </small>
            <button className="btn block w-full">Continue</button>
            {/*  */}
            <div className="flexCenterCenter relative border-b border-black">
              <small className="absolute bg-white px-3 py-1">or</small>
            </div>
            <button className="flexCenterBetween border border-black py-2 px-5 rounded">
              <i className="flex-1">
                <FcGoogle size={24} />
              </i>
              <div className="flex-2">Continue with Google</div>
              <div className="flex-1">&nbsp;</div>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

Login.getLayout = getGuestLayout;

export default Login;
