import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-black mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Graphic Designing",
              description:
                "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
              icon: "🌐",
              route: "/services/graphics",
            },
            {
              title: "Video Editing",
              description:
                "Editing and enhancing videos for professional and personal use, including film, television, and social media.",
              icon: "📱",
              route: "/services/video",
            },
            {
              title: "Content Writing",
              description:
                "Crafting compelling and informative content for websites, blogs, articles, and marketing materials.",
              icon: "🎨",
              route: "/services/content",
            },
            {
              title: "Web Development",
              description: "Designing and developing websites for businesses.",
              icon: "📈",
              route: "/services/web",
            },
            {
              title: "App Development",
              description:
                "Developing mobile applications for iOS and Android.",
              icon: "☁️",
              route: "/services/app",
            },
            {
              title: "UI/UX Design",
              description:
                "Designing user-friendly and visually appealing interfaces for websites and applications.",
              icon: "🎨",
              route: "/services/ui",
            },
            {
              title: "Influencer Marketing",
              description:
                "Collaborating with influencers to promote your brand and reach a wider audience.",
              icon: "📢",
              route: "/services/influencer",
            },
            {
              title: "Meta & Google Ads",
              description:
                "Managing and optimizing ad campaigns on Meta (Facebook, Instagram) and Google platforms.",
              icon: "💻",
              route: "/services/meta",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-b from-[#f7ff80] to-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-3xl text-white font-bold">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-800">{service.description}</p>
              <Link
                to={service.route}
                className="inline-block mt-4 bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Let's Start Button Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-red-500 mb-6">
          Ready to take the next step?
        </h3>
        <p className="text-gray-900 mb-8 text-2xl">
          Get started with our services today and watch your business grow!
        </p>
        <Link to={"/contact"}>
          <button className="bg-black text-white font-bold text-lg py-3 px-8 rounded-full hover:from-[#f7ff80] hover:to-[#f7ff80] transition-all duration-300 transform hover:scale-105">
            Let's Start
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
