import { Contact } from "../home/Home";
import { StandardJoin } from "../join us/Join";
import './Contact.css'
function ConactUsPage() {
  return (
    <section className="contact-us-page standardJoin">
      <StandardJoin>
        <span>Get Started</span>
        <div className="join-heading-container">
          <h1>
            Get in touch with us. <br /> We're here to assist you.
          </h1>
          <ul className="join-links">
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
      </StandardJoin>
      <Contact />
      <SubscribeNews />
    </section>
  );
}
function SubscribeNews() {
  return (
    <div className="subscribe-news-container">
      <div className="container">
        <div className="subscribe-heading">
          <h1>Subcribe to our Newsletter</h1>
          <p>
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.{" "}
          </p>
        </div>
        <div className="subscribe-input">
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ConactUsPage;
