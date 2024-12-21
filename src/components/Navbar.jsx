import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import assets from "../assets/assests"; // Replace with your logo's path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when a menu item is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <nav className="bg-white md:bg-[rgba(255,255,255,0.8)] flex text-black relative h-24 w-full md:w-[90%] lg:w-[50%] rounded-full shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={assets.logo} alt="Logo" className="h-10 sm:h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="relative group font-bold">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
              <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
            <li className="relative group font-bold">
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
              <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
            <li className="relative group font-bold">
              <Link to="/blog" onClick={handleLinkClick}>
                Blog
              </Link>
              <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
            <li className="relative group font-bold">
              <Link to="/services" onClick={handleLinkClick}>
                Services
              </Link>
              <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
            <li className="relative group font-bold">
              <Link to="/portfolio" onClick={handleLinkClick}>
                Portfolio
              </Link>
              <span className="absolute rounded-full left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
          </ul>

          {/* Contact Button */}
          <button className="hidden md:block bg-black text-white px-6 py-3 rounded-full font-bold tracking-wide hover:bg-yellow-500 hover:text-black transition-all">
            <Link to="/contact">Contact Us</Link>
          </button>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-black focus:outline-none relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 transition-transform duration-300"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  className="rotate-45 transition-all duration-300 transform"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  className="transition-all duration-300"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="absolute top-[100%] left-0 w-full bg-white text-black flex flex-col items-center space-y-6 py-6 z-20 animate-slideIn">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
