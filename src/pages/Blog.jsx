import React from "react";

const Blog = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] text-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl p-7 font-extrabold text-transparent bg-clip-text bg-black mb-6">
          Welcome to Our Blog
        </h1>
        <p className="text-lg font-medium text-gray-800 max-w-3xl mx-auto">
          Discover insights, strategies, and stories from industry leaders. 
          Learn about the latest in technology, design, and business growth to inspire your journey.
        </p>
      </div>

      {/* Featured Articles Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Breaking Down AI for Business",
              description:
                "Explore how artificial intelligence is reshaping industries and creating opportunities.",
              image: "https://via.placeholder.com/400",
            },
            {
              title: "Designing for Accessibility",
              description:
                "Learn the principles of inclusive design and how to build better user experiences for everyone.",
              image: "https://via.placeholder.com/400",
            },
            {
              title: "Mastering Digital Marketing",
              description:
                "Get actionable tips for SEO, social media, and email marketing to grow your brand.",
              image: "https://via.placeholder.com/400",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">
                  {article.title}
                </h3>
                <p className="text-gray-700">{article.description}</p>
                <button className="mt-6 text-yellow-500 font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: "Technology",
              description:
                "The latest advancements, innovations, and breakthroughs in tech.",
            },
            {
              category: "Design",
              description:
                "Trends and best practices for UI/UX, graphic design, and creative solutions.",
            },
            {
              category: "Marketing",
              description:
                "Strategies to drive growth and connect with your audience effectively.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg text-center hover:scale-105 transform transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {item.category}
              </h3>
              <p className="text-gray-300">{item.description}</p>
              <button className="mt-6 text-yellow-400 font-semibold hover:underline">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

     
      
    </section>
  );
};

export default Blog;
