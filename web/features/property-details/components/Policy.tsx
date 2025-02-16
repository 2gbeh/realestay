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
        <div className="flex-1 space-y-2">
          <strong>House rules</strong>
          <ul className="space-y-2">
            <li>Check-in after 2:00 PM</li>
            <li>Checkout before 10:00 AM</li>
            <li>7 guests maximum</li>
            <li>
              <Link href="" className="flexCenter gap-1 font-medium underline">
                Show more <LuChevronRight />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 space-y-2">
          <strong>Safety & property</strong>
          <ul className="space-y-2">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
            <li>
              <Link href="" className="flexCenter gap-1 font-medium underline">
                Show more <LuChevronRight />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 space-y-2">
          <strong>Cancellation policy</strong>
          <ul className="space-y-2">
            <li>
              Free cancellation before Mar 4. Cancel before check-in on Mar 5
              for a partial refund.
            </li>
            <li>Review this Host's full policy for details.</li>
            <li>
              <Link href="" className="flexCenter gap-1 font-medium underline">
                Show more <LuChevronRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Policy);
