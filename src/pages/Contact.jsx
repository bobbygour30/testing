import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center py-16 px-6 md:px-12 bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] text-black h-[80vh]">
      <div className="max-w-4xl w-full text-center p-8 bg-gradient-to-b from-[#F7FF80] to-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-black">
          Get in Touch
        </h2>
        <p className="text-lg mb-6 text-gray-900 opacity-80 hover:opacity-100 transition-all duration-300">
          Interested in working with us? Reach out and let's discuss your
          project.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-[#F7FF80] px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transform transition-all duration-300 hover:scale-105 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
