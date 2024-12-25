import React from "react";

const ContentInfo = () => {
  const services = [
    { name: "Article Writing", description: "Engage readers with well-researched and compelling articles." },
    { name: "Blog Writing", description: "Create relatable and informative blog posts tailored to your audience." },
    { name: "Copywriting", description: "Craft persuasive content that drives action and conversions." },
    { name: "Email Newsletter Writing", description: "Stay connected with your audience through engaging newsletters." },
    { name: "Ghostwriting", description: "Bring your ideas to life with professional ghostwriting services." },
    { name: "Grant Writing", description: "Secure funding with expertly crafted grant proposals." },
    { name: "Press Release Writing", description: "Announce your news effectively with professionally written press releases." },
    { name: "Product Description Writing", description: "Showcase your products with clear and enticing descriptions." },
    { name: "Social Media Content Creation", description: "Boost your online presence with custom social media content." },
    { name: "Technical Writing", description: "Simplify complex topics with clear and accurate technical writing." },
    { name: "Website Content Writing", description: "Enhance your site with optimized and engaging web content." },
    { name: "SEO Content Writing", description: "Improve visibility with search-engine-friendly content." },
    { name: "Content Editing and Proofreading", description: "Polish your content to perfection with expert editing services." },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Content Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Deliver impactful and engaging content with our range of professional writing services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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

export default ContentInfo;
