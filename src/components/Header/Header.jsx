import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../imgs/logo 2.png";
import "./Header.css";
import {
  UilBars,
  UilEstate,
  UilFilesLandscapesAlt,
  UilGlobe,
  UilMegaphone,
  UilFastMail,
  UilMultiply,
} from "@iconscout/react-unicons";
const Header = () => {
  const [showMobile, setShowMobile] = useState(false);

  const showMobileMenu = () => setShowMobile(true);
  const closeMobileMenu = () => setShowMobile(false);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo1} alt="Logo"></img>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Projects</Link>
          </li>
          <li>
            <Link to="about">About As</Link>
          </li>
          <li>
            <Link to="/join">Join Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="showMenuMobile">
          <UilBars size={45} onClick={showMobileMenu} />
        </button>
        <ul className={`mobile ${showMobile ? "open" : ""}`}>
          <div className="close" onClick={closeMobileMenu}>
            <UilMultiply color={"#fff"} size={32} />
          </div>
          <li>
            <UilEstate color={"#fff"} size={32} />
            <Link to="/">Home</Link>
          </li>
          <li>
            <UilFilesLandscapesAlt color={"#fff"} size={32} />
            <Link to="#">Projects</Link>
          </li>
          <li>
            <UilGlobe color={"#fff"} size={32} />
            <Link to="about">About As</Link>
          </li>
          <li>
            <UilMegaphone color={"#fff"} size={32} />
            <Link to="/join">Join Us</Link>
          </li>
          <li>
            <UilFastMail color={"#fff"} size={32} />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
