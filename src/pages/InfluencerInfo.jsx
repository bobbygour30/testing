import React from "react";

const InfluencerInfo = () => {
  const services = [
    { name: "Brand Collaborations", description: "Partner with brands to create impactful campaigns." },
    { name: "Content Creation", description: "Produce engaging content for various platforms." },
    { name: "Social Media Growth", description: "Boost your following and engagement rates." },
    { name: "Campaign Management", description: "Organize and execute successful influencer campaigns." },
    { name: "Audience Analytics", description: "Understand your audience and optimize content strategies." },
    { name: "Monetization", description: "Discover ways to earn through your influence." },
    { name: "Platform Strategy", description: "Tailor strategies for Instagram, TikTok, YouTube, and more." },
    { name: "Influencer Training", description: "Learn to maximize your impact and grow professionally." },
    { name: "Reputation Management", description: "Build and maintain a positive personal brand." },
    { name: "Event Participation", description: "Represent brands and engage audiences at events." },
    { name: "Video Production", description: "Create high-quality video content to captivate audiences." },
    { name: "Sponsored Posts", description: "Promote brands effectively through sponsored content." },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Influencer Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Empower your influencer journey with our specialized services designed to help you succeed in the digital landscape.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {service.name.split(" ")[0].charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-pink-500">
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

export default InfluencerInfo;
