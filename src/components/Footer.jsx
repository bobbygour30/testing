import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assests"; // Replace with your logo's path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faGlobe,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#F7FF80] text-black font-bold py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img src={assets.logo} alt="Logo" className="h-16" />
            <div className="text-sm text-left max-w-xs">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-400" />
                <p>+91 7276185035 / +91 7276285035</p>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="text-yellow-400" />
                <p>www.hybyconnect.com</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" />
                <p>info@hybyconnect.com</p>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-yellow-400"
                />
                <p>
                  C-106, Gladiolus Tower, Yashwant Smart City, Vasai (E),
                  Mumbai - 401208.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center">
            <Link to="/terms" className="hover:text-yellow-400">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
            <Link to="/influencer/admin" className="hover:text-yellow-400">
              Admin
            </Link>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} HYBY CONNECT PVT. LTD. All Rights Reserved.
          </p>
          <p className="text-xs mt-2">
            Designed with <span className="text-yellow-400">passion</span> by
            our team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
