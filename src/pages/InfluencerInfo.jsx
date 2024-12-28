import React from "react";

const InfluencerInfo = () => {
  const services = [
    { 
      name: "Sponsored Content", 
      description: "Create engaging sponsored posts to promote brands.", 
      icon: "fas fa-ad" 
    },
    { 
      name: "Product Reviews", 
      description: "Provide authentic and detailed reviews of products.", 
      icon: "fas fa-star" 
    },
    { 
      name: "Influencer Takeovers", 
      description: "Manage brand accounts for exclusive influencer content.", 
      icon: "fas fa-users" 
    },
    { 
      name: "Affiliate Marketing", 
      description: "Generate revenue through affiliate partnerships.", 
      icon: "fas fa-handshake" 
    },
    { 
      name: "Brand Ambassadors", 
      description: "Represent brands and foster long-term collaborations.", 
      icon: "fas fa-flag" 
    },
    { 
      name: "Social Media Contests", 
      description: "Engage followers with interactive and fun contests.", 
      icon: "fas fa-trophy" 
    },
    { 
      name: "Influencer Events", 
      description: "Participate in events to connect with audiences and brands.", 
      icon: "fas fa-calendar-alt" 
    },
    { 
      name: "Content Partnerships", 
      description: "Collaborate with other creators for impactful content.", 
      icon: "fas fa-hand-holding-heart" 
    },
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
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white text-2xl">
                  <i className={service.icon}></i>
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
