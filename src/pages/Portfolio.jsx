import React from 'react'

const Portfolio = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-md overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-400">A robust platform for online shopping experiences.</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-400">A personalized portfolio to showcase skills and projects.</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">SaaS Application</h3>
              <p className="text-gray-400">A cloud-based application for efficient business operations.</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 4"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Social Media App</h3>
              <p className="text-gray-400">A vibrant app connecting users across the globe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
