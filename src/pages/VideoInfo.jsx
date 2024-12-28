import React from "react";

const VideoInfo = () => {
  const services = [
    { 
      name: "Wedding Video Editing", 
      description: "Beautifully crafted videos to cherish your special day.", 
      icon: "fas fa-heart" 
    },
    { 
      name: "Corporate Video Editing", 
      description: "Professional videos to represent your business.", 
      icon: "fas fa-briefcase" 
    },
    { 
      name: "Music Video Editing", 
      description: "Creative edits that amplify the impact of your music.", 
      icon: "fas fa-music" 
    },
    { 
      name: "Explainer Video Editing", 
      description: "Clear and engaging videos to explain your ideas.", 
      icon: "fas fa-chalkboard-teacher" 
    },
    { 
      name: "Social Media Video Editing", 
      description: "Short and impactful videos for social platforms.", 
      icon: "fas fa-share-alt" 
    },
    { 
      name: "Event Video Editing", 
      description: "Capturing the essence of your events with finesse.", 
      icon: "fas fa-calendar-alt" 
    },
    { 
      name: "Short Film Editing", 
      description: "Cinematic editing for your storytelling projects.", 
      icon: "fas fa-film" 
    },
    { 
      name: "Vlog Editing", 
      description: "Polished edits to enhance your vlogging content.", 
      icon: "fas fa-video" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Our Video Editing Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Explore our diverse range of video editing and production services. From cinematic videos to engaging social media content, we bring your vision to life!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#F7FF80] to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-green-500">
                {service.name}
              </h3>
              <p className="text-sm text-center text-gray-600 group-hover:text-gray-800">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoInfo;
