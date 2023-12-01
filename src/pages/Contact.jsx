import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
      <div className="w-3/4 p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-semibold text-green-800 mb-4">
          Contact Us
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
