import React from "react";
import Link from "next/link";
import clsx from "clsx";

type PropsType = {};

const FooterExtended: React.FC<PropsType> = () => {
  console.log("🚀 ~ FooterExtended");
  // RENDER
  return (
    <div className="rootContainer border-b border-gray-300 py-16">
      <div className="rootWrapperLg space-y-10">
        {/* CATEGORIES */}
        <div className="space-y-5">
          <h2 className="text-xl font-medium">
            Inspiration for future getaways
          </h2>
          <ul className="flexCenterBetween gap-5 border-b border-gray-300">
            {[
              "Popular",
              "Arts & culture",
              "Outdoors",
              "Mountains",
              "Beach",
              "Unique stays",
              "Categories",
              "Things to do",
              "Travel tips & inspiration",
              // "Airbnb-friendly apartments",
            ].map((item, i) => (
              <li
                key={i}
                className={clsx(
                  "whitespace-nowrap border-b-2 pb-2",
                  i < 1 ? "border-black" : "border-transparent mutedText hover:text-black",

                )}
              >
                <Link href="" className="">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* LOCATIONS */}
        <ul className="gridTwoSix gap-5">
          {[
            { title: "Canmore", subtitle: "Condo rentals" },
            { title: "Benalmádena", subtitle: "Beach house rentals" },
            { title: "Marbella", subtitle: "House rentals" },
            { title: "Mijas", subtitle: " Apartment rentals" },
            { title: "Prescott", subtitle: " Cabin rentals" },
            { title: "Scottsdale", subtitle: " Mansion rentals" },
            { title: "Tucson", subtitle: " Apartment rentals" },
            { title: "Jasper", subtitle: " Cabin rentals" },
            { title: "Mountain View", subtitle: " Cabin rentals" },
            { title: "Devonport", subtitle: " Cottage rentals" },
            { title: "Mallacoota", subtitle: " Beach house rentals" },
            { title: "Ibiza", subtitle: " Vacation rentals" },
            { title: "Anaheim", subtitle: " Apartment rentals" },
            { title: "Monterey", subtitle: " Condo rentals" },
            { title: "Paso Robles", subtitle: " Cottage rentals" },
            { title: "Santa Barbara", subtitle: " Apartment rentals" },
            { title: "Sonoma", subtitle: "Cottage rentals" },
          ].map((item, i) => (
            <li key={i} className="">
              <strong>{item.title}</strong>
              <p className="mutedText">{item.subtitle}</p>
            </li>
          ))}
          <li>Show more</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(FooterExtended);
