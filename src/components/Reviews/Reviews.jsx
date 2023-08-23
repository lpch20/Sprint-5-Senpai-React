import React from "react";
import DescriptionOfReview from "./DescriptionOfReview/DescriptionOfReview.jsx";
import testimonials from "../../utils/data/testimonials.json";
import '../../assets/styles/components/Reviews/Reviews.css'

function Reviews() {
  const firstObject = testimonials[0];

  return (
    <>
      <div className="reviews">
        <DescriptionOfReview
          name={firstObject.name}
          title={firstObject.title}
          quote={firstObject.quote}
          image={firstObject.image}
        ></DescriptionOfReview>
      </div>
    </>
  );
}

export default Reviews;
