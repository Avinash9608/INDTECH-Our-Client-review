import React, { useState } from "react";
import rewLogo from "../../assets/images/rew-logo.png";
import ayushImg from "../../assets/images/Ayush.svg";
import amanImg from "../../assets/images/aman.svg";
// import "./Testimonials.css";

const Testimonials = () => {
  const [ratings, setRatings] = useState({});
  const [hoverRatings, setHoverRatings] = useState({});

  const testimonials = [
    {
      id: 1,
      quote:
        '"Expect <strong>high-quality</strong> work from working with INDTechMark."',
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Cristian Pacheco",
      position: "CEO, Order Now Corp",
      image: ayushImg,
      defaultRating: 0, // No highlight for first 3 testimonials
      disableHighlight: true,
    },
    {
      id: 2,
      quote:
        "“They really exceeded all of my <strong>expectations</strong>, and my team had the same impression.”",
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Bruna Tadross",
      position: "CEO, Access International",
      image: amanImg,
      defaultRating: 0, // No highlight for first 3 testimonials
      disableHighlight: true,
    },
    {
      id: 3,
      quote:
        '"Expect <strong>high-quality</strong> work from working with INDTechMark."',
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Cristian Pacheco",
      position: "CEO, Order Now Corp",
      image: ayushImg,
      defaultRating: 0, // No highlight for first 3 testimonials
      disableHighlight: true,
    },
    {
      id: 4,
      quote:
        "“They really exceeded all of my <strong>expectations</strong>, and my team had the same impression.”",
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Bruna Tadross",
      position: "CEO, Access International",
      image: amanImg,
      defaultRating: 4,
    },
    {
      id: 5,
      quote:
        '"Expect <strong>high-quality</strong> work from working with INDTechMark."',
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Cristian Pacheco",
      position: "CEO, Order Now Corp",
      image: ayushImg,
      defaultRating: 4,
    },
    {
      id: 6,
      quote:
        "“They really exceeded all of my <strong>expectations</strong>, and my team had the same impression.”",
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Bruna Tadross",
      position: "CEO, Access International",
      image: amanImg,
      defaultRating: 4,
    },
    {
      id: 7,
      quote:
        '"Expect <strong>high-quality</strong> work from working with INDTechMark."',
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Cristian Pacheco",
      position: "CEO, Order Now Corp",
      image: ayushImg,
      defaultRating: 4,
    },
    {
      id: 8,
      quote:
        "“They really exceeded all of my <strong>expectations</strong>, and my team had the same impression.”",
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Bruna Tadross",
      position: "CEO, Access International",
      image: amanImg,
      defaultRating: 4,
    },
    {
      id: 9,
      quote:
        "“They really exceeded all of my <strong>expectations</strong>, and my team had the same impression.”",
      text: "INDTechMark optimized the app so that it functions perfectly on both Apple and Android devices, and the app's primary users are very pleased with the new features. The TechAhead crew responded quickly and acted like a part of the internal team. Their efforts to meet client needs were noteworthy.",
      name: "Bruna Tadross",
      position: "CEO, Access International",
      image: amanImg,
      defaultRating: 4,
    },
  ];

  const handleRating = (testimonialId, rating) => {
    setRatings((prev) => ({ ...prev, [testimonialId]: rating }));
  };

  const handleMouseEnter = (testimonialId, rating) => {
    setHoverRatings((prev) => ({ ...prev, [testimonialId]: rating }));
  };

  const handleMouseLeave = (testimonialId) => {
    setHoverRatings((prev) => ({ ...prev, [testimonialId]: null }));
  };

  const RatingStars = ({ testimonialId, defaultRating, disableHighlight }) => {
    const currentRating = ratings[testimonialId] || defaultRating;
    const hoverRating = hoverRatings[testimonialId];

    return (
      <div className="rate ms-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`star${star}-${testimonialId}`}
              name={`rate-${testimonialId}`}
              value={star}
              onClick={() =>
                !disableHighlight && handleRating(testimonialId, star)
              }
              disabled={disableHighlight}
            />
            <label
              htmlFor={`star${star}-${testimonialId}`}
              className={
                !disableHighlight &&
                (hoverRating >= star || (!hoverRating && currentRating >= star))
                  ? "active"
                  : ""
              }
              onMouseEnter={() =>
                !disableHighlight && handleMouseEnter(testimonialId, star)
              }
              onMouseLeave={() =>
                !disableHighlight && handleMouseLeave(testimonialId)
              }
              title={`${star} stars`}
              style={disableHighlight ? { cursor: "default" } : {}}
            ></label>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <section className="bodypx pt-0 py-80 bg-white" id="testimonials">
      <div className="container-fluid mi-container">
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-4 mb-4" key={testimonial.id}>
              <div className="bg-white padding30 rounded16 borderlight d-flex flex-column h-100">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={rewLogo} alt="Review logo" />
                  </div>
                  <RatingStars
                    testimonialId={testimonial.id}
                    defaultRating={testimonial.defaultRating}
                    disableHighlight={testimonial.disableHighlight}
                  />
                </div>

                <span
                  className="fn-24 py-4 d-block"
                  dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                />

                <p>{testimonial.text}</p>

                <div className="testimonial_box-bottom mt-auto">
                  <div className="testimonial_box-profile align-items-center">
                    <div className="testimonial_box-img">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial_box-info">
                      <div className="testimonial_box-name">
                        <h3 className="mb-0">{testimonial.name}</h3>
                        <p className="mb-1">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
