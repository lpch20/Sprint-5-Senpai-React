import React from "react";
import CardOfDescription from "./CardOfDescription/CardOfDescription";
import features from "../../utils/data/features.json";
import './../../assets/styles/components/Productdescription/ProductDescription.css'

function ProductDescription() {
  const firstObject = features[0];
  
  return (
    <section>
      <div className="carDescription">
        <CardOfDescription
          rutaImg={firstObject.image}
          titleCard={firstObject.title}
          paragraph={firstObject.description}
        ></CardOfDescription>
      </div>
    </section>
  );
}

export default ProductDescription;
