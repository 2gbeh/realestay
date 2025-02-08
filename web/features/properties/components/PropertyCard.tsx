import React from "react";
import Link from "next/link";
import clsx from "clsx";
//
import { TodoEntity, TodosPipe } from "@/store/todos";
import { LuChevronLeft, LuChevronRight, LuHeart } from "react-icons/lu";

type PropsType = {};

const PropertyCard: React.FC<PropsType> = ({}) => {
  // const transformed = TodosPipe.transform(todo);
  console.log("🚀 ~ PropertyCard");
  // RENDER
  return (
    <div className="border">
      <figure className="relative rounded-full">
        <i className="absolute right-5 top-5">
          <LuHeart size={20} />
        </i>
        <img src="/images/image.png" alt="" width="100%" />
        <div className="">
          <i className="">
            <LuChevronLeft />
          </i>
          <i className="">
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
      <hgroup className="flexCenterBetween">
        <h1 className="font-medium">North Topsail Beach, North Carolina, US</h1>
        <time dateTime="2025-02-23" className="text-sm text-muted">
          Feb 23
        </time>
      </hgroup>
      <p className="textMuted">8,913 kilometers away</p>
      <p className="">N 350,000/yr</p>
    </div>
  );
};

export default React.memo(PropertyCard);
