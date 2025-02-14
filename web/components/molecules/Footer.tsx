import React from "react";
import Link from "next/link";
import { LuGlobe } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
//
import FooterLinks from "./FooterLinks";
import FooterExtended from "./FooterExtended";

type PropsType = { extended?: boolean };

const Footer: React.FC<PropsType> = ({ extended }) => {
  console.log("🚀 ~ Footer");
  // RENDER
  return (
    <footer className="bg-gray-100">
      {/* EXTENDED */}
      {extended && <FooterExtended />}
      <div className="rootContainer">
        <div className="rootWrapperLg">
          {/* FOOTER LINKS */}
          <FooterLinks />

          {/* COPYRIGHT */}
          <section className="flexCenterBetween border-t border-gray-300 py-5">
            <div className="flexCenter gap-2">
              <address className="font-medium">
                &copy; 2024 Realestay Ltd.
              </address>
              <Link href="" className="hover:underline">
                Terms
              </Link>
              &bull;
              <Link href="" className="hover:underline">
                Sitemap
              </Link>
              &bull;
              <Link href="" className="hover:underline">
                Privacy
              </Link>
              &bull;
              <Link href="" className="hover:underline">
                Your Privacy Choices
              </Link>
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
      </div>
    </footer>
  );
};

export default React.memo(Footer);
