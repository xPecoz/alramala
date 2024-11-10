import { Link } from "react-router-dom";
import "./Join.css";
function JoinUs() {
  return (
    <section className="join-us standardJoin">
      <StandardJoin>
        <span>Get Started</span>
        <div className="join-heading-container">
          <h1>
            Join our team by submitting <br /> an application
          </h1>
          <ul className="join-links">
            <Link to="#">
              {" "}
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
            </Link>
            <Link to={"https://www.instagram.com/alramlaa"}>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
            </Link>

            <Link to={"https://x.com/alramlaa?s=11&t=gtyKfuYmA87cgVZIjmHc5w"}>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
            </Link>
          </ul>
        </div>
      </StandardJoin>
      <div className="join-us-form">
        <div className="container">
          <div className="join-us-container">
            <div className="join-background">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/photos/f0753f5583f55f62c53d68710c1e7c6a.jpg"
                }
                alt=""
              />
            </div>
            <div className="join-form">
              <h1>Join us</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page{" "}
              </p>
              <form>
                <div className="form-group">
                  <label>First & Last Name</label>
                  <input placeholder="i.e. Davon Lean" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input placeholder="Email" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea>The Message</textarea>
                </div>
                <div class="upload-btn-wrapper">
                  <button class="btn">Upload cv</button>
                  <input type="file" name="myfile" />
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function StandardJoin({ children }) {
  return <div className="container">{children}</div>;
}
export default JoinUs;
