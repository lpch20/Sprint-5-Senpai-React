import React from "react";
import Logo from "../Logo/Logo";
import "./../../../assets/styles/components/Header/NavBar/navbar.css"

function NavBar() {
  return (
    <div>
      <nav>
        <div>
            <Logo></Logo>
        </div>
        <div>
          <a href="">Features</a>
          <a href="">Team</a>
          <a href="">Sign In</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
