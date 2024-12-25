import React from "react";

const MetaAndGoogleAdsInfo = () => {
  const services = [
    { name: "Awareness", description: "Build brand recognition and reach a wider audience." },
    { name: "Traffic", description: "Drive high-quality traffic to your website or app." },
    { name: "Engagement", description: "Boost interaction with your audience through compelling ads." },
    { name: "Leads", description: "Generate potential customer inquiries and contact details." },
    { name: "App Promotion", description: "Increase app downloads and user engagement efficiently." },
    { name: "Sales", description: "Drive purchases and grow your revenue with targeted campaigns." },
    { name: "Search", description: "Capture intent-based customers through high-performing search ads." },
    { name: "Performance Max", description: "Leverage Google's full range of ad inventory for maximum results." },
    { name: "Display", description: "Engage audiences with visually appealing banner ads." },
    { name: "Video", description: "Tell your story through captivating video ads." },
    { name: "App", description: "Promote your app across Google platforms and beyond." },
    { name: "Demand Generation", description: "Create demand and spark interest for your products or services." },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Meta & Google Ads Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Maximize your online presence and achieve your business goals with our tailored Meta and Google Ads services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {service.name.split(" ")[0].charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-purple-500">
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

export default MetaAndGoogleAdsInfo;
