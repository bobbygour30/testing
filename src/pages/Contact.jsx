import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center py-16 px-6 md:px-12 bg-gradient-to-br from-teal-400 to-blue-500 text-white h-[80vh]">
      <div className="max-w-4xl w-full text-center p-8 bg-gradient-to-br from-blue-700 to-teal-600 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Get in Touch
        </h2>
        <p className="text-lg mb-6 opacity-80 hover:opacity-100 transition-all duration-300">
          Interested in working with us? Reach out and let's discuss your project.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 w-full"
          />
          {/* Phone Number Input with Full Width */}
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-3 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 w-full"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Optional pattern for formatting (e.g., 123-456-7890)
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 w-full"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transform transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
