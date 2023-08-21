import React from "react";
import Header from "../../components/Header/Header.jsx"
import FrontPage from "../../components/FrontPage/FrontPage.jsx"
import ProductDescription from "../../components/ProductDescription/ProductDescription.jsx"
import Reviews from "../../components/Reviews/Reviews.jsx";

function LandingPage() {
  return (
    <>
      <Header></Header>
      <FrontPage></FrontPage>
      <ProductDescription></ProductDescription>
      <Reviews></Reviews>
    </>
  );
}

export default LandingPage;
