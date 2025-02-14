import React from "react";
import Link from "next/link";

type PropsType = {};

const FooterLinks: React.FC<PropsType> = () => {
  console.log("🚀 ~ FooterLinks");
  // RENDER
  return (
    <section className="flexBetween py-16">
      <div className="space-y-2">
        <strong>Support</strong>
        <ul className="space-y-2">
          {[
            "Help Center",
            "AirCover",
            "Anti-discrimination",
            "Disability support",
            "Cancellation options",
            "Report neighborhood concern",
          ].map((item, i) => (
            <li key={i}>
              <Link href="" className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <strong>Hosting</strong>
        <ul className="space-y-2">
          {[
            "Airbnb your home",
            "AirCover for Hosts",
            "Hosting resources",
            "Community forum",
            "Hosting responsibly",
            "Airbnb-friendly apartments",
            "Join a free Hosting class",
            "Find a co-host",
          ].map((item, i) => (
            <li key={i}>
              <Link href="" className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <strong>Airbnb</strong>
        <ul className="space-y-2">
          {[
            "Newsroom",
            "New features",
            "Careers",
            "Investors",
            "Gift cards",
            "Airbnb.org emergency stays",
          ].map((item, i) => (
            <li key={i}>
              <Link href="" className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(FooterLinks);
