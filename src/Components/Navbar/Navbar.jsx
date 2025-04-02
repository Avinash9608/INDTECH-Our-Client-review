import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="my_header w-100" id="header">
      <div className="w-100 header_container d-flex align-items-center">
        <div className="logo_container">
          <a href="/" className="d-block">
            <img src={logo} className="w-100 default_logo" alt="Logo" />
          </a>
        </div>

        <div className="menu_container">
          <ul className="menu_list" id="menulist">
            {/* Who We Are Dropdown */}
            <li
              className="drop"
              onMouseEnter={() => setHoveredDropdown("whoWeAre")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <a href="#" title="Who We Are" onClick={handleDropdownClick}>
                Who We Are
                <svg
                  className={`dropdown-arrow ${
                    hoveredDropdown === "whoWeAre" ? "rotate" : ""
                  }`}
                  width="12"
                  height="8"
                >
                  <path
                    d="M1 1l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div
                className={`menu_dropdown px-md-5 px-3 ${
                  hoveredDropdown === "whoWeAre" ? "open" : ""
                }`}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12 py-md-5 py-2">
                    <div className="row">
                      <div className="col-md-3 bdr">
                        <div className="menu-title">
                          <p>Incubating a culture of innovation & creativity</p>
                        </div>
                      </div>
                      <div className="col-md-3 bdr">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://about-us-mu.vercel.app/">
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="https://our-team-rho.vercel.app/">
                              Our Team
                            </a>
                          </li>
                          <li>
                            <a href="https://career-flax-six.vercel.app/">
                              Career
                            </a>
                          </li>
                          <li>
                            <a href="https://contact-us-roan-one.vercel.app/">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 bdr">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://client-dun-psi.vercel.app/">
                              Our Clients
                            </a>
                          </li>
                          <li>
                            <a href="https://press-media.vercel.app/">
                              Press & Media
                            </a>
                          </li>
                          <li>
                            <a href="https://lifeat-ind.vercel.app/">
                              Life at INDTechMark
                            </a>
                          </li>
                          <li>
                            <a href="https://get-free-consultation.vercel.app/">
                              Get Free Consultation
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://client-review-five.vercel.app/">
                              Client Reviews
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-our-client-review.vercel.app/">
                              Our Client Reviews
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-blog.vercel.app/">Blog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Services Dropdown */}
            <li
              className="drop"
              onMouseEnter={() => setHoveredDropdown("services")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <a href="#" title="Services" onClick={handleDropdownClick}>
                Services
                <svg
                  className={`dropdown-arrow ${
                    hoveredDropdown === "services" ? "rotate" : ""
                  }`}
                  width="12"
                  height="8"
                >
                  <path
                    d="M1 1l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div
                className={`menu_dropdown px-md-5 px-3 ${
                  hoveredDropdown === "services" ? "open" : ""
                }`}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12 py-md-5 py-2">
                    <div className="row">
                      <div className="col-md-3 bdr">
                        <div className="menu-title">
                          <p>Incubating a culture of innovation & creativity</p>
                        </div>
                      </div>
                      <div className="col-md-4 bdr">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://ind-tech-mar-web-dev-page.vercel.app/">
                              Web Development
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-mark-mob-dev-page.vercel.app/">
                              Mobile App Development
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-digital-marketing-service.vercel.app/">
                              Digital Marketing
                            </a>
                          </li>
                          <li className="d-none">
                            <a href="/seo">Search Engine Optimization</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://indtech-wesite-design-company.vercel.app/">
                              Web Designing
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-portfolio-page.vercel.app/">
                              Work
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-check-out-page.vercel.app/">
                              Checkout
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-pricing-page.vercel.app/">
                              Pricing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li
              className="drop"
              onMouseEnter={() => setHoveredDropdown("industries")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <a href="#" title="Industries" onClick={handleDropdownClick}>
                Industries
                <svg
                  className={`dropdown-arrow ${
                    hoveredDropdown === "industries" ? "rotate" : ""
                  }`}
                  width="12"
                  height="8"
                >
                  <path
                    d="M1 1l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div
                className={`menu_dropdown px-md-5 px-3 ${
                  hoveredDropdown === "industries" ? "open" : ""
                }`}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12 py-md-5 py-2">
                    <div className="row">
                      <div className="col-md-3 bdr">
                        <div className="menu-title">
                          <p>Incubating a culture of innovation & creativity</p>
                        </div>
                      </div>
                      <div className="col-md-4 bdr">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://indtech-services-social-media-page.vercel.app/">
                              Social Media
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-finance-page.vercel.app/">
                              Finance
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-education.vercel.app/">
                              Education
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="sub-menu">
                          <li>
                            <a href="https://indtech-health-care.vercel.app/">
                              Healthcare
                            </a>
                          </li>
                          <li>
                            <a href="https://indtech-sports.vercel.app/">
                              Sports
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Static Links */}
            <li>
              <a href="/work" title="Work">
                Work
              </a>
            </li>
            <li>
              <a href="https://career-flax-six.vercel.app/" title="Careers">
                Careers
              </a>
            </li>
            <li>
              <a href="https://indtech-blog.vercel.app/" title="Blog">
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://contact-us-roan-one.vercel.app/"
                className="btn-darkblack px-4 text-white py-3 fw-bold d-flex"
              >
                <span>Contact Us</span>
                <i className="icon icon-arrow"></i>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            id="navtoggle"
            className={menuOpen ? "open" : ""}
            onClick={menuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
