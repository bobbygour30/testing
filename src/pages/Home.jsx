import React from "react";
import assests from "../assets/assests";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center justify-evenly bg-white text-black  py-16 px-6 md:px-12">
        {/* Left Section */}
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bringing Your{" "}
            <span className="text-yellow-500">Digital Vision</span> to Life.
          </h1>
          <p className="text-lg mb-6">
            At HYBY Connect, we believe in the transformative power of the web
            to drive business growth and success. Our mission is simple: to be
            your trusted partner on the journey to digital excellence, utilizing
            innovative strategies and unmatched expertise to unlock the full
            potential of your brand.
          </p>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-purple-400 transform transition-all duration-300 ease-in-out hover:scale-105">
            Know More
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center mt-10 md:mt-0 max-w-full">
          <img
            src={assests.banner} // Replace with the actual image URL
            alt="Digital Presence Example"
            className="w-[80%] md:w-[80vh] rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-900 py-16 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Graphics Design",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
              },
              {
                title: "Video Editing",
                description:
                  "Editing and enhancing videos for professional and personal use, including film, television, and social media.",
              },
              {
                title: "Content Writing",
                description:
                  "Crafting compelling and informative content for websites, blogs, articles, and marketing materials.",
              },
              {
                title: "Web Development",
                description:
                  "Designing and developing websites for businesses.",
              },
              {
                title: "App Development",
                description:
                  "Developing mobile applications for iOS and Android.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Designing user-friendly and visually appealing interfaces for websites and applications.",
              },
              {
                title: "Influencer Marketing",
                description:
                  "Collaborating with influencers to promote your brand and reach a wider audience.",
              },
              {
                title: "Meta & Google Ads",
                description:
                  "Managing and optimizing ad campaigns on Meta (Facebook, Instagram) and Google platforms.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-b from-purple-700 to-purple-800 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link to={"/contact"}>
                  <a
                    href="#"
                    className="text-yellow-400 font-semibold hover:underline"
                  >
                    Next Step
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 px-6 md:px-12 flex items-center justify-center bg-gradient-to-bl from-indigo-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A robust platform for online shopping experiences.",
                image: "https://via.placeholder.com/400",
                color: "bg-gradient-to-r from-purple-500 to-pink-500",
              },
              {
                title: "Portfolio Website",
                description:
                  "A personalized portfolio to showcase skills and projects.",
                image: "https://via.placeholder.com/400",
                color: "bg-gradient-to-r from-teal-500 to-cyan-500",
              },
              {
                title: "Blogging Platform",
                description: "A sleek and intuitive platform for blogging.",
                image: "https://via.placeholder.com/400",
                color: "bg-gradient-to-r from-yellow-400 to-orange-500",
              },
              {
                title: "Social Media App",
                description: "A feature-rich app for connecting with friends.",
                image: "https://via.placeholder.com/400",
                color: "bg-gradient-to-r from-red-500 to-pink-600",
              },
              {
                title: "Task Management Tool",
                description: "A productivity tool to manage tasks effectively.",
                image: "https://via.placeholder.com/400",
                color: "bg-gradient-to-r from-blue-500 to-indigo-600",
              },
              {
                title: "Travel Booking System",
                description: "A seamless system for booking travel tickets.",
                image: "https://via.placeholder.com/400",
                color: "bg-gradient-to-r from-green-500 to-lime-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${project.color}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-500 ease-in-out hover:opacity-80"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            We deliver high-quality solutions that exceed expectations. Our team
            of experts ensures every project is handled with professionalism and
            precision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experience",
                description:
                  "Over 10 years of experience in delivering top-notch software solutions.",
                icon: "🌟",
              },
              {
                title: "Quality",
                description:
                  "We adhere to industry standards to ensure the best quality for your project.",
                icon: "✅",
              },
              {
                title: "Innovation",
                description:
                  "We bring innovative ideas to life with cutting-edge technology and creativity.",
                icon: "🚀",
              },
              {
                title: "Support",
                description:
                  "24/7 dedicated support to ensure your satisfaction and success.",
                icon: "📞",
              },
              {
                title: "Affordability",
                description:
                  "High-quality services tailored to fit your budget and needs.",
                icon: "💰",
              },
              {
                title: "Trust",
                description:
                  "A trusted partner with a proven track record of successful projects.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Jane Doe",
                role: "CEO & Founder",
                image: "https://via.placeholder.com/150",
                gradient: "from-teal-500 to-blue-500",
              },
              {
                name: "John Smith",
                role: "Lead Developer",
                image: "https://via.placeholder.com/150",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                name: "Emily White",
                role: "UI/UX Designer",
                image: "https://via.placeholder.com/150",
                gradient: "from-pink-500 to-red-500",
              },
              {
                name: "Michael Brown",
                role: "Marketing Head",
                image: "https://via.placeholder.com/150",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                name: "Sophia Green",
                role: "Content Strategist",
                image: "https://via.placeholder.com/150",
                gradient: "from-green-500 to-lime-500",
              },
              {
                name: "David Clark",
                role: "Project Manager",
                image: "https://via.placeholder.com/150",
                gradient: "from-cyan-500 to-teal-500",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-tr shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`rounded-full w-36 h-36 mx-auto mb-4 bg-gradient-to-br ${member.gradient} p-1`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
