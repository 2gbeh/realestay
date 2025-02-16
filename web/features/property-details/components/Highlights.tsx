import React from "react";
import { LuCalendarFold, LuKeyRound, LuMapPin } from "react-icons/lu";

type PropsType = {};

const Highlights: React.FC<PropsType> = () => {
  console.log("🚀 ~ Highlights");
  // RENDER
  return (
    <ul className="space-y-5">
      <li className="flex gap-5">
        <LuKeyRound size={24} />
        <hgroup>
          <h3 className="font-medium">Exceptional check-in experience</h3>
          <p className="mutedText">
            Recent guests gave the check-in process a 5-star rating.
          </p>
        </hgroup>
      </li>
      <li className="flex gap-5">
        <LuMapPin size={24} />
        <hgroup>
          <h3 className="font-medium">Unbeatable location</h3>
          <p className="mutedText">
            100% of guests in the past year gave this location a 5-star rating.
          </p>
        </hgroup>
      </li>
      <li className="flex gap-5">
        <LuCalendarFold size={24} />
        <hgroup>
          <h3 className="font-medium">Free cancellation before Mar 4</h3>
          <p className="mutedText">
            Get a full refund if you change your mind.
          </p>
        </hgroup>
      </li>
    </ul>
  );
};

export default React.memo(Highlights);
