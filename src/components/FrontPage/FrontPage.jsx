import React from "react";
import FrontPageImage from "./FrontPageImage/FrontPageImage";
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import FrontPageButton from "./FrontPageButton/FrontPageButton";
import "./../../assets/styles/components/FrontPage/FrontPage.css";

function FrontPage() {
  return (
    <section>
      <div className="frontPage">
        <FrontPageImage></FrontPageImage>
        <div className="titleDescription">
          <DescriptionPage
            titleDescription={
              "All your files in one secure location,accessible anywhere."
            }
          ></DescriptionPage>
        </div>
        <div className="subDescription">
          <DescriptionPage
            subtitleDescription={
              "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
            }
          ></DescriptionPage>
        </div>
        <div className="buttonStarted">
          <FrontPageButton buttonFrontPage={"Get Started"}></FrontPageButton>
        </div>
      </div>
    </section>
  );
}

export default FrontPage;
