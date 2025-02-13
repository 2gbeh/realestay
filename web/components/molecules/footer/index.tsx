import React from "react";
import Link from "next/link";
import { LuGlobe } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
//
import { FOOTER } from "./constant";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  console.log("🚀 ~ Footer");
  // RENDER
  return (
    <footer className="rootContainer">
      <div className="rootWrapperLg space-y-10">
        <h2 className="font-medium text-xl">Inspiration for future getaways</h2>
        <ul>
          {FOOTER.categories.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <ul>
          {FOOTER.locations.map((item, i) => (
            <li key={i}>
              <strong>{item.title}</strong>
              <p>{item.subtitle}</p>
            </li>
          ))}
          <li>Show more</li>
        </ul>

        <section className="flexBetween">
          <div className="space-y-2">
            <strong>Support</strong>
            <ul className="space-y-2">
              {FOOTER.links.support.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <strong>Hosting</strong>
            <ul className="space-y-2">
              {FOOTER.links.hosting.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <strong>Airbnb</strong>
            <ul className="space-y-2">
              {FOOTER.links.internal.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flexCenterBetween py-5 border-t">
          <div className="flexCenter gap-2">
            <address className="font-medium">
              &copy; 2024 Realestay Ltd.
            </address>
            <Link href="">Terms</Link> &bull;
            <Link href="">Sitemap</Link> &bull;
            <Link href="">Privacy</Link> &bull;
            <Link href="">Your Privacy Choices</Link>
          </div>
          <div className="flexCenter gap-5">
            <div title="Choose a language" className="flexCenter gap-2">
              <LuGlobe />
              English (US)
            </div>
            <div title="Choose a currency">NGN</div>
            <div className="flexCenter gap-2.5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
