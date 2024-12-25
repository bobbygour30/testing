import React from "react";

const Portfolio = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-black mb-12">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              description:
                "A robust platform for online shopping experiences.",
              image: "https://www.iwdagency.com/cdn/shop/articles/eCommerce_Platform_Pic_2000x.jpg?v=1698957713",
            },
            {
              title: "Portfolio Website",
              description:
                "A personalized portfolio to showcase skills and projects.",
              image: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85",
            },
            {
              title: "SaaS Application",
              description:
                "A cloud-based application for efficient business operations.",
              image: "https://www.finoit.com/wp-content/uploads/2023/03/saas-vs-web-applications.jpg",
            },
            {
              title: "Social Media App",
              description:
                "A vibrant app connecting users across the globe.",
              image: "https://interexy.com/wp-content/uploads/2021/11/61d3b99c361d2623653b81d5bc623791.jpg",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-[#F7FF80] to-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4 text-black">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
