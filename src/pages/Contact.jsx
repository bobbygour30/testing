import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center py-12 px-6 md:px-12 bg-black text-white h-[70vh]">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-6">
          Interested in working with us? Reach out and let's discuss your
          project.
        </p>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md text-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md text-gray-800"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-md text-gray-800 md:col-span-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-600 md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
