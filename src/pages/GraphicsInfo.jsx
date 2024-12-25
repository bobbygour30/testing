import React from "react";

const GraphicsInfo = () => {
  const services = [
    { name: "Logo Design", description: "Crafting unique logos that define your brand identity." },
    { name: "Business Card", description: "Designing professional cards to make lasting impressions." },
    { name: "YouTube Thumbnail", description: "Creating eye-catching thumbnails for your videos." },
    { name: "Letterhead and Stationery", description: "Stylish designs for all your business stationery needs." },
    { name: "Brochure", description: "Informative and engaging brochures tailored to your brand." },
    { name: "Flyer", description: "Creative flyers to promote your business effectively." },
    { name: "Poster", description: "High-impact posters for events and promotions." },
    { name: "Banner", description: "Vibrant banners to grab attention and convey messages." },
    { name: "Social Media Graphics", description: "Custom graphics to enhance your social media presence." },
    { name: "Brand Identity Design", description: "Comprehensive design services to establish your brand." },
    { name: "Album Cover", description: "Captivating covers for your albums and music projects." },
    { name: "Advertisement Design", description: "Engaging ads to boost your marketing campaigns." },
    { name: "Motion Graphics", description: "Dynamic animations to tell your story visually." },
    { name: "Infographic Design", description: "Clear and compelling infographics for complex data." },
    { name: "Photo Editing and Retouching", description: "Perfecting images for a polished and professional look." },
    { name: "Typography Design", description: "Stylized typography to make your content stand out." },
    { name: "Others", description: "Custom graphic solutions tailored to your unique needs." },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Our Graphic Design Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          We offer a wide range of graphic design services to bring your creative vision to life. From stunning logos to eye-catching social media graphics, we've got you covered!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {service.name.split(" ")[0].charAt(0)}
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

export default GraphicsInfo;
