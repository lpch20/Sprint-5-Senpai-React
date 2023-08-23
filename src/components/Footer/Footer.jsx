import React from "react";
import InputEmail from "./WriteEmail/InputEmail/InputEmail";
import "../../assets/styles/components/Footer/Footer.css";

function Footer() {
  return (
    <div className="containFooter">
      <footer>
        <div className="inputFooter">
          <InputEmail></InputEmail>
        </div>
        <div className="imgFooter">
          <img src="/icons/logo.svg" alt="" />
        </div>

        <div className="footerConfig">
          <div>
            <div className="iconFooter">
              <img src="/icons/icon-location.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <p>sed do eiusmod tempor incididunt</p>
                <p>ut labore et dolore magna aliqua</p>
              </p>
            </div>
            <div className="iconFooter2">
              <div>
                <img src="/icons/icon-phone.svg" alt="" />
                <p>+1-543-1234567</p>
              </div>
              <div>
                <img src="/icons/icon-email.svg" alt="" />
                <p>example@fylo.com</p>
              </div>
            </div>
            <div>
              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="socialMedia">
              <div>
                <img src="/icons/facebook.svg" alt="" />
              </div>
              <div>
                <img src="/icons/square-twitter.svg" alt="" />
              </div>
              <div>
                <img src="/icons/square-instagram.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
