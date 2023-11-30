import { Link } from "react-scroll";
import React from "react";
import {AiFillMail, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.png" height={90} alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B2349048919298&text&type=phone_number&app_absent=0"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp size={30}/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ironchest_code/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={30}/>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/akintayo-tolani-650b73242/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={30}/>
              </a>
            </li>
            <li>
              <a
                href="mailto:akintayotolani100@gmail.com"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail size={30}/>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Akintayo Tolani</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
