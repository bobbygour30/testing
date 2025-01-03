import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assests";

const Portfolio = () => {
  const projects = [
    {
      title: "Angry Bird Animation",
      category: "UI/UX Design",
      description: "A captivating animation of 3 angry birds.",
      image: `${assets.angryBird}`,
      link: "https://drive.google.com/file/d/1VIlevwfcff4shy2RWCr7ehs-zSqSCcxs/view?usp=drive_link",
    },
    {
      title: "Kilogram Case Study",
      category: "UI/UX Design",
      description: "UI/UX design of a case study.",
      image: `${assets.casestudy}`,
      link: "https://drive.google.com/file/d/1-uSjBRJUNPPDw2gZpMry_u43hWzdEhXJ/view?usp=drive_link",
    },
    {
      title: "Hyby Connect Desktop UI",
      category: "UI/UX Design",
      description: "Desktop UI for Hyby Connect home page.",
      image: `${assets.desktop}`,
      link: "https://drive.google.com/file/d/12iyWP908StdGir14w-4cSXtG61l5Xaq1/view?usp=drive_link",
    },
    {
      title: "Nike App Shoe Animation",
      category: "UI/UX Design",
      description: "A captivating animation of Nike shoes.",
      image: `${assets.nike}`,
      link: "https://drive.google.com/file/d/1VRJe60xiCzs4CmQQjSJ8ohzYrZf49WPN/view?usp=drive_link",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A robust platform for online shopping experiences.",
      image:
        "https://www.iwdagency.com/cdn/shop/articles/eCommerce_Platform_Pic_2000x.jpg?v=1698957713",
      link: "/ecommerce-platform",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description: "A personalized portfolio to showcase skills and projects.",
      image:
        "https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85",
      link: "/portfolio-website",
    },
    {
      title: "SaaS Application",
      category: "Software Development",
      description: "A cloud-based application for efficient business operations.",
      image:
        "https://www.finoit.com/wp-content/uploads/2023/03/saas-vs-web-applications.jpg",
      link: "/saas-application",
    },
    {
      title: "Social Media App",
      category: "Mobile App Development",
      description: "A vibrant app connecting users across the globe.",
      image:
        "https://interexy.com/wp-content/uploads/2021/11/61d3b99c361d2623653b81d5bc623791.jpg",
      link: "/social-media-app",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-black mb-12">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={project.link} className="block">
              <div className="cursor-pointer p-6 bg-gradient-to-br from-[#F7FF80] to-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold text-black">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 ">
                  {project.category}
                </p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
