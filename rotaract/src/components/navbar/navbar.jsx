import React from "react";
import "./navbar.css";
// import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.png";
import you from "../../assets/you.jpg";

const navbar = () => {
  return (
    <div className="rotaract_navbar">
      <div className="rotaract_navbar-links">
        <div className="rotaract_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="rotaract_navbar-sign">
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/login">
          <p>Join us</p>
        </a>

        <p>Donate</p>
      </div>
      <div className="logo">
        <p>
          <img src={you} alt="logo" w />
        </p>
      </div>
    </div>
  );
};

export default navbar;
