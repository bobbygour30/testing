import React from "react";

const AppInfo = () => {
  const services = [
    { 
      name: "Mobile App Development", 
      description: "Develop versatile apps that cater to a wide audience.", 
      icon: "fas fa-mobile-alt" 
    },
    { 
      name: "iOS App Development", 
      description: "Create high-quality apps tailored for the Apple ecosystem.", 
      icon: "fab fa-apple" 
    },
    { 
      name: "Android App Development", 
      description: "Build robust apps optimized for Android devices.", 
      icon: "fab fa-android" 
    },
    { 
      name: "Cross-platform App Development", 
      description: "Develop apps that work seamlessly across multiple platforms.", 
      icon: "fas fa-sync-alt" 
    },
    { 
      name: "Hybrid App Development", 
      description: "Combine the power of web and native technologies in one app.", 
      icon: "fas fa-code-branch" 
    },
    { 
      name: "Enterprise App Development", 
      description: "Build scalable apps to meet enterprise-level requirements.", 
      icon: "fas fa-building" 
    },
    { 
      name: "Game App Development", 
      description: "Design engaging and immersive mobile gaming experiences.", 
      icon: "fas fa-gamepad" 
    },
    { 
      name: "Wearable App Development", 
      description: "Create innovative apps for wearable devices and gadgets.", 
      icon: "fas fa-stopwatch" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          App Development Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Turn your app ideas into reality with our comprehensive app development services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl">
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

export default AppInfo;
