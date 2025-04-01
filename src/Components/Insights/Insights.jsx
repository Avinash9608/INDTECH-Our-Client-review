import React from "react";
import Insights1 from "../../assets/images/Insights1.jpg";
import Insights2 from "../../assets/images/Insights2.jpg";
import Insights3 from "../../assets/images/Insights3.jpg";

const Insights = () => {
  return (
    <section
      className="bodypx ourworksection bg-white py-80"
      data-aos="fade-up"
    >
      <div className="container-fluid px-md-0">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <b style={{ fontWeight: 700 }}>Featured Insights</b>
            </h2>
            <p className="pe-md-4">
              Explore our featured technology insights on news boards that are
              popular among our readers.
            </p>
          </div>

          <div className="pt-3 px-0">
            <div className="wrapper">
              <div className="ourwork-slider">
                <div>
                  <div className="img-hover">
                    <img
                      className="inner-img"
                      src={Insights1}
                      alt="Passio.AI - An Edge AI Platform"
                    />
                  </div>
                  <div className="Insights-text">
                    <span className="fn-18 text-lgray3">
                      March 25, 2024 | 6156 Views
                    </span>
                    <a
                      href="#"
                      className="d-block fn-28 fw-medium my-1 text-dgray hoverunderline"
                    >
                      <b style={{ fontWeight: 600 }}>
                        Passio.AI - An Edge AI Platform
                      </b>
                    </a>
                    <p className="pe-md-4">
                      How MindInventory contributed to the success of Passio -
                      an edge AI platform, transforming the lifestyle.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="img-hover">
                    <img
                      className="inner-img"
                      src={Insights2}
                      alt="Tech Transformation in the Logistics Industry"
                    />
                  </div>
                  <div className="Insights-text">
                    <span className="fn-18 text-lgray3">
                      November 15, 2013 | 12705 Views
                    </span>
                    <a
                      href="#"
                      className="d-block fn-28 fw-medium my-1 text-dgray hoverunderline"
                    >
                      <b style={{ fontWeight: 600 }}>
                        Tech Transformation in the
                        <br /> Logistics Industry
                      </b>
                    </a>
                    <p className="pe-md-4">
                      Understand ways technology evolution enables logistics
                      businesses to boost their productivity and earn more
                      profit.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="img-hover">
                    <img
                      className="inner-img"
                      src={Insights3}
                      alt="How AI Benefits Healthcare Startups"
                    />
                  </div>
                  <div className="Insights-text">
                    <span className="fn-18 text-lgray3">
                      May 25, 2024 | 6156 Views
                    </span>
                    <a
                      href="#"
                      className="d-block fn-28 fw-medium my-1 text-dgray hoverunderline"
                    >
                      <b style={{ fontWeight: 600 }}>
                        {" "}
                        How AI Benefits Healthcare
                        <br /> Startups
                      </b>
                    </a>
                    <p className="pe-md-4">
                      How AI in healthcare is transforming the whole industry
                      landscape and ways HealthTech startups are adopting it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
