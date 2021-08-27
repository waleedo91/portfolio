import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../footer/Footer.css";

export function Footer() {
  return (
    <div>
      <div className="contact-block">
        <h1 className="contact-header">Contact Me!</h1>
        <ul className="contact">
          <li id="wsaleh1991@gmail.com" class="contact-info">
            <SiGmail /> - wsaleh1991@gmail.com
          </li>
          <li id="linkedin" class="contact-info">
            <a href="https://www.linkedin.com/in/waleed-saleh-808b6514b/">
              <FaLinkedin />
            </a>
          </li>
          <li id="facebook" class="contact-info">
            <a href="https://www.facebook.com/waleedo.91">
              <FaFacebook />
            </a>
          </li>
          <li id="github" class="contact-info">
            <a href="https://github.com/waleedo91">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
