import React from "react";
import "./About.css";
import aboutVid from "../../imgs/aboutVid.gif";
import stAbout from "../../imgs/stAbout.png";
import ndAbout from "../../imgs/ndAbout.png";
import rdAbout from "../../imgs/rdAbout.png";
import lsAbout from "../../imgs/lsAbout.png";
import circles from "../../imgs/circles.png";

import background1 from "../../imgs/1.png";
import background2 from "../../imgs/2.png";
import background3 from "../../imgs/3.png";
import background4 from "../../imgs/4.png";
import background5 from "../../imgs/5.png";
import background6 from "../../imgs/6.png";

import { UilSearch, UilPlus, UilMinus } from "@iconscout/react-unicons";

const AboutPage = () => {
  return (
    <>
      <section className="aboutpage">
        <div className="top">
          <p>
            <span className="first">We</span> serve{" "}
            <span className="st-word">as the driving fuel</span> for your{" "}
            <span className="nd-word">business</span> and are ready to raise
            your <span className="rd-word">brand</span> to the sky.
          </p>
          <img className="aboutVid" src={aboutVid} alt="about Video" />
        </div>
        <div className="cards">
          <img className="cardOne" src={stAbout} alt="card" />
          <img className="cardTwo" src={ndAbout} alt="card" />
          <img className="cardThree" src={rdAbout} alt="card" />
          <img className="cardFour" src={lsAbout} alt="card" />
        </div>
      </section>
      <section className="art">
        <div className="last">
          <h1>The art of Branding</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <img src={circles} alt="before" />
        </div>
      </section>
      <main className="about">
        <ThingsWeValue />
        <MakeDifferent />
      </main>
    </>
  );
};

function ThingsWeValue() {
  return (
    <div className="ThingsWeValue">
      <div className="container">
        <h2 className="title">6 things we value</h2>
        <div className="boxs">
          <div className="box">
            <img src={background1} alt="" />
            <h3>Excellence</h3>
          </div>
          <div className="box">
            <img src={background2} alt="" />
            <h3>Innovation</h3>
          </div>
          <div className="box">
            <img src={background3} alt="" />
            <h3>Integrity</h3>
          </div>
          <div className="box">
            <img src={background4} alt="" />
            <h3>Collaboration</h3>
          </div>
          <div className="box">
            <img src={background5} alt="" />
            <h3>Customer value</h3>
          </div>
          <div className="box">
            <img src={background6} alt="" />
            <h3>Care and share</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function MakeDifferent() {
  function showText(e) {
    let currantBox = e.target.parentElement;
    let currantText = currantBox.children[1];

    currantBox?.children[0]?.children[1]?.classList.toggle("close");
    currantBox?.children[0]?.children[2]?.classList.toggle("close");

    currantText.classList.toggle("show");
  }
  return (
    <section className="MakeDifferent">
      <div className="container">
        <h2 className="title">What makes us different</h2>
        <div className="search">
          <UilSearch />
          <input placeholder="search" />
        </div>
        <div className="boxs">
          <div className="box">
            <div className="boxTitle" onClick={showText}>
              <h3>Comprehensive range of solutions</h3>
              <UilPlus className="icon" size={35} />
              <UilMinus className="icon close" size={35} />
            </div>
            <p className="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a
            </p>
          </div>
          <div className="box">
            <div className="boxTitle" onClick={showText}>
              <h3>Customized solution</h3>
              <UilPlus className="icon" size={35} />
              <UilMinus className="icon close" size={35} />
            </div>
            <p className="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
          </div>
          <div className="box">
            <div className="boxTitle" onClick={showText}>
              <h3>Flexible and budget friendly model</h3>
              <UilPlus className="icon" size={35} />
              <UilMinus className="icon close" size={35} />
            </div>
            <p className="text">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
          <div className="box">
            <div className="boxTitle" onClick={showText}>
              <h3>Strategic approach</h3>
              <UilPlus className="icon" size={35} />
              <UilMinus className="icon close" size={35} />
            </div>
            <p className="text">
              By implementing a strategic approach, you can out compete your
              rivals and achieve success efficiently and effectively.
            </p>
          </div>
          <div className="box">
            <div className="boxTitle" onClick={showText}>
              <h3>Committed timelines</h3>
              <UilPlus className="icon" size={35} />
              <UilMinus className="icon close" size={35} />
            </div>
            <p className="text">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
          <div className="box">
            <div className="boxTitle" onClick={showText}>
              <h3>Quality services</h3>
              <UilPlus className="icon" size={35} />
              <UilMinus className="icon close" size={35} />
            </div>
            <p className="text">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
