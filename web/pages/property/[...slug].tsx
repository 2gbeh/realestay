import { useRouter } from "next/router";
import {
  LuCalendarFold,
  LuChevronDown,
  LuChevronRight,
  LuHeart,
  LuKeyRound,
  LuMapPin,
  LuPackage,
  LuShare,
  LuShieldCheck,
  LuStar,
} from "react-icons/lu";
import type { NextPageWithLayout } from "@/types/common.types";
import { getGuestLayout } from "@/components/layouts/GuestLayout";
import Avatar from "@/components/atoms/Avatar";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import {
  PropertyMap,
  AgentProfileCard,
  AgentProfileDetails,
  Policy,
} from "@/features/property-details";

const PropertyDetails: NextPageWithLayout = () => {
  const router = useRouter();
  console.log("🚀 ~ PropertyDetails", router.query);
  // RENDER
  return (
    <>
      <main className="rootContainer py-10">
        <div className="rootWrapperLg space-y-10">
          <section className="flexCenterBetween">
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
          <div className="flex gap-20">
            <section className="flex-1">
              <div className="flex">
                <div className="flex-1">
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
                </div>
              </div>
              {/*  */}
              <div className="border-b border-t py-5">
                <figure className="flexCenter gap-5">
                  <Avatar />
                  <figcaption className="-space-y-1">
                    <strong>Hosted by Fabiana</strong>
                    <p className="mutedText">
                      Superhost &bull; 6 years hosting
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/*  */}
              <ul className="space-y-5">
                <li className="flex gap-5">
                  <LuKeyRound size={24} />
                  <hgroup>
                    <h3 className="font-medium">
                      Exceptional check-in experience
                    </h3>
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
                      100% of guests in the past year gave this location a
                      5-star rating.
                    </p>
                  </hgroup>
                </li>
                <li className="flex gap-5">
                  <LuCalendarFold size={24} />
                  <hgroup>
                    <h3 className="font-medium">
                      Free cancellation before Mar 4
                    </h3>
                    <p className="mutedText">
                      Get a full refund if you change your mind.
                    </p>
                  </hgroup>
                </li>
              </ul>
              {/*  */}
              <div className="border-t"></div>
              <div>
                <h1>What this place offers</h1>
                <ul className="gridTwo gap-3">
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
              </div>
            </section>
            <aside className="flex-1 self-start rounded-lg border px-8 py-5 shadow-xl">
              <div className="flexEnd gap-1">
                <h2 className="text-2xl font-medium">$87</h2>
                <p>night</p>
              </div>
              <div className="flexCenter mt-5">
                <div className="flexCol flex-1 rounded-tl-xl border px-4 py-2 text-sm">
                  <strong className="">CHECK-IN</strong>
                  <small>3/5/2025</small>
                </div>
                <div className="flexCol flex-1 rounded-tr-xl border px-4 py-2 text-sm">
                  <strong className="">CHECKOUT</strong>
                  <small>3/10/2025</small>
                </div>
              </div>
              <div className="flexCenterBetween rounded-bl-xl rounded-br-xl border border-t-0 px-4 py-2">
                <div className="flexCol">
                  <strong className="text-sm">GUEST</strong>
                  <small>1 guest</small>
                </div>
                <LuChevronDown size={20} />
              </div>
              <button className="btn mt-5 w-full rounded-full">Reserve</button>
              <p className="text-sm_ mutedText mt-4 text-center">
                You won't be charged yet
              </p>
              <ul className="mt-5 space-y-4">
                <li className="flexCenterBetween">
                  <span className="underline">$87 x 5 nights</span>
                  <span>$437</span>
                </li>
                <li className="flexCenterBetween">
                  <span className="underline">Cleaning fee</span>
                  <span>$53</span>
                </li>
                <li className="flexCenterBetween">
                  <span className="underline">Airbnb service fee</span>
                  <span>$80</span>
                </li>
              </ul>
              <div className="flexCenterBetween mt-5 border-t py-5 font-medium">
                <span>Total before taxes</span>
                <span>$570</span>
              </div>
            </aside>
          </div>
          <div className="border-t"></div>
          <section>
            <h2 className="flexCenter text-xl font-medium">
              <LuStar /> 5.0 &bull; 4 reviews
            </h2>
            <ul className="flexCenterBetween">
              {[
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
              ].map((item, i) => (
                <li key={i} className="flex flex-col gap-4">
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                  <i>{item.icon}</i>
                </li>
              ))}
            </ul>
          </section>
          {/*  */}
          <div className="border-t"></div>
          <section>
            <ul className="gridTwo gap-5">
              {[
                {
                  avatar: "/uploads/nicolas.png",
                  displayName: "Nicolas Kage",
                  timeAgo: "6 days ago",
                  rating: 3,
                  review:
                    "Very good house, good location, easy access to all the beaches, quiet and quiet neighborhood, I will certainly come back more often!",
                },
                {
                  avatar: "/uploads/deisi.png",
                  displayName: "Deisi Bhabi",
                  timeAgo: "6 days ago",
                  rating: 3,
                  review:
                    "The house is wonderful, with impeccable hygiene, is located close to the beaches. Fabiana and Fabrício extremely available and super friendly. The house is",
                },
                {
                  avatar: "/uploads/alexandre.png",
                  displayName: "Alexandre Defoe",
                  timeAgo: "6 days ago",
                  rating: 3,
                  review:
                    "Wonderful place! Very quiet easy access to various beaches in the region! We will return with ctz",
                },
                {
                  avatar: "/uploads/pedro.png",
                  displayName: "Pedro Alex",
                  timeAgo: "6 days ago",
                  rating: 3,
                  review:
                    "Casa is great, even better than description and photos; very attentive, easy-to communicate and helpful hosts for everything; it was 100%… I highly recommend it!!!",
                },
              ].map((item, i) => (
                <li key={i} className="space-y-3">
                  <figure className="flexCenter gap-4">
                    <img
                      src={item.avatar}
                      alt=""
                      className="dim-12 rounded-full"
                    />
                    <figcaption>
                      <h3 className="text-lg">{item.displayName}</h3>
                      <p className="flexCenter mutedText gap-2 text-sm">
                        {item.rating} Stars &bull;
                        <time dateTime="">{item.timeAgo}</time>
                      </p>
                    </figcaption>
                  </figure>
                  <article className="">{item.review}</article>
                </li>
              ))}
            </ul>
          </section>
          {/*  */}
          <div className="border-t"></div>
          <PropertyMap />
          {/*  */}
          <div className="border-t"></div>
          <section className="space-y-5">
            <h2 className="text-xl font-medium">Meet your host</h2>
            <div className="flex gap-10">
              <AgentProfileCard />
              <AgentProfileDetails />
            </div>
          </section>
          {/*  */}
          <div className="border-t"></div>
          <Policy />
        </div>
      </main>
      <section className="rootContainer border-b border-t bg-gray-100">
        <div className="rootWrapperLg py-5">
          <Breadcrumb
            trail={["Airbnb", "Brazil", "State of Santa Catarina", "Garopaba"]}
          />
        </div>
      </section>
    </>
  );
};

PropertyDetails.getLayout = getGuestLayout;

export default PropertyDetails;
