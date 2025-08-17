import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://leetcode.com/u/pirshariq419/" target="_blank" className="items">
          <SiLeetcode  className="icons"/>
          </a>
          <a href="https://www.linkedin.com/in/pirshariq419/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/pirshariq419" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://twitter.com/pirshariq419" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />  
          </a>
          <a href="https://facebook.com/pirzada.shariq.52" target="_blank" className="items">
            <FaFacebookSquare className="icons" />  
          </a>
          <a href="https://www.instagram.com/pirshariq419/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.youtube.com/@pirshariq419/" target="_blank" className="items">
            <FaYoutubeSquare className="icons" />
          </a>
          <a
            href="mailto:pirshariq419@gmail.com"
            className="items"
        >
       <SiGmail className="icons" />
        </a>
        </div>
      </div>
    </>
  );
};

export default Contact;