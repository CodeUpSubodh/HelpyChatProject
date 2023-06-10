import "../CSS/Footer.css";

import React from "react";

import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left1">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#66FCF1", marginRight: "2rem" }}
            />
            <div>
              <h4>Gla University,17km Stone,NH-2 P.O.Chaumuhan,Mathura</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#66FCF1", marginRight: "2rem" }}
              />
              1-800-123-4567
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#66FCF1", marginRight: "2rem" }}
              />
              info@gla.ac.in
            </h4>
          </div>
        </div>
        <div className="right2">
          <h4>About the Project</h4>
          <p>
            <h4>
              {" "}
              Helpy Chat is a chat application designed to help people connect
              and communicate with each other in real-time. Its features include
              user registration, chat room creation, and messaging
              functionality. Helpy Chat offers many benefits, including improved
              collaboration, enhanced productivity, and stronger relationships.{" "}
            </h4>{" "}
          </p>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/lucky-verma-6bb29b237"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#66FCF1", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/LuckyVe03310830?s=09" target="_blank">
              <FaTwitter
                size={30}
                style={{ color: "#66FCF1", marginRight: "2rem" }}
              />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100016976880484"
              target="_blank"
            >
              <FaFacebook
                size={30}
                style={{ color: "#66FCF1", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
