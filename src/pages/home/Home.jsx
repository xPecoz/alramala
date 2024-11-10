import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Hero from "../../imgs/hero.png";
import Rectangle5 from "../../imgs/Rectangle 5.png";
import Rectangle8 from "../../imgs/Rectangle 8.png";
import Rectangle6 from "../../imgs/Rectangle 6.png";
import Rectangle7 from "../../imgs/Rectangle 7.png";
import contactImg from '../../imgs/contactImg.jpg';

import { Link } from "react-router-dom";
import MainTitle from "../../components/title/mainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
function Home() {
  return (
    <main className="home">
      <HeroSection />
      <AboutSection />
      <Projects />
      <Testimonial />
      <OurParteners />
      <Contact /> 
    </main>
  );
}
function HeroSection() {
  return (
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
  );
}
function AboutSection() {
  return (
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
          <Link to="/about" className="readMore">
            Read More
          </Link>
        </div>
        <div className="imgs">
          <div className="imgsBox">
            <img src={Rectangle5} alt="" />
            <img src={Rectangle8} alt="" />
          </div>
          <div className="imgsBox">
            <img src={Rectangle6} alt="" />
            <img src={Rectangle7} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="projects-section">
      <MainTitle>Projects</MainTitle>
      <div className="container">
        <ProjectItem>
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/hosipilty.JPG"
            }
            alt=""
          />
          <div className="project-before">
            <h1>Hospitality</h1>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/commmercial.jpg"
            }
            alt=""
          />
          <div className="project-before">
            <h1>Commercial</h1>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/entertaiment.jpg"
            }
            alt=""
          />
          <div className="project-before">
            <h1>Entertainment</h1>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/residential.jpg"
            }
            alt=""
          />
          <div className="project-before">
            <h1>Residential</h1>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/education.JPG"
            }
            alt=""
          />
          <div className="project-before">
            <h1>Education</h1>
          </div>
        </ProjectItem>
        <ProjectItem>
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
          <div className="project-before">
            <h1>Work Space</h1>
          </div>
        </ProjectItem>
      </div>
      <Link>See All</Link>
    </section>
  );
}
function ProjectItem({ children }) {
  return <div className="project-item">{children}</div>;
}
function Testimonial() {
  return (
    <section className="testimonials">
      <MainTitle>Testimonials</MainTitle>
      <div className="container">
        <div className="testimon-box">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    id: 1,
    image: "/photos/08037447bc7cca0e5d38e17dde319959.jpg", 
    quote: "Amazing service",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Wade Warren",
    role: "Doctor",
  },
  {
    id: 2,
    image: "/photos/08037447bc7cca0e5d38e17dde319959.jpg", 
    quote: "Exceptional quality",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    name: "Sarah Johnson",
    role: "Designer",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What do customers say...</h2>
      <div className="testimonial-card">
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + testimonials[currentIndex].image}
            alt="Customer"
          />
        </div>
        <div className="testimonial-content">
          <div className="quote-icon">“</div>
          <h3>{testimonials[currentIndex].quote}</h3>
          <p className="testimon-para">{testimonials[currentIndex].text}</p>
          <div className="customer-info">
            <p className="customer-name">{testimonials[currentIndex].name}</p>
            <p className="customer-role">{testimonials[currentIndex].role}</p>
          </div>
        </div>
        <div className="arrow-container">
          <div className="arrow left-arrow" onClick={handlePrev}>
            ❮
          </div>
          <div className="arrow right-arrow" onClick={handleNext}>
            ❯
          </div>
        </div>
      </div>
    </div>
  );
};

function OurParteners() {
  return (
    <section className="our-parteners">
      <MainTitle>Our partners</MainTitle>
      <div className="container">
        <SwiperSliderParteners />
      </div>
    </section>
  );
}
const SwiperSliderParteners = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  }, [swiperRef]);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={8} // Default value for larger screens
      breakpoints={{
        100: {
          slidesPerView: 1, // 1 slide for very small screens
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // 2 slides for tablets
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3, // 3 slides for small desktops
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 8, // 8 slides for large desktops
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="partener">
          <img
            src={
              process.env.PUBLIC_URL +
              "/photos/workspacee.JPG"
            }
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};


export function Contact() {
  const [fly, setFly] = useState(false);

  const handleLaunch = (event) => {
    event.preventDefault();
    setFly(true);
    setTimeout(() => {
      submitForm();
      window.location.reload();
    }, 1000);
  };

  const submitForm = () => {
    console.log("Form submitted!");
  };
    
  return (
      <section className="contact">
          <h1>Contact Us</h1>
          <div className="container">
              <span className='heading'>
              <h1>Get in touch</h1>
              <p>Reach out, and let's create a universe of possibilities together!</p>
              </span>
              <span className='form-container'>
              <div className='Form'>
                  <h1>Let’s Connect Constellations</h1>
                  <p>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                  <form>
                      <span className='name-input'>
                          <input type="text" placeholder="First Name" />
                          <input type="text" placeholder="Last Name" />
                      </span>
                      <input type="email" placeholder="Email" />
                      <input type="tel" placeholder="Phone Number" />
                      <textarea placeholder="Message" className='message' />
                      <button onClick={handleLaunch}>Send it to the moon <i className={`fas fa-rocket rocket-icon ${fly ? 'fly' : ''}`}></i></button>
                  </form>
              </div>
              <div className='image'>
                  <img src={contactImg} alt="contact-img" />
              </div>
              </span>
          </div>
      </section>
  )
}
export default Home;
