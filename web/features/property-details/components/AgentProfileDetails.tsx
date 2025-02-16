import React from "react";
import { LuMapPin } from "react-icons/lu";

type PropsType = {};

const AgentProfileDetails: React.FC<PropsType> = () => {
  console.log("🚀 ~ AgentProfileDetails");
  // RENDER
  return (
    <div className="flex-1 space-y-4">
      <div>
        <h3 className="text-lg font-medium">Fabiana is a Superhost</h3>
        <p className="">
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium">Host details</h3>
        <p>Response rate: 100%</p>
        <p>Responds within an hour</p>
      </div>
      <button className="btn">Message host</button>
      <small className="block">
        You can message the host in Chinese, and Airbnb provides a translation
        function
      </small>
      <div className="flex gap-2 border-t py-5">
        <LuMapPin className="mt-1" size={32} />
        <small>
          To help protect your payment, always use Airbnb to send money and
          communicate with hosts.
        </small>
      </div>
    </div>
  );
};

export default React.memo(AgentProfileDetails);
