import React from "react";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

type PropsType = {};

const Policy: React.FC<PropsType> = () => {
  console.log("🚀 ~ Policy");
  // RENDER
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-medium">Things to know</h2>
      <div className="flexCenterBetween">
        {policies.map((item, i) => (
          <div className="flex-1 space-y-2" key={i}>
            <strong>{item.scope}</strong>
            <ul className="space-y-2">
              {item.terms.map((innerItem, j) => (
                <li key={j}>{innerItem}</li>
              ))}
            </ul>
            <Link
              href={"#/policy/" + item.id}
              className="flexCenter gap-1 font-medium underline"
            >
              Show more <LuChevronRight className="mt-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Policy);

const policies = [
  {
    id: 1,
    scope: "House rules",
    terms: [
      "Check-in after 2:00 PM",
      "Checkout before 10:00 AM",
      "7 guests maximum",
    ],
  },
  {
    id: 2,
    scope: "Safety & property",
    terms: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
  {
    id: 3,
    scope: "Cancellation policy",
    terms: [
      "Free cancellation before Mar 4. Cancel before check-in on Mar 5 for a partial refund.",
      "Review this Host's full policy for details.",
    ],
  },
];
