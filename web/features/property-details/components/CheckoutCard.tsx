import React from "react";
import { LuChevronDown } from "react-icons/lu";

type PropsType = {};

const CheckoutCard: React.FC<PropsType> = () => {
  console.log("🚀 ~ CheckoutCard");
  // RENDER
  return (
    <aside className="flex-1 self-start rounded-lg border px-8 py-5 shadow-xl">
      <div className="flexEnd gap-1">
        <h2 className="text-2xl font-medium">$87</h2>
        <p>night</p>
      </div>
      <div className="flexCenter mt-5">
        <div className="flexCol flex-1 rounded-tl-xl border px-4 py-2 text-sm">
          <strong className="">CHECK-IN</strong>
          <small>3/5/2025</small>
        </div>
        <div className="flexCol flex-1 rounded-tr-xl border px-4 py-2 text-sm">
          <strong className="">CHECKOUT</strong>
          <small>3/10/2025</small>
        </div>
      </div>
      <div className="flexCenterBetween rounded-bl-xl rounded-br-xl border border-t-0 px-4 py-2">
        <div className="flexCol">
          <strong className="text-sm">GUEST</strong>
          <small>1 guest</small>
        </div>
        <LuChevronDown size={20} />
      </div>
      <button className="btn mt-5 w-full rounded-full">Reserve</button>
      <p className="text-sm_ mutedText mt-4 text-center">
        You won't be charged yet
      </p>
      <ul className="mt-5 space-y-4">
        <li className="flexCenterBetween">
          <span className="underline">$87 x 5 nights</span>
          <span>$437</span>
        </li>
        <li className="flexCenterBetween">
          <span className="underline">Cleaning fee</span>
          <span>$53</span>
        </li>
        <li className="flexCenterBetween">
          <span className="underline">Airbnb service fee</span>
          <span>$80</span>
        </li>
      </ul>
      <div className="flexCenterBetween mt-5 border-t py-5 font-medium">
        <span>Total before taxes</span>
        <span>$570</span>
      </div>
    </aside>
  );
};

export default React.memo(CheckoutCard);
