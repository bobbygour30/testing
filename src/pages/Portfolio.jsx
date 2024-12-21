import React from 'react'

const Portfolio = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 mb-12">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              description:
                "A robust platform for online shopping experiences.",
              image: "https://via.placeholder.com/400",
            },
            {
              title: "Portfolio Website",
              description:
                "A personalized portfolio to showcase skills and projects.",
              image: "https://via.placeholder.com/400",
            },
            {
              title: "SaaS Application",
              description:
                "A cloud-based application for efficient business operations.",
              image: "https://via.placeholder.com/400",
            },
            {
              title: "Social Media App",
              description:
                "A vibrant app connecting users across the globe.",
              image: "https://via.placeholder.com/400",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
