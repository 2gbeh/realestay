import React from "react";
import { LuChevronLeft, LuChevronRight, LuHeart } from "react-icons/lu";
//
type PropsType = {};

const PropertyCard: React.FC<PropsType> = ({}) => {
  console.log("🚀 ~ PropertyCard");
  // RENDER
  return (
    <div className="border_">
      <figure className="relative rounded-full">
        <LuHeart size={20} className="absolute right-4 top-4" />
        <img src="/images/image.png" alt="" width="100%" />
        <div className="">
          <i className="boxRounded dim-7 flexCenterCenter absolute left-4 top-40 shadow">
            <LuChevronLeft size={20} />
          </i>
          <i className="boxRounded dim-7 flexCenterCenter absolute right-4 top-40 shadow">
            <LuChevronRight />
          </i>
        </div>
        <ul className="">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </figure>
      <div className="space-y-1 py-2">
        <hgroup className="flexBetween gap-5">
          <h1 className="font-medium">
            North Topsail Beach, North Carolina, US
          </h1>
          <time
            dateTime="2025-02-23"
            className="mutedText dim-8 flexColEnd -space-y-1 text-sm"
          >
            <span>Feb</span>
            <span>1</span>
          </time>
        </hgroup>
        <p className="mutedText text-sm">8,913 kilometers away</p>
        <p className="">N 350,000/yr</p>
      </div>
    </div>
  );
};

export default React.memo(PropertyCard);
