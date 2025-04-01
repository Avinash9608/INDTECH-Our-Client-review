import React from "react";
import footerLogo from "../../assets/images/footerlogo.svg"; // Import footer logo
import mapPinIcon from "../../assets/images/map_pin.svg"; // Import map pin icon
import emailIcon from "../../assets/images/email_2.svg"; // Import email icon
import callIcon from "../../assets/images/call.svg"; // Import call icon
import "swiper/scss/pagination";

const Footer = () => {
  return (
    <>
      <footer className="bodypx pb-5 py-80 footer-w">
        <div className="container-fluid mb-0 mt-1">
          <div className="row mt-md-0">
            <div className="col-md-12">
              <img className="footerlogo" src={footerLogo} alt="Footer Logo" />
            </div>
            <div className="col-sm-12 col-md-4" data-aos="fade-up">
              <div className="pt-5">
                <div className="d-flex align-items-baseline">
                  <div className="me-1">
                    <img
                      src={mapPinIcon}
                      alt="Address"
                      title=""
                      width="21"
                      height="20"
                      className="pe-1"
                    />
                  </div>
                  <h5 className="fn-face2 fn-16 text-white mb-2">
                    Shishwachak, Punpun, Patna (804453)
                  </h5>
                </div>
                <div className="mb-2">
                  <div className="d-flex align-items-baseline">
                    <div className="me-1">
                      <img
                        className="pe-1"
                        src={emailIcon}
                        alt="Email"
                        title=""
                        width="21"
                        height="20"
                      />
                    </div>
                    <a
                      className="fn-16 text-white"
                      href="mailto:info@indtechmark.com"
                      title="info@indtechmark.com"
                    >
                      info@indtechmark.com
                    </a>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex align-items-baseline">
                    <div className="me-1">
                      <img
                        className="pe-1"
                        src={callIcon}
                        alt="Call"
                        title=""
                        width="21"
                        height="20"
                      />
                    </div>
                    <a
                      className="fn-16 text-white"
                      href="tel:+91 6232 69 6232"
                      title="+91 6232 69 6232"
                    >
                      +91 6232 69 6232
                    </a>
                  </div>
                </div>

                <div className="socialLink">
                  <a
                    href="https://facebook.com/indtechmark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/indtechmark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/indtechmark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </a>
                  <a href="javascript:void(0);">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-8" data-aos="fade-up">
              <div className="d-md-flex justify-content-between pr-100">
                <div className="mt-4 mt-md-0">
                  <h4 className="fn-18 text-lgray3">Services</h4>
                  <ul className="f_link pb-0">
                    <li>
                      <a href="mobile-app-development">
                        Mobile App Development
                      </a>
                    </li>
                    <li>
                      <a href="web-development">Web Development</a>
                    </li>
                    <li>
                      <a href="digital-marketing-services">Digital Marketing</a>
                    </li>
                    <li className="d-none">
                      <a href="seo">Search Engine Optimization</a>
                    </li>
                    <li>
                      <a href="website-design-company">Web Designing</a>
                    </li>
                  </ul>
                </div>
                <div className="ipad-w">
                  <h4 className="fn-18 text-lgray3">Industries</h4>
                  <ul className="f_link pb-0">
                    <li>
                      <a href="healthcare">Healthcare</a>
                    </li>
                    <li>
                      <a href="social-media">Social Media</a>
                    </li>
                    <li>
                      <a href="finance">Finance</a>
                    </li>
                    <li>
                      <a href="education">Education</a>
                    </li>
                    <li>
                      <a href="sports">Sports</a>
                    </li>
                  </ul>
                </div>
                <div className="ipad-w">
                  <h4 className="fn-18 text-lgray3">COMPANY</h4>
                  <ul className="f_link pb-0">
                    <li>
                      <a href="contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="about-us">About Us</a>
                    </li>
                    <li>
                      <a href="blog">Blog</a>
                    </li>
                    <li>
                      <a href="careers">Career</a>
                    </li>
                    <li>
                      <a href="portfolio">Work</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bodypx bg-dark copyRright footer-w mb-0">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="py-2 mt-3">
              <div className="row">
                <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                  <p className="mb-0 font-primary fn-16 text-md-start">
                    © Copyright 2024 IND Tech Mark. All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 order-md-2 order-1">
                  <ul className="ms-auto p-0 quick-links f_link text-center text-lg-end">
                    <li>
                      <a href="privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="refund-policy">Refund Policy</a>
                    </li>
                    <li>
                      <a href="disclaimer">Disclaimer</a>
                    </li>
                    <li>
                      <a href="term-conditions">Term & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
