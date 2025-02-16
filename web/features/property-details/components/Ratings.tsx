import React from "react";
import { LuPackage, LuStar } from "react-icons/lu";

type PropsType = {};

const Ratings: React.FC<PropsType> = () => {
  console.log("🚀 ~ Ratings");
  // RENDER
  return (
    <section>
      <h2 className="flexCenter gap-2 text-xl font-medium">
        <LuStar /> 5.0 &bull; 4 reviews
      </h2>
      <ul className="flexCenterBetween mt-4">
        {ratings.map((item, i) => (
          <li key={i} className="flex flex-col gap-4">
            <hgroup>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </hgroup>
            {item.icon}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Ratings);

const ratings = [
  {
    label: "Cleanliness",
    value: "5.0",
    icon: <LuPackage size={32} />,
  },
  {
    label: "Accuracy",
    value: "5.0",
    icon: <LuPackage size={32} />,
  },
  {
    label: "Check-in",
    value: "5.0",
    icon: <LuPackage size={32} />,
  },
  {
    label: "Communication",
    value: "5.0",
    icon: <LuPackage size={32} />,
  },
  {
    label: "Location",
    value: "5.0",
    icon: <LuPackage size={32} />,
  },
  { label: "Value", value: "5.0", icon: <LuPackage size={32} /> },
];
