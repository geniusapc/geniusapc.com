import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/img/logo.svg";


export default function Header() {
  return (
    <div id="nav-wrapper">
      <Link to="/" id="logo">
        <img src={logo} alt="geniusapc" />
      </Link>
    </div>
  );
}
