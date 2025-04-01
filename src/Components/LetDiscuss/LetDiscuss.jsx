import React from "react";
import discussImg from "../../assets/images/Discussimg.svg"; // Update the path if needed

const LetDiscuss = () => {
  return (
    <section className="bodypx py-80 pt-0 hailwhitebg">
      <div className="redblackbg rounded30 px-md-4 psm-ph">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
              <h2 className="text-white fs-50 fw-400 thinTitle">
                Let’s Discuss{" "}
                <span className="text-white fw-600">Your Project</span>
              </h2>
              <p className="fn-24 text-white thinTitle">
                Get a free consultation to discuss how we will transform your
                idea into an amazing digital product.
              </p>
              <a
                href="get-free-consultation"
                className="themeBtn mt-2 mt-xl-3 fw-bold"
              >
                <span>Get free consultation</span>
                <i className="icon icon-arrow"></i>
              </a>
            </div>
            <div className="col-md-5 text-center text-md-end pe-md-5">
              <img className="my-4 pb-1" src={discussImg} alt="Let's Discuss" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetDiscuss;
