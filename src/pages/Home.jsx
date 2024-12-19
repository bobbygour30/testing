import React from "react";

const Home = () => {
  return (
    <div className="font-sans bg-black text-white">
      {/* Intro Section */}
      <section className="flex items-center justify-center bg-black h-[70vh] text-white text-center py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Services
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide top-notch services in web development, app development, and more.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-md shadow-lg hover:bg-yellow-400 transform transition-all duration-300 ease-in-out hover:scale-105">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-900 h-[70vh] flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">Creating responsive and stunning websites tailored to your needs.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">App Development</h3>
              <p className="text-gray-600">Building scalable and efficient mobile and web applications.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Crafting user-friendly designs for a seamless experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 px-6 md:px-12 flex items-center justify-center h-[70vh] bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-md overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 1"
                className="w-full h-56 object-cover transition-all duration-500 ease-in-out hover:opacity-80"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300">A robust platform for online shopping experiences.</p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 2"
                className="w-full h-56 object-cover transition-all duration-500 ease-in-out hover:opacity-80"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-300">A personalized portfolio to showcase skills and projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            We deliver high-quality solutions that exceed expectations. Our team of experts ensures that every project is handled with professionalism and precision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-md rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-gray-600">
                Over 10 years of experience in delivering top-notch software solutions.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We adhere to industry standards to ensure the best quality for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="rounded-full mx-auto mb-4 transition-all duration-500 transform hover:scale-105"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="rounded-full mx-auto mb-4 transition-all duration-500 transform hover:scale-105"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="rounded-full mx-auto mb-4 transition-all duration-500 transform hover:scale-105"
              />
              <h3 className="text-xl font-semibold">Emily White</h3>
              <p className="text-gray-400">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
