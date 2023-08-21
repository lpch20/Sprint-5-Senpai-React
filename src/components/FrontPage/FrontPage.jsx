import React from "react";
import FrontPageImage from "./FrontPageImage/FrontPageImage";
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import FrontPageButton from "./FrontPageButton/FrontPageButton";
import "./../../assets/styles/components/FrontPage/FrontPage.css";

function FrontPage() {
  return (
    <section>
      <div>
        <FrontPageImage></FrontPageImage>
        <DescriptionPage
          titleDescription={
            "All your files in one secure location,accessible anywhere."
          }
          subtitleDescription={
            "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
          }
        ></DescriptionPage>
        <FrontPageButton buttonFrontPage={"Get Started"}></FrontPageButton>
      </div>
    </section>
  );
}

export default FrontPage;
