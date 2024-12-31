import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Retrieve blogs from localStorage when the component mounts
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);

  // Save blogs to localStorage whenever blogs state changes
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      const newBlog = {
        title: formData.title,
        description: formData.description,
        image: imagePreview,
      };
      setBlogs([...blogs, newBlog]);
      setFormData({ title: "", description: "", image: null });
      setImagePreview(null);
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] text-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to Our Blog
        </h1>
        <p className="text-lg font-medium text-gray-700 max-w-3xl mx-auto">
          Discover insights, strategies, and stories from industry leaders.
          Learn about the latest in technology, design, and business growth to
          inspire your journey.
        </p>
      </div>

      {/* Blog Submission Form */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Write a Blog
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="bg-gradient-to-tr from-[#F7FF80] via-white to-[#F7FF80] p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7FF80]"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7FF80]"
              placeholder="Enter blog description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600">Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#F7FF80] text-gray-800 py-3 px-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300"
          >
            Submit Blog
          </button>
        </form>
      </section>

      {/* Display User Blogs */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          User Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-700">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Blog;
