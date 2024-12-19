import React from 'react'

const About = () => {
  return (
    <section className="py-12 px-6 md:px-12 flex flex-col justify-center h-[70vh] bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-white text-center mb-8">
          We are a dedicated team of professionals providing comprehensive solutions
          in web development, app development, and design. Our goal is to turn your
          vision into reality with innovative and efficient solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 shadow-lg rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To empower businesses with cutting-edge technology solutions that drive success.
            </p>
          </div>
          <div className="p-6 bg-gray-800 shadow-lg rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To be a global leader in providing innovative digital services and solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-md shadow-lg hover:bg-yellow-400 transform transition-all duration-300 ease-in-out hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default About
