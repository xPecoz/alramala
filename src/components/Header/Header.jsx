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
  UilAngleDown,
} from "@iconscout/react-unicons";
const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  const showMobileMenu = () => setShowMobile(true);
  const closeMobileMenu = () => setShowMobile(false);

  const handelProjectsMenu = () => setShowProjectsMenu(!showProjectsMenu);
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
          <li className="project">
            <button onClick={handelProjectsMenu}>Projects</button>
            <UilAngleDown size={27} color={"#1A1A1A"} />
            <div className={`projects-links ${showProjectsMenu ? "open" : ""}`}>
              <Link to={"/projects/Hospitality"}>Hospitality</Link>
              <Link to={"/projects/Commercial"}>Commercial</Link>
              <Link to={"/projects/Entertainment"}>Entertainment</Link>
              <Link to={"/projects/Residential"}>Residential</Link>
              <Link to={"/projects/Education"}>Education</Link>
              <Link to={"/projects/Work Space"}>Work Space</Link>
            </div>
          </li>
          <li>
            <Link to="/production">Production Lines</Link>
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
          <li onClick={closeMobileMenu}>
            <UilEstate color={"#fff"} size={32} />
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <UilFilesLandscapesAlt color={"#fff"} size={32} />
            <Link to="/production">Production Lines</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <UilFilesLandscapesAlt color={"#fff"} size={32} />
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <UilGlobe color={"#fff"} size={32} />
            <Link to="about">About As</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <UilMegaphone color={"#fff"} size={32} />
            <Link to="/join">Join Us</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <UilFastMail color={"#fff"} size={32} />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
