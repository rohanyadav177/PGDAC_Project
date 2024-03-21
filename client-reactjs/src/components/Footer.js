import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>HealthCare : Seamless Health Insurance Solution System</h3>
      </div>

      <div className="middle-content">
        <div className="column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Register">Register</a>
            </li>
            <li>
              <a href="/ContactUs">Contact</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4 padd>Authors</h4>
          <ul>
            <li>Preeti Sharma</li>
            <li>Pratik Ingale</li>
            <li>Karan Khoje</li>
            <li>Pushpak Bavaskar</li>
            <li>Rohan Yadav</li>
          </ul>
        </div>

        <div className="column">
          <h4>Address</h4>
          <p>
            HealthCare, Mangalwar peth
            <br />
            Kolhapur, Maharashtra<br />
            INDIA
          </p>
        </div>

        <div className="column">
          <h4>Social Media</h4>
          <p>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <span className="social-space"></span> {/* Spacing */}
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <span className="social-space"></span> {/* Spacing */}
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <span className="social-space"></span> {/* Spacing */}
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add other social media icons as needed */}
          </p>
        </div>

        <div className="footer-bottom">
        <p>
          Copyright &copy; <a href="#">HealthCare</a>
        </p>
      </div>

      </div>
     
    </footer>
  );
}
