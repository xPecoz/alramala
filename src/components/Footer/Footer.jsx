import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom";
import logo1 from "../../imgs/logo 2.png";

// const Footer = () => {
//   return (
// <footer className="footer">
//       <div className="footer-content">
//       <div className="footer-section about">
//           <h2>Alramlaa Factory</h2>
//           <p>
//           Lorem ipsum dolor sit amet, consectetur 
//           adipiscing elit, sed do eiusmod tempor 
//           incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="social">
//             <Link to="https://facebook.com" target="_blank"> <i class="fab fa-facebook"></i></Link>
//             <Link to="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></Link>
//             <Link to="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></Link>
//             <Link to="https://instagram.com" target="_blank"><i class="fab fa-linkedin"></i></Link>
//           </div>
//         </div>
//         <div className="footer-section quick-links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><Link to="#home">Home</Link></li>
//             <li><Link to="#about">About</Link></li>
//             <li><Link to="#services">Services</Link></li>
//             <li><Link to="#contact">Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <span className="logo" ><img src={logo1} alt="Logo"></img></span>
//         <p>&copy; 2024 <b>Alramlaa.</b> All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }


const Footer = () => {
  return (
<footer className="footer">
      <div className="footer-top">
      <div className="logo" ><img src={logo1} alt="Logo"></img></div>
          <div className="social">
            <h2>Follow Us:</h2>
            <span className="links">
            <Link to="https://facebook.com" target="_blank"> <i class="fab fa-facebook"></i></Link>
            <Link to="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></Link>
            <Link to="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></Link>
            <Link to="https://instagram.com" target="_blank"><i class="fab fa-linkedin"></i></Link>
            </span>
          </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 <b>Alramlaa.</b> All rights reserved.</p>
        <p>Designed By <b>Legacy Code.</b></p>
      </div>
    </footer>
  );
}


export default Footer;