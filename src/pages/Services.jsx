import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Graphics Design",
              description:
                "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
              icon: "🌐",
            },
            {
              title: "Video Editing",
              description:
                "Editing and enhancing videos for professional and personal use, including film, television, and social media.",
              icon: "📱",
            },
            {
              title: "Content Writing",
              description:
                "Crafting compelling and informative content for websites, blogs, articles, and marketing materials.",
              icon: "🎨",
            },
            {
              title: "Web Development",
              description: "Designing and developing websites for businesses.",
              icon: "📈",
            },
            {
              title: "App Development",
              description:
                "Developing mobile applications for iOS and Android.",
              icon: "☁️",
            },
            {
              title: "UI/UX Design",
              description:
                "Designing user-friendly and visually appealing interfaces for websites and applications.",
              icon: "🎨",
            },
            {
              title: "Influencer Marketing",
              description:
                "Collaborating with influencers to promote your brand and reach a wider audience.",
              icon: "📢",
            },
            {
              title: "Meta & Google Ads",
              description:
                "Managing and optimizing ad campaigns on Meta (Facebook, Instagram) and Google platforms.",
              icon: "💻",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-3xl text-white font-bold">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Let's Start Button Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Ready to take the next step?
        </h3>
        <p className="text-gray-400 mb-8">
          Get started with our services today and watch your business grow!
        </p>
        <Link to={"/contact"}>
          <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold text-lg py-3 px-8 rounded-full hover:from-teal-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
            Let's Start
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
