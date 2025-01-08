import React from "react";
import assets from "../assets/assests";
import { useState } from "react";
import { Link } from "react-router-dom";

const Influencer = () => {
  const [activeCategory, setActiveCategory] = useState("Beauty");
  const categorie = ["Entertainment", "Comedy", "Beauty", "Sport"];
  const creators = [
    { id: 1, name: "Canva", icon: "📘" },
    { id: 2, name: "Icon 2", icon: "🔥" },
    { id: 3, name: "Icon 3", icon: "🔗" },
    { id: 4, name: "Icon 4", icon: "D" },
    { id: 5, name: "Icon 5", icon: "A" },
    { id: 6, name: "Icon 6", icon: "📚" },
    { id: 7, name: "Icon 7", icon: "🦁" },
    { id: 8, name: "Icon 8", icon: "🏙️" },
  ];
  const stats = [
    { id: 1, value: "1000+", label: "Satisfied Client", color: "bg-red-500" },
    { id: 2, value: "550+", label: "Project Rate", color: "bg-green-500" },
    { id: 3, value: "98%", label: "Positive Review", color: "bg-black" },
    { id: 4, value: "20+", label: "Team Member", color: "bg-purple-500" },
  ];
  const [secondActiveCategory, setSecondActiveCategory] = useState("Nano");
  const categories = ["Nano", "Micro", "Mid-tier", "Macro", "Mega", "Elite"];

  // Sample data for influencers
  const influencers = [
    {
      id: 1,
      name: "Riya Singh",
      description: "Comedy, Funny",
      img: "https://via.placeholder.com/300x200",
      socials: ["instagram", "youtube", "facebook"],
    },
    {
      id: 2,
      name: "Arjun Verma",
      description: "Tech Enthusiast",
      img: "https://via.placeholder.com/300x200",
      socials: ["instagram", "youtube", "facebook"],
    },
    {
      id: 3,
      name: "Meera Patel",
      description: "Fashion & Lifestyle",
      img: "https://via.placeholder.com/300x200",
      socials: ["instagram", "youtube", "facebook"],
    },
    {
      id: 4,
      name: "Rahul Sharma",
      description: "Travel Blogger",
      img: "https://via.placeholder.com/300x200",
      socials: ["instagram", "youtube", "facebook"],
    },
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center mt-24 rounded-xl lg:h-full">
        <div className="h-[600px] lg:h-auto w-[90%] md:w-[70%] bg-gradient-to-r from-white via-[#F7FF80] to-white pl-0 lg:pl-32 flex flex-col md:flex-row items-center justify-between rounded-xl">
          {/* Text Section */}
          <div className="flex-1 mb-6 md:mb-0 text-center lg:text-left">
            <h1 className="text-2xl lg:text-base text-gray-500 font-bold">
              Find The <span className="text-red-500">Best</span>
            </h1>
            <h2 className="text-5xl md:text-5xl font-bold">Influencer</h2>
            <p className="text-base text-gray-500">For Your Business</p>
            <Link to={"/influencerdetails"}>
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Get Started
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={assets.hero}
              alt="Influencer"
              className="w-auto h-[300px] mr-16 lg:mr-0 md:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Buttons Section */}
          <div className="flex-1 flex flex-col items-center lg:items-end space-y-1 mb-64 ">
            <div className="bg-red-600 text-white text-base lg:text-lg px-4 py-2  lg:pl-16 rounded-l-2xl rounded-r-2xl lg:rounded-r-none  lg:rounded-l-2xl shadow-lg">
              550+ Popular Creator
            </div>
            <button className="bg-black text-white text-sm py-2 w-44 lg:w-48 rounded-l-2xl rounded-r-2xl lg:rounded-r-none  lg:rounded-l-2xl shadow-md">
              Promote Your Brand
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F7FF80] py-10">
        <h1 className="text-xl font-bold text-center mb-8">
          550+ Popular Creator
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white border-2 border-black rounded-lg flex items-center justify-center p-6 shadow-md"
            >
              <span className="text-4xl">{creator.icon}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F7FF80] py-10">
        <h1 className="text-xl font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 lg:space-x-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className=" p-6 rounded-lg relative">
              <img
                src={assets.hero2}
                alt="Social Media Representation"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">Data</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col justify-center items-center rounded-full text-white ${stat.color}`}
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7FF80] py-10 px-6 sm:py-8 sm:px-4">
        <h2 className="text-3xl sm:text-2xl font-bold text-center mb-6">
          Our Popular Influencer
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categorie.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Influencer Card */}
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 max-w-lg mx-auto">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Influencer"
            className="rounded-lg w-full mb-4"
          />
          <div className="text-center">
            <h3 className="text-xl sm:text-lg font-semibold">Riya Singh</h3>
            <p className="text-sm text-gray-600">Comedy, Funny</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-black hover:text-gray-700">
              {/* SVG Icon */}
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              {/* SVG Icon */}
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              {/* SVG Icon */}
            </a>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <div className="bg-[#F7FF80] py-10 px-6 sm:py-8 sm:px-4">
        <h2 className="text-3xl sm:text-2xl font-bold text-center mb-6">
          Influencer Tiers
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSecondActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                secondActiveCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Influencer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="bg-gray-100 rounded-xl shadow-lg p-6"
            >
              <img
                src={influencer.img}
                alt={influencer.name}
                className="rounded-lg w-full mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl sm:text-lg font-semibold">
                  {influencer.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {influencer.description}
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mt-4">
                {influencer.socials.includes("instagram") && (
                  <a href="#" className="text-black hover:text-gray-700">
                    {/* SVG Icon */}
                  </a>
                )}
                {influencer.socials.includes("youtube") && (
                  <a href="#" className="text-black hover:text-gray-700">
                    {/* SVG Icon */}
                  </a>
                )}
                {influencer.socials.includes("facebook") && (
                  <a href="#" className="text-black hover:text-gray-700">
                    {/* SVG Icon */}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          What We Provide ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Brand Promotion",
              icon: "fas fa-bullhorn", // Megaphone for promotion
              description:
                "Boosts brand visibility and recognition through strategic campaigns that highlight the unique qualities of your brand across multiple platforms.",
            },
            {
              title: "Song Promotion",
              icon: "fas fa-music", // Music note for songs
              description:
                "Focuses on increasing a song's reach and popularity by sharing it on social media, streaming platforms, and engaging audiences through music-related content.",
            },
            {
              title: "Meme Marketing",
              icon: "fas fa-laugh-squint", // Laughing emoji for memes
              description:
                "Leverages humor and relatable content in the form of memes to create viral campaigns, enhancing engagement and spreading brand awareness.",
            },
            {
              title: "Event Promotion",
              icon: "fas fa-calendar-alt", // Calendar for events
              description:
                "Drives attendance and visibility for events by utilizing social media, email campaigns, and targeted advertising to generate buzz and excitement.",
            },
            {
              title: "Content Marketing",
              icon: "fas fa-pen-nib", // Pen nib for content creation
              description:
                "Builds trust and authority by creating valuable, engaging, and informative content tailored to your target audience, driving traffic and fostering loyalty.",
            },
            {
              title: "Movie Marketing",
              icon: "fas fa-film", // Film strip for movies
              description:
                "Maximizes a film's reach through trailers, posters, social media campaigns, and collaborations, building anticipation and driving box office success.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg bg-gradient-to-r from-[#F7FF80] via-[white] to-[#F7FF80] text-center"
            >
              <div className="flex items-center justify-center mb-4 text-lg text-gray-700">
                <i className={`${item.icon} text-blue-500 text-2xl`}></i>
                <span className="ml-3 font-bold text-2xl">{item.title}</span>
              </div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* First Section */}
        <div className="w-full max-w-screen-xl">
          <h2 className="text-center text-3xl font-bold mt-10 mb-10">
            Our Mission
          </h2>
          <div className="flex justify-evenly items-center">
            <div className="w-[40%]">
              <h1 className="text-center text-3xl font-semibold text-gray-600">
                Get the Best And Most
              </h1>
              <h1 className="text-red-500 text-center text-3xl">
                Creative Result
              </h1>
              <h1 className="text-center text-5xl font-bold">Data</h1>
            </div>
            <div className="w-[40%]">
              <img className="w-[70%] rounded-lg" src={assets.hero2} alt="" />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full max-w-screen-xl mt-20">
          <h2 className="text-center text-3xl font-bold mt-10 mb-10">
            Our Story
          </h2>
          <div className="flex justify-evenly items-center">
            <div className="w-[40%]">
              <img className="w-[70%] rounded-lg" src={assets.hero2} alt="" />
            </div>
            <div className="w-[40%]">
              <h1 className="text-center text-3xl font-semibold text-gray-600">
                Right Decision For Your
              </h1>
              <h1 className="text-red-500 text-center text-3xl">
                Marketing Strategy
              </h1>
              <h1 className="text-center text-5xl font-bold">Data</h1>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="bg-yellow-50 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us</h2>
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold">Perfect Media With</h3>
          <h3 className="text-xl font-bold">Perfect Partner</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75"
                />
              </svg>
              <span className="ml-2">Affordable Price</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75"
                />
              </svg>
              <span className="ml-2">Guaranteed Result</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75"
                />
              </svg>
              <span className="ml-2">Years Experience</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75"
                />
              </svg>
              <span className="ml-2">Partner Worldwide</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75"
                />
              </svg>
              <span className="ml-2">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75"
                />
              </svg>
              <span className="ml-2">Industry Expert</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Influencer;
