import React, { useEffect, useState } from "react";
import features from "../../../utils/data/features.json";
import "./../../../assets/styles/components/Productdescription/CardOfDescription.css";

function CardOfDescription() {
  const [dato, setDato] = useState([]);

  const firstObject = features[0];
  const secondObject = features[1];
  const thirdObject = features[2];
  const fourObject = features[3];

  useEffect(() => {
    setDato(firstObject);
  }, []);

  return (
    <>
      <div className="orderCards1">
        <div className="cards">
          <div>
            <img className="iconDesktop" src={firstObject.image} alt="" />
          </div>
          <div>
            <h4>{firstObject.title}</h4>
          </div>
          <div className="paragraph">
            <p>{firstObject.description}</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img className="iconDesktop" src={secondObject.image} alt="" />
          </div>
          <div>
            <h4>{secondObject.title}</h4>
          </div>
          <div className="paragraph">
            <p>{secondObject.description}</p>
          </div>
        </div>
      </div>
      <div className="orderCards2">
        <div className="cards">
          <div>
            <img className="iconDesktop" src={thirdObject.image} alt="" />
          </div>
          <div>
            <h4>{thirdObject.title}</h4>
          </div>
          <div className="paragraph">
            <p>{thirdObject.description}</p>
          </div>
        </div>
        <div className="cards">
          <div>
            <img className="iconDesktop" src={fourObject.image} alt="" />
          </div>
          <div>
            <h4>{fourObject.title}</h4>
          </div>
          <div className="paragraph">
            <p>{fourObject.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOfDescription;
