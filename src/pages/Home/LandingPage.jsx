import React from "react";
import Header from "../../components/Header/Header.jsx"
import FrontPage from "../../components/FrontPage/FrontPage.jsx"
import ProductDescription from "../../components/ProductDescription/ProductDescription.jsx"
import Reviews from "../../components/Reviews/Reviews.jsx";
import Details from "../../components/Details/Details.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function LandingPage() {
  return (
    <>
      <Header></Header>
      <FrontPage></FrontPage>
      <ProductDescription></ProductDescription>
      <Details></Details>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
