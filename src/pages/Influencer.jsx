import React, { useState, useEffect } from "react";
import assets from "../assets/assests";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Influencer = () => {
  const [activeCategory, setActiveCategory] = useState("Beauty");
  const categorie = [
    "Comedy",
    "Entertainment",
    "Fashion",
    "Beauty",
    "Fitness",
    "Travel",
    "Food",
    "Lifestyle",
    "Tech",
    "Gaming",
    "Art",
    "Parenting",
    "Finance",
    "Motivation",
    "Education",
    "Health",
    "Pet",
    "Music",
    "Environmental",
  ];
  const stats = [
    { id: 1, value: "1000+", label: "Satisfied Client", color: "bg-red-500" },
    { id: 2, value: "550+", label: "Project Rate", color: "bg-green-500" },
    { id: 3, value: "98%", label: "Positive Review", color: "bg-black" },
    { id: 4, value: "20+", label: "Team Member", color: "bg-purple-500" },
  ];

  const creators = [
    { id: 1, name: "Facebook", icon: faFacebook },
    { id: 2, name: "Instagram", icon: faInstagram },
    { id: 3, name: "Twitter", icon: faTwitter },
    { id: 4, name: "YouTube", icon: faYoutube },
  ];

  const getPlatformColor = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return "text-blue-600";
      case "instagram":
        return "text-pink-500";
      case "twitter":
        return "text-blue-400";
      case "youtube":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return faFacebook;
      case "instagram":
        return faInstagram;
      case "twitter":
        return faTwitter;
      case "youtube":
        return faYoutube;
      default:
        return null;
    }
  };

  const [secondActiveCategory, setSecondActiveCategory] = useState("Nano");
  const categories = ["Nano", "Micro", "Mid-tier", "Macro", "Mega", "Elite"];
  const [influencers, setInfluencers] = useState([]);

  const [statusFilter, setStatusFilter] = useState(null);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const query = statusFilter !== null ? `?status=${statusFilter}` : "";
        const response = await fetch(
          `https://hybyconnect.com/api/get_influencers${query}`
        );
        const data = await response.json();
        setInfluencers(data);
        console.log(data[0].photo);
        
      } catch (error) {
        console.error("Error fetching influencer data:", error);
      }
    };

    fetchInfluencers();
  }, [statusFilter]);

  return (
    <>
      {/* Hero Section */}
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
          <div className="flex-1 flex flex-col items-center lg:items-end space-y-1 mb-64">
            <div className="bg-red-600 text-white text-base lg:text-lg px-4 py-2 lg:pl-16 rounded-l-2xl rounded-r-2xl lg:rounded-r-none shadow-lg">
              550+ Popular Creator
            </div>
            <button className="bg-black text-white text-sm py-2 w-44 lg:w-48 rounded-l-2xl rounded-r-2xl lg:rounded-r-none shadow-md">
              Promote Your Brand
            </button>
          </div>
        </div>
      </div>

      {/* Creators Section */}
      <div className="bg-[#F7FF80] py-10">
        <h1 className="text-xl font-bold text-center mb-8">
          550+ Popular Creator
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white border-2 border-black rounded-lg flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <FontAwesomeIcon
                icon={creator.icon}
                className={`text-4xl ${getPlatformColor(creator.name)} mb-4`}
              />
              <h3 className="text-lg font-semibold">{creator.name}</h3>
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

      {/* Influencers Section */}
      <div className="bg-[#F7FF80] py-10 px-6 sm:py-8 sm:px-4">
        <h2 className="text-3xl sm:text-2xl font-bold text-center mb-6">
          Our Popular Influencers
        </h2>

        {/* Horizontal Scrollable Categories */}
        <div className="overflow-x-auto mb-8">
          <div className="flex space-x-4 px-6">
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
        </div>

        {/* Filter by Status */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setStatusFilter(true)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              statusFilter === true
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter(false)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              statusFilter === false
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Inactive
          </button>
        </div>

        {/* Influencer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {influencers.map((influencer) => (
            <div
              key={influencer._id}
              className="bg-gray-200 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={`/${influencer.photo}`}
                  alt={influencer.name}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {influencer.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{influencer.about}</p>

                <div className="flex justify-center space-x-4 mt-3">
                  {influencer.platforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.platformLink}
                      className={`hover:opacity-75 transition-opacity duration-300 ${getPlatformColor(
                        platform.platform
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={getPlatformIcon(platform.platform)}
                        size="lg"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Influencer;
