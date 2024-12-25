import React from "react";

const VideoInfo = () => {
  const services = [
    { name: "Motion Graphics & Animation", description: "Dynamic visuals to bring stories to life." },
    { name: "Social Media Reels", description: "Engaging short videos to boost your social presence." },
    { name: "Wedding & Event Video", description: "Beautifully edited memories for your special occasions." },
    { name: "Documentary Video", description: "Compelling storytelling through professional documentaries." },
    { name: "Music Video", description: "Creative visuals to amplify your music's impact." },
    { name: "Color Grading & Correction", description: "Enhancing video aesthetics with perfect color tones." },
    { name: "Audio Editing & Synchronization", description: "Flawless audio synchronization for crisp sound." },
    { name: "VFX (Visual Effects) Integration", description: "Adding stunning effects to elevate your videos." },
    { name: "Subtitling & Captioning", description: "Making your videos accessible and engaging for all." },
    { name: "Educational & Tutorial Video", description: "Clear and concise videos for effective learning." },
    { name: "Gaming Video", description: "Exciting edits for immersive gaming content." },
    { name: "Time-lapse & Hyper-lapse Editing", description: "Showcasing the passage of time with creative edits." },
    { name: "Commercial Ads", description: "Professional ads to promote your products and services." },
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
              className="relative bg-gradient-to-b from-[#F7FF80]  to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {service.name.split(" ")[0].charAt(0)}
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
