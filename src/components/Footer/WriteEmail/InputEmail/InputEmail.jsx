import React, { useEffect, useState } from "react";
import FrontPageButton from "../../../FrontPage/FrontPageButton/FrontPageButton";
import "../../../../assets/styles/components/Footer/InputEmail.css";

function InputEmail() {
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState("");

  const exprEmail = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );

  const customButtonStyle = {
    width: "150px",
  };

  const handleVerify = (e) => {
    setEmail(e.target.value);
    if (exprEmail.test(e.target.value)) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (verify) {
      alert("Email send");
    } else {
      alert("Write correct the email, please");
    }
  };

  return (
    <div className="inputEmail">
      <div>
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and ourfree startertier is extremely
          generous. If you have
          <p>any questions, our support team would be happy to help you.</p>
        </p>
      </div>
      <div className="sendEmail">
        <form action="" onSubmit={handleSumbit}>
          <input
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={handleVerify}
          />
          {verify ? (
            <p style={{ color: "green" }}>Email is correct!</p>
          ) : (
            <p style={{ color: "red" }}>
              Email must have at least one "@" and a ".com"
            </p>
          )}
          <FrontPageButton
            buttonFrontPage={"Get Started for free"}
            style={customButtonStyle}
          ></FrontPageButton>
        </form>
      </div>
    </div>
  );
}

export default InputEmail;
