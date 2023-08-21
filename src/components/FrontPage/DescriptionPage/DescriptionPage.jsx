import React from "react";
import "./../../../assets/styles/components/FrontPage/DescriptionPage.css";

function DescriptionPage(props) {
  return (
    <div>
      <div>
        <h2>{props.titleDescription}</h2>
      </div>
      <div>
        <h4>{props.subtitleDescription}</h4>
      </div>
    </div>
  );
}

export default DescriptionPage;
