import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="footer text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h2 className="logo">
              <img src="/logo-light.svg" height={40} alt="" />
            </h2>
            <p className="mt-4">
              Eduport education theme, built specifically for the education
              centers which is dedicated to teaching and involve learners.
            </p>

            <div className="d-flex gap-2 mt-3">
              <FaLinkedinIn className=" social-icon" />
              <FaFacebookF className=" social-icon" />
              <FaInstagram className=" social-icon" />
              <CiTwitter className="social-icon" />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact us</li>
              <li>News and Blogs</li>
              <li>Library</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>Instructors</li>
              <li>Workshop</li>
              <li>Help Center</li>
              <li>Faq</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Teaching</h5>
            <ul className="list-unstyled">
              <li>Become a teacher</li>
              <li>How to guide</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>Contact</h5>
            <p>
              Toll free: <strong>+1234 568 963</strong>
              <br />
              <small>(9:AM to 8:PM IST)</small>
            </p>

            <p>
              Email: <strong>example@gmail.com</strong>
            </p>

            <div className="d-flex gap-2 store-btns">
              <img src="/google-play.png" alt="playstore" />
              <img src="/app-store.png" alt="appstore" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container d-flex justify-content-between flex-wrap">
          <p className="mb-0">
            Copyrights ©2026 Eduport Build By Umakant Yadav
          </p>

          <div className="d-flex gap-3">
            <span>
              <CiGlobe className="text-info fs-5" /> Language
            </span>
            <a href="#">Terms of use</a>
            <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
