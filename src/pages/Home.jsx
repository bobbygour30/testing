import React from "react";
import assests from "../assets/assests";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-evenly bg-[#F7FF80] text-black py-16 px-6 md:px-12 ">
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to HYBY{" "}
            <span className="bg-clip-text text-transparent bg-purple-500">
              Where Ideas
            </span>{" "}
            <br />
            Come to Life.
          </h1>
          <p className="text-lg mb-6">
            At HYBY, we believe every brand has a story to tell – and we’re here
            to help you tell it in the most creative, impactful way. Whether you
            need a website that amazes your audience, content that connects, or
            ads that actually work, build something your audience won’t forget.
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
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-black text-center mb-6">
            Our Services
          </h2>
          <div className="flex justify-center px-4 sm:px-6">
            <h3 className="text-lg sm:text-xl md:text-2xl text-white w-4/5 sm:w-3/4 md:w-1/2 rounded-full text-center mb-8 sm:mb-12 md:mb-16 font-semibold bg-black">
              What We Do Best 🚀
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Graphic Designing",
                description:
                  "We design visuals that don’t just look good — they make people stop scrolling. From eye-catching logos and packaging to social media graphics and promotional materials, we create designs that communicate your brand’s message loud and clear.",
              },
              {
                title: "Video Editing",
                description:
                  "Videos are the most engaging form of content — but only if they’re done right. We specialize in attention-grabbing edits with professionals for ads, social media, corporate presentations, and more that keep your audience hooked until the very last.",
              },
              {
                title: "Content Writing",
                description:
                  "Great content isn’t just about words—it’s about connection. We write blogs that educate, ads that sell, and captions that engage. Whether it’s about telling your story, ranking on search engines, or turning readers into customers, our words work harder so you don’t have to.",
              },
              {
                title: "Web Development",
                description:
                  "A website should do more than just exist — it should work hard for your brand. We create sleek, fast, and responsive websites that engage visitors, drive conversions, and look amazing on any device. Oh, and managing it? Easier than making toast.",
              },
              {
                title: "App Development",
                description:
                  "We develop apps that are easy to use, packed with features, and look absolutely amazing. From generating the concept to launch day and beyond, we make sure your app not only works perfectly but keeps your users coming back for more.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Good design isn’t just about looks—it’s how people experience your brand. We create easy, user-friendly interfaces that guide users effortlessly and make every click enjoyable. With HYBY’s UI/UX designs, your audience gets an experience that looks great and works even better.",
              },
              {
                title: "Influencer Marketing",
                description:
                  "Want to get people talking about your brand? We connect you with influencers who know how to drive engagement and build trust with their followers. From building authentic partnerships to delivering real engagement, we help you reach the right audience and drive meaningful results.",
              },
              {
                title: "Meta & Google Ads",
                description:
                  "Running ads isn’t about spending more – it’s about spending smart. We create smart, targeted ad campaigns that put your brand in front of the right people. With engaging creatives and strategic planning, we help boost clicks, conversions, and results—without overspending.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  {service.description}
                </p>
                <Link to="/contact">
                  <a
                    href="#"
                    className="text-yellow-400 font-semibold hover:underline text-sm"
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
                image:
                  "https://www.iwdagency.com/cdn/shop/articles/eCommerce_Platform_Pic_2000x.jpg?v=1698957713",
                color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
              },
              {
                title: "Portfolio Website",
                description:
                  "A personalized portfolio to showcase skills and projects.",
                image:
                  "https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85",
                color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
              },
              {
                title: "Blogging Platform",
                description: "A sleek and intuitive platform for blogging.",
                image:
                  "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-black mb-4 sm:mb-6">
            Why Choose HYBY?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 md:mb-12 bg-black rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3">
            We’re not just another agency – we’re your creative partner. Here’s
            why you’ll love working with us 🌟
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Ideas",
                description:
                  "We bring unique ideas and out-of-the-box thinking that make your brand stand out.",
                icon: "🌟",
              },
              {
                title: "Results-Driven",
                description:
                  "Creativity is great, but results are what matter most—and we deliver both to ensure your brand doesn’t just look good—it performs.",
                icon: "✅",
              },
              {
                title: "Customized for You",
                description:
                  "We don’t believe in one-size-fits-all. Every solution we create is designed specifically for your goals.",
                icon: "🎯",
              },
              {
                title: "Collaborative Approach",
                description:
                  "We don’t just work for you; we work with you. Our collaborative approach means we’re with you every step of the way.",
                icon: "🤝",
              },
              {
                title: "We Get Things Done",
                description:
                  "No endless meetings, no empty promises—just good work that speaks volumes and drives real results.",
                icon: "⚡",
              },
              {
                title: "Proven Track Record",
                description:
                  "With years of experience and countless successful projects, we have a track record of delivering excellence every time.",
                icon: "🏆",
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
