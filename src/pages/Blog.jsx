import React from "react";

const Blog = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 mb-12">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
              <span className="text-2xl text-white font-bold">🌐</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              The Future of Web Development
            </h3>
            <p className="text-gray-400">
              Explore emerging trends and technologies that are shaping the web
              development landscape.
            </p>
            <button className="text-yellow-400 mt-6 font-semibold underline transform transition-all duration-300 hover:scale-110">
              Read More
            </button>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
              <span className="text-2xl text-white font-bold">🎨</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              UI/UX Design Principles
            </h3>
            <p className="text-gray-400">
              Discover the key principles of user-centric design and how to
              apply them effectively.
            </p>
            <button className="text-yellow-400 mt-6 font-semibold underline transform transition-all duration-300 hover:scale-110">
              Read More
            </button>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
              <span className="text-2xl text-white font-bold">⚙️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Building Scalable Applications
            </h3>
            <p className="text-gray-400">
              Learn how to develop applications that can handle growth and scale
              seamlessly.
            </p>
            <button className="text-yellow-400 mt-6 font-semibold underline transform transition-all duration-300 hover:scale-110">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
