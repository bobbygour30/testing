import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
          We are a passionate team of professionals committed to delivering top-notch web
          development, app development, and design services. Our mission is to transform your
          ideas into powerful and innovative solutions that meet your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-green-400 to-teal-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
              <span className="text-2xl text-white font-bold">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              Empower businesses with cutting-edge technological solutions that
              drive growth and success.
            </p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
              <span className="text-2xl text-white font-bold">🌍</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              Become a global leader in providing innovative digital services and
              transformative solutions.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg shadow-md font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
