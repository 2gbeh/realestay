import React from "react";
import { LuChevronRight } from "react-icons/lu";

type PropsType = { trail: string[] };

const Breadcrumb: React.FC<PropsType> = ({ trail }) => {
  console.log("🚀 ~ Breadcrumb");
  // RENDER
  return (
    <ul className="flexCenter _text-sm gap-2">
      {trail.map((item, i) => (
        <li key={i} className="flexCenter gap-2">
          <p key={i}>{item}</p>
          {i < trail.length - 1 && <LuChevronRight />}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Breadcrumb);
