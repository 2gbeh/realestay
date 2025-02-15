import { useRouter } from "next/router";
import {
  LuCalendarFold,
  LuHeart,
  LuKeyRound,
  LuMapPin,
  LuPackage,
  LuShare,
  LuStar,
} from "react-icons/lu";
import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Avatar from "@/components/atoms/Avatar";

const PropertyDetails: NextPageWithLayout = () => {
  const router = useRouter();
  console.log("🚀 ~ PropertyDetails", router.query);
  // RENDER
  return (
    <main className="rootContainer">
      <div className="rootWrapperLg space-y-5">
        <section className="flexCenterBetween mt-10">
          <h1 className="text-2xl font-medium">
            Beautiful house, complete and with a hydro tub
          </h1>
          <div className="flexCenter gap-5">
            <i className="flexCenter gap-2 underline">
              <LuShare />
              Share
            </i>
            <i className="flexCenter gap-2 underline">
              <LuHeart /> Save
            </i>
          </div>
        </section>
        <section className="flexCenter gap-2">
          <figure className="flex-1">
            <img src="/images/image.png" alt="" width="100%" />
          </figure>
          <div className="flex-1 space-y-2">
            <figure className="flexCenter gap-2">
              <img src="/images/image.png" alt="" width="100%" />
              <img src="/images/image.png" alt="" width="100%" />
            </figure>
            <figure className="flexCenter gap-2">
              <img src="/images/image.png" alt="" width="100%" />
              <img src="/images/image.png" alt="" width="100%" />
            </figure>
          </div>
        </section>
        {/*  */}
        <section>
          <h2 className="text-xl font-medium">
            Entire home in Garopaba, Brazil
          </h2>
          <p className="mutedText">
            7 guests &bull; 3 bedrooms &bull; 3 beds &bull; 3 baths
          </p>
          <div className="flexCenter gap-2">
            <LuStar />
            5.0 &bull; <span className="underline">4 reviews</span>
          </div>
        </section>
        {/*  */}
        <section>
          <div className="border-t"></div>
          <figure className="flexCenter gap-5">
            <Avatar />
            <figcaption className="-space-y-1">
              <strong>Hosted by Fabiana</strong>
              <p className="mutedText">Superhost &bull; 6 years hosting</p>
            </figcaption>
          </figure>
          <div className="border-t"></div>
        </section>
        {/*  */}
        <ul className="space-y-5">
          <li className="flex gap-5">
            <LuKeyRound size={24} />
            <hgroup>
              <h3 className="font-medium">Exceptional check-in experience</h3>
              <p className="mutedText">
                Recent guests gave the check-in process a 5-star rating.
              </p>
            </hgroup>
          </li>
          <li className="flex gap-5">
            <LuMapPin size={24} />
            <hgroup>
              <h3 className="font-medium">Unbeatable location</h3>
              <p className="mutedText">
                100% of guests in the past year gave this location a 5-star
                rating.
              </p>
            </hgroup>
          </li>
          <li className="flex gap-5">
            <LuCalendarFold size={24} />
            <hgroup>
              <h3 className="font-medium">Free cancellation before Mar 4</h3>
              <p className="mutedText">
                Get a full refund if you change your mind.
              </p>
            </hgroup>
          </li>
        </ul>
        <div className="border-t"></div>
        {/*  */}
        <section>
          <h1>What this place offers</h1>
          <ul className="gridTwo">
            {[
              "Kitchen",
              "Wifi",
              "Dedicated workspace",
              "Free parking on premises",
              "Pets allowed",
              "TV",
              "Free washer – In unit",
              "Exterior security cameras on property",
              "Carbon monoxide alarm",
              "Smoke alarm",
            ].map((item, i) => (
              <li key={i} className="flexCenter gap-2">
                <LuPackage />
                {item}
              </li>
            ))}
          </ul>
          <button className="btnOutline">Show all 33 amenities</button>
        </section>
      </div>
    </main>
  );
};

PropertyDetails.getLayout = getGuestLayout;

export default PropertyDetails;
