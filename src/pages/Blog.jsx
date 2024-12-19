import React from 'react'

const Blog = () => {
  return (
    <section className="py-12 px-6 md:px-12 flex flex-col items-center justify-center bg-black h-[70vh] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 shadow-lg rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">The Future of Web Development</h3>
            <p className="text-gray-400">
              Explore emerging trends and technologies that are shaping the web development landscape.
            </p>
            <button className="text-yellow-500 mt-4 underline transform transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design Principles</h3>
            <p className="text-gray-400">
              Discover the key principles of user-centric design and how to apply them effectively.
            </p>
            <button className="text-yellow-500 mt-4 underline transform transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Building Scalable Applications</h3>
            <p className="text-gray-400">
              Learn how to develop applications that can handle growth and scale seamlessly.
            </p>
            <button className="text-yellow-500 mt-4 underline transform transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
