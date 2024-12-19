import React from 'react'

const Services = () => {
  return (
    <section className="h-[70vh] flex flex-col justify-center py-12 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-400">Creating responsive and stunning websites tailored to your needs.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">App Development</h3>
            <p className="text-gray-400">Building scalable and efficient mobile and web applications.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-400">Crafting user-friendly designs for a seamless experience.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
            <p className="text-gray-400">Enhancing your online presence with strategic marketing solutions.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-400">Providing secure and scalable cloud-based solutions for your business.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
