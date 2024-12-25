import React from "react";

const AppInfo = () => {
  const services = [
    { name: "App Design", description: "Create intuitive and visually appealing app interfaces." },
    { name: "App Development", description: "Develop robust and scalable mobile applications." },
    { name: "Cross-Platform", description: "Build apps that work seamlessly on iOS and Android." },
    { name: "App Maintenance", description: "Keep your app updated and running smoothly." },
    { name: "Performance Optimization", description: "Enhance app speed and responsiveness." },
    { name: "App Store Optimization", description: "Improve your app's visibility on app stores." },
    { name: "Integration Services", description: "Integrate your app with third-party tools and services." },
    { name: "Testing & QA", description: "Ensure your app is bug-free and performs flawlessly." },
    { name: "Custom Solutions", description: "Tailor-made apps designed to meet your specific needs." },
    { name: "Security", description: "Protect your app and user data with top-notch security measures." },
    { name: "Analytics", description: "Monitor and analyze your app's performance and user behavior." },
    { name: "Push Notifications", description: "Engage users with targeted and timely notifications." },
  ];

  return (
    <section className="py-12  bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
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

export default AppInfo;
