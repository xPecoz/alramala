import React from "react";
import "./Home.css";
import Hero from "../../imgs/hero.png";
import Rectangle5 from "../../imgs/Rectangle 5.png";
import Rectangle8 from "../../imgs/Rectangle 8.png";
import Rectangle6 from "../../imgs/Rectangle 6.png";
import Rectangle7 from "../../imgs/Rectangle 7.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <img src={Hero} alt="hero" />
          <div className="black"></div>
          <div className="title">
            <h1>
              Find Your Own Design Inside
              <br /> The Ramla Factory
            </h1>
          </div>
          <div className="description">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. 
            </p>
          </div>
          <form className="search">
            <input placeholder="Search furniture" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="info">
            <h1>About us</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="boxs">
              <div className="box">
                <h2>1</h2>
                <h3>Mission</h3>
                <p>
                  It makes people at ease and feel like they want to open up.
                </p>
              </div>
              <div className="box">
                <h2>2</h2>
                <h3>Motivation</h3>
                <p>The perfect mix of art that complements the room's style.</p>
              </div>
              <div className="box">
                <h2>3</h2>
                <h3>Vision</h3>
                <p>
                  Along with a healthy dose of negative space to give the eyes
                  spots to rest.
                </p>
              </div>
              <div className="box">
                <h2>4</h2>
                <h3>Goal</h3>
                <p>Art that has meaning to the people who live in the space,</p>
              </div>
            </div>
            <Link to="#" className="readMore">
              Read More
            </Link>
          </div>
          <div className="imgs">
            <div className="imgsBox">
              <img src={Rectangle5} />
              <img src={Rectangle8} />
            </div>
            <div className="imgsBox">
              <img src={Rectangle6} />
              <img src={Rectangle7} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
