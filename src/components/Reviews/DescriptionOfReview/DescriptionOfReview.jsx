import React, { useState, useEffect } from "react";
import testimonials from "../../../utils/data/testimonials.json";
import "../../../assets/styles/components/Reviews/DescriptionOfReview.css";

function DescriptionOfReview() {
  const [dato, setDato] = useState([]);

  const firstObject = testimonials[0];
  const secondObject = testimonials[1];
  const thirdObject = testimonials[2];

  useEffect(() => {
    setDato(firstObject);
  }, []);

  return (

    <div className="reviews">
          <img id="bgQuotes" src="/public/images/bg-quotes.png" alt="" />
      <div id="card1" className={`card`}>
        <p>{firstObject.quote}</p>
        <div className="bodycard">
          <img src={firstObject.image} alt={firstObject.name} />
          <div className="titleCard">
            <p>{firstObject.name}</p>
            <p>{firstObject.title}</p>
          </div>
        </div>
      </div>
      <div className={`card`}>
        <p>{secondObject.quote}</p>
        <div className="bodycard">
          <img src={secondObject.image} alt={secondObject.name} />
          <div className="titleCard">
            <p>{secondObject.name}</p>
            <p>{secondObject.title}</p>
          </div>
        </div>
      </div>
      <div className={`card`}>
        <p>{thirdObject.quote}</p>
        <div className="bodycard">
          <img src={thirdObject.image} alt={thirdObject.name} />
          <div className="titleCard">
            <p>{thirdObject.name}</p>
            <p>{thirdObject.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionOfReview;
