import React from "react";
import { LuPackage, LuShieldCheck } from "react-icons/lu";

type PropsType = {};

const AgentProfileCard: React.FC<PropsType> = () => {
  console.log("🚀 ~ AgentProfileCard");
  // RENDER
  return (
    <div className="flexColCenterCenter flex-1 rounded-lg border shadow-lg">
      <figure className="space-y-3">
        <div className="relative">
          <img
            src="/images/my-avatar.png"
            alt=""
            className="dim-32 rounded-full"
          />
          <i className="dim-8 flexCenterCenter absolute bottom-2 right-0 rounded-full bg-red-500">
            <LuShieldCheck color="white" size={20} />
          </i>
        </div>
        <figcaption className="flexColCenter">
          <h1 className="text-3xl font-bold">Emanuel</h1>
          <p className="flexCenter gap-1 text-sm">
            <LuPackage />
            Superhost
          </p>
        </figcaption>
      </figure>
      <ul className="flexCenterBetween mt-5 w-[320]">
        <li className="flexColCenter">
          <strong className="text-lg">207</strong>
          <small>Reviews</small>
        </li>
        <li className="flexColCenter">
          <strong className="text-lg">4.8</strong>
          <small>Rating</small>
        </li>
        <li className="flexColCenter">
          <strong className="text-lg">6 years</strong>
          <small>Hosting</small>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(AgentProfileCard);
