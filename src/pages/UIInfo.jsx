import React from "react";

const UIInfo = () => {
  const services = [
    { name: "UI Design", description: "Craft visually appealing and user-friendly interfaces." },
    { name: "Prototyping", description: "Create interactive prototypes for user testing and feedback." },
    { name: "Wireframing", description: "Design the blueprint for your application or website." },
    { name: "Responsive Design", description: "Ensure seamless experiences across all devices." },
    { name: "User Research", description: "Understand user behavior to inform design decisions." },
    { name: "Accessibility Design", description: "Make your interface accessible to all users." },
    { name: "Interaction Design", description: "Enhance user engagement through thoughtful interactions." },
    { name: "UI Testing", description: "Validate designs for usability and functionality." },
    { name: "Visual Design", description: "Create aesthetic and cohesive visual elements." },
    { name: "Component Libraries", description: "Build reusable and consistent design components." },
    { name: "Dark Mode", description: "Design interfaces optimized for dark mode." },
    { name: "Design Systems", description: "Develop scalable and maintainable design systems." },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          UI Design Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Elevate your user interface with our expert UI design services tailored to create seamless and engaging experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
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

export default UIInfo;