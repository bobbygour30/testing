import React from "react";
import assests from "../assets/assests";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-evenly bg-[#F7FF80] text-black py-16 px-6 md:px-12 ">
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bringing Your{" "}
            <span className="bg-clip-text text-transparent bg-purple-500">
              Digital Vision
            </span>{" "}
            to Life.
          </h1>
          <p className="text-lg mb-6">
            At HYBY Connect, we believe in the transformative power of the web
            to drive business growth and success. Our mission is simple: to be
            your trusted partner on the journey to digital excellence, utilizing
            innovative strategies and unmatched expertise to unlock the full
            potential of your brand.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-[#F7FF80] font-bold text-black px-6 py-3 rounded-md shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center mt-10 md:mt-0 max-w-full">
          <img
            src={assests.banner}
            alt="Digital Presence Example"
            className="w-[80%] md:w-[80vh] rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F7FF80] to-black py-16 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-black text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Graphic Designing",
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
                className="p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
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
      <section className="py-12 px-6 md:px-12 flex items-center justify-center bg-[#F7FF80]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-black mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A robust platform for online shopping experiences.",
                image: "https://www.iwdagency.com/cdn/shop/articles/eCommerce_Platform_Pic_2000x.jpg?v=1698957713",
                color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
              },
              {
                title: "Portfolio Website",
                description:
                  "A personalized portfolio to showcase skills and projects.",
                image: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85",
                color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
              },
              {
                title: "Blogging Platform",
                description: "A sleek and intuitive platform for blogging.",
                image: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png",
                color: "bg-gradient-to-r from-yellow-400 to-yellow-500",
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
      <section className="py-16 px-6 md:px-12 bg-[#F7FF80]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-black mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-black mb-12">
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
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
