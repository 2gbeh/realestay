import React from "react";
import { LuSearch } from "react-icons/lu";

type PropsType = {
  compact?: boolean;
};

const SearchBar: React.FC<PropsType> = ({ compact }) => {
  console.log("🚀 ~ SearchBar");
  // RENDER
  return compact ? (
    <div className="flexCenterCenter debug_">
      <div className="flexCenterBetween w-[480px] rounded-full border shadow">
        <input
          type="search"
          placeholder="Search ( / )"
          className="w-full bg-inherit min-h-[48px] pl-5 pr-2"
        />
        <button className="flexCenter btn mr-1.5 gap-2 rounded-full px-2.5 py-2.5">
          <LuSearch size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  ) : (
    <section className="flexCenterCenter pb-8">
      <div className="flexCenterBetween w-[786px] rounded-full border shadow-lg">
        <input
          type="search"
          placeholder="Search properties ( / )"
          className="w-full bg-inherit py-5 pl-8 pr-4"
        />
        <button className="flexCenter btn mr-2 gap-2 rounded-full">
          <LuSearch size={18} strokeWidth={3} />
          Search
        </button>
      </div>
    </section>
  );
};

export default React.memo(SearchBar);
