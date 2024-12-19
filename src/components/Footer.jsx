import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assests"; // Replace with your logo's path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-12 sm:h-10 md:h-12"
            />
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6 font-medium">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-yellow-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Middle Section: Social Media Links */}
        <div className="flex justify-center md:justify-end mt-8 space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>&copy;  {new Date().getFullYear()} HYBY connect . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
