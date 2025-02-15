import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
//
import { usePropertyCard } from "./hook";

type PropsType = {};

const PropertyCard: React.FC<PropsType> = () => {
  const {
    liked,
    toggleLiked,
    slide,
    setSlide,
    onPrevSlide,
    onNextSlide,
    gotoPropertyDetails,
  } = usePropertyCard();
  console.log("🚀 ~ PropertyCard");
  // RENDER
  return (
    <div className="_w-[260px]">
      <figure className="relative rounded-full">
        <i
          onClick={toggleLiked}
          className="absolute right-4 top-4 cursor-pointer"
        >
          {liked ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
        </i>
        <img
          src="/images/image.png"
          alt=""
          width="100%"
          onClick={gotoPropertyDetails}
        />
        <div className="">
          <i className="boxRounded dim-7 flexCenterCenter absolute left-4 top-40 shadow">
            <LuChevronLeft onClick={onPrevSlide} />
          </i>
          <i className="boxRounded dim-7 flexCenterCenter absolute right-4 top-40 shadow">
            <LuChevronRight onClick={onNextSlide} />
          </i>
        </div>
        <ul className="flexCenterCenter absolute bottom-3.5 w-full gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <li
              key={i}
              onClick={() => setSlide(i)}
              className={`dim-2-5 cursor-pointer rounded-full transition-colors ${slide === i ? "bg-gray-400" : "bg-gray-300"}`}
            ></li>
          ))}
        </ul>
      </figure>
      <div className="space-y-1 py-2">
        <hgroup className="flexBetween gap-2">
          <h1
            className="cursor-pointer font-medium hover:underline"
            onClick={gotoPropertyDetails}
          >
            North Topsail Beach, North Carolina, US
          </h1>
          <time dateTime="1970-01-01" className="mutedText whitespace-nowrap">
            Jan 1
          </time>
        </hgroup>
        <p className="mutedText text-sm">8,913 kilometers away</p>
        <p className="">N 350,000/yr</p>
      </div>
    </div>
  );
};

export default React.memo(PropertyCard);
