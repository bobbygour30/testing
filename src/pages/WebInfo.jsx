import React from "react";

const WebInfo = () => {
  const services = [
    { 
      name: "Front-end Development", 
      description: "Build sleek and responsive user interfaces for websites.", 
      icon: "fas fa-code" 
    },
    { 
      name: "Back-end Development", 
      description: "Develop robust server-side logic and databases for your applications.", 
      icon: "fas fa-server" 
    },
    { 
      name: "Full-stack Development", 
      description: "Comprehensive development for both client and server sides.", 
      icon: "fas fa-layer-group" 
    },
    { 
      name: "E-commerce Website Development", 
      description: "Create seamless online stores to enhance your business growth.", 
      icon: "fas fa-shopping-cart" 
    },
    { 
      name: "Custom Website Development", 
      description: "Tailor-made websites designed to meet your unique requirements.", 
      icon: "fas fa-tools" 
    },
    { 
      name: "Website Redesign", 
      description: "Revamp and modernize your existing website for better performance.", 
      icon: "fas fa-sync-alt" 
    },
    { 
      name: "Responsive Web Design", 
      description: "Ensure your site looks great on all devices.", 
      icon: "fas fa-mobile-alt" 
    },
    { 
      name: "Web Application Development", 
      description: "Build dynamic and feature-rich web applications.", 
      icon: "fas fa-laptop-code" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Web Development Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Empower your online presence with our expert web development and design services tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-blue-500">
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

export default WebInfo;
