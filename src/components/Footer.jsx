import React, { useState } from "react";
import Link from "next/link";
import Logo from "../assets/images/instincthub.png";
import { SVGs } from "../assets/svgs/SVGs";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="footer_wrap container">
        <div className="quick_links it_logo">
          <img src={Logo} alt="InstinctHub" className="InstinctHub_foot" />

          <p>
            We are a registered as a private professional skills acquisition
            centre under Companies and Allied Matters Act 1990
          </p>
        </div>
        <div className="quick_links">
          <ul>
            <h5>Instincthub</h5>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/products/pricing/">Pricing</Link>
            </li>
            <li>
              <Link href="https://skills.instincthub.com/">Courses</Link>
            </li>
            <li>
              <Link href="https://skills.instincthub.com/course/tracks/list/">
                Track
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="quick_links">
          <ul>
            <h5>Helpful Links</h5>

            <li>
              <Link href="/policies/privacy-policy/">Policies</Link>
            </li>
            <li>
              <Link href="/policies/community-guidelines/">
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link href="/policies/refund-policy/">Refund Policy</Link>
            </li>
          </ul>
        </div>
        <div className="quick_links last-media">
          <ul>
            <h5>Contact us</h5>
            <li className="location">
              <Link
                href="https://www.google.com/maps/place/InstinctHub/@6.4567629,3.4093087,17z/data=!4m6!3m5!1s0x103b8b3555484bdd:0xa21382f2f337171d!8m2!3d6.4567576!4d3.4118836!16s%2Fg%2F11jnld7s4m"
                target="_blank"
              >
                No 1. Apapa lane, Dolphin Estate, Ikoyi, Lagos
              </Link>
            </li>
            <li className="phone">
              <Link href="tel:+2348162880409" target="_blank" rel="noopener">
                (+234) 816 288 0409
              </Link>
            </li>
            {/* <br></br> */}
            <li>
              <Link href="tel:+23490164140911" target="_blank" rel="noopener">
                (+234) 901 641 40911
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" container">
        <div className="foot_label reserved_foot">
          <div className="main">
            <h5>© {getCurrentYear()} All right reserved</h5>
            <ul>
              <li>
                <Link href="/policies/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/policies/terms-and-conditions/">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          <div className="media">
            <Link
              href="https://wa.me/message/5IA2QYCI53SUM1"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.whatsapp} alt="ig" />
            </Link>
            <Link
              href="https://twitter.com/instincthub/"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.twitter} alt="ig" />
            </Link>
            <Link
              href="https://facebook.com/instincthub"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.facebook} alt="ig" />
            </Link>
            <Link
              href="https://instagram.com/instincthub_"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.instagram} alt="ig" />
            </Link>
            <Link
              href="https://linkedin.com/company/instincthub"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.linkedin} alt="ig" />
            </Link>
            <Link
              href="https://youtube.com/instincthub"
              blank="_blank"
              rel="noreferrer"
            >
              <img src={SVGs.youtube} alt="ig" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
