import React from "react";

import "../../Component/Header/component.css";
import logo from "../../Img/logo.png";
import qr from "../../Img//QR.webp";
import chplay from "../../Img/chpla.svg";
import appsotre from "../../Img/appsorte.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {" "}
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex">
        <a class="navbar-brand" href="/#">
          <img src={logo} width="100" height="50" alt="Tracoluka" />
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li>
              <Link class="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li>
            <Link class="nav-link" to="/Register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
