import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";
import amanImg from "../../assets/images/aman.svg";
import ayushImg from "../../assets/images/Ayush.svg";
import dhirendraImg from "../../assets/images/Dhirendra.svg";
import "./Testimonials.css";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
      name: "Aman Singh",
      position: "Jaipur, Rajasthan",
      image: amanImg,
      rating: 3,
    },
    {
      id: 2,
      quote:
        "Their ability to produce high-quality, on-brand design elements and animation within days was a game changer!",
      name: "Ayush Kumar",
      position: "Jaipur, Rajasthan",
      image: ayushImg,
      rating: 3,
    },
    {
      id: 3,
      quote:
        "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      position: "Jaipur, Rajasthan",
      image: dhirendraImg,
      rating: 3,
    },
    {
      id: 4,
      quote:
        "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      position: "Jaipur, Rajasthan",
      image: dhirendraImg,
      rating: 3,
    },
    {
      id: 5,
      quote:
        "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      position: "Jaipur, Rajasthan",
      image: dhirendraImg,
      rating: 3,
    },
    {
      id: 6,
      quote:
        "INDTech Mark swiftly delivered content in two weeks, meeting client expectations, and managed workflow and communication efficiently and positively.",
      name: "Dhirendra Kumar",
      position: "Jaipur, Rajasthan",
      image: dhirendraImg,
      rating: 3,
    },
  ];

  const RatingStars = ({ rating }) => {
    return (
      <div className="rate">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`star${star}`}
              name="rate"
              value={star}
              checked={star === rating}
              readOnly
            />
            <label htmlFor={`star${star}`} title="text"></label>
          </React.Fragment>
        ))}
        <span className="fw-bold fn-18 ms-2">{rating}.0 / 5.0</span>
      </div>
    );
  };

  return (
    <section className="bodypx Testimonial bg-white py-80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Inspiring Client Testimonials</h2>
            <p>
              Client success stories showcasing IND TechMark expertise in mobile
              app development, <br />
              web development, and digital transformation services
            </p>
          </div>

          <div className="pt-3 px-0">
            <div className="testimonial">
              <div className="testimonial__inner">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  className="testimonial-slider"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide
                      key={testimonial.id}
                      className="testimonial-slide"
                    >
                      <div className="testimonial_box">
                        <div className="testimonial_box-inner">
                          <div className="testimonial_box-top">
                            <div className="testimonial_box-text">
                              <p>{testimonial.quote}</p>
                              <div className="d-flex align-items-center d-md-none">
                                <RatingStars rating={testimonial.rating} />
                              </div>
                            </div>
                            <div className="testimonial_box-shape"></div>
                          </div>
                          <div className="testimonial_box-bottom">
                            <div className="testimonial_box-profile align-items-center">
                              <div className="testimonial_box-img">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                />
                              </div>
                              <div className="testimonial_box-info">
                                <div className="testimonial_box-name">
                                  <h3 className="mb-0">{testimonial.name}</h3>
                                  <p className="mb-1">{testimonial.position}</p>
                                </div>
                              </div>
                              <div className="d-md-flex align-items-center ps-3 d-none">
                                <RatingStars rating={testimonial.rating} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="btn-wrap">
                  <button
                    className="prev-btn com-btn mr-3"
                    onClick={() => swiperRef.current?.swiper.slidePrev()}
                  >
                    <span>
                      <img src={leftArrow} alt="Previous" />
                    </span>
                  </button>
                  <button
                    className="next-btn com-btn"
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                  >
                    <span>
                      <img src={rightArrow} alt="Next" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
