import React from "react";
import clsx from "clsx";
import { Switch } from "@mantine/core";
import { LuFilter, LuSettings2 } from "react-icons/lu";
import {
  FcAdvertising,
  FcAlarmClock,
  FcAreaChart,
  FcAssistant,
  FcBriefcase,
  FcCalendar,
  FcClapperboard,
  FcEngineering,
  FcFolder,
  FcGallery,
  FcLock,
  FcMms,
} from "react-icons/fc";

type PropsType = {};

const FiltersToolbar: React.FC<PropsType> = () => {
  console.log("🚀 ~ FiltersToolbar");
  // RENDER
  return (
    <section className="rootContainer">
      <div className="rootWrapper flexCenterBetween gap-10 py-5">
        <ul className="flexCenterBetween flex-1 gap-10">
          {filters.map((item, i) => (
            <li
              key={i}
              className={clsx(
                "flexColCenter cursor-pointer gap-1 border-b-2 pb-2 font-medium text-mutedText hover:border-mutedBorder hover:text-black",
                item?.active ? "border-black" : "border-transparent",
              )}
            >
              {item.icon}
              <p
                className={clsx({
                  "whitespace-nowrap text-sm hover:text-black": true,
                  "text-black": item?.active,
                })}
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 pb-2">
          <button className="btnOutline">
            <LuSettings2 />
            Filters
          </button>
          <button className="btnOutline">
            Add Caution Fee
            <Switch defaultChecked={false} color="" size="md" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FiltersToolbar);

const filters = [
  { icon: <FcAdvertising size={24} />, label: "New", active: true },
  { icon: <FcAlarmClock size={24} />, label: "Icons" },
  { icon: <FcAssistant size={24} />, label: "Design" },
  { icon: <FcAreaChart size={24} />, label: "Surfing" },
  { icon: <FcBriefcase size={24} />, label: "Windmills" },
  { icon: <FcCalendar size={24} />, label: "Arctic" },
  { icon: <FcClapperboard size={24} />, label: "Chef's kitchens" },
  { icon: <FcEngineering size={24} />, label: "Towers" },
  { icon: <FcFolder size={24} />, label: "Rooms" },
  { icon: <FcGallery size={24} />, label: "Play" },
  { icon: <FcLock size={24} />, label: "Castles" },
  { icon: <FcMms size={24} />, label: "Amazing pools" },
];
