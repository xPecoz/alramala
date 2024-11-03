import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../imgs/logo 2.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo1} alt="Logo"></img>
        </div>
        <ul className="links">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Projects</Link>
          </li>
          <li>
            <Link to="#">About As</Link>
          </li>
          <li>
            <Link to="#">Join Us</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
