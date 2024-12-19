import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import assets from "../assets/assests"; // Replace with your logo's path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-yellow-500 relative">
      <div className="container mx-auto px-4 py-3 flex justify-between md:justify-evenly items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="relative group">
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
          <li className="relative group">
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
          <li className="relative group">
            <Link to="/blog" className="hover:text-yellow-300">
              Blog
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
          <li className="relative group">
            <Link to="/services" className="hover:text-yellow-300">
              Services
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
          <li className="relative group">
            <Link to="/portfolio" className="hover:text-yellow-300">
              Portfolio
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block bg-white text-black px-6 py-3 rounded-full font-bold tracking-wide hover:bg-yellow-500 hover:text-black transition-all">
          <Link to="/contact">Contact Us</Link>
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-[100%] left-0 w-full bg-black text-yellow-500 flex flex-col items-center space-y-4 py-4 z-20">
            <li>
              <Link to="/home" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-300">
                Blog
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
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
