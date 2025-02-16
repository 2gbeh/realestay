import React from "react";
import { LuChevronRight } from "react-icons/lu";

type PropsType = { trail: string[] };

const Breadcrumbs: React.FC<PropsType> = ({ trail }) => {
  let lastIndex = trail.length - 1;
  console.log("🚀 ~ Breadcrumbs");
  // RENDER
  return (
    <ul className="flexCenter gap-2">
      {trail.map((item, i) => (
        <li key={i} className="flexCenter gap-2">
          <p>{item}</p>
          {i < lastIndex && <LuChevronRight />}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Breadcrumbs);
