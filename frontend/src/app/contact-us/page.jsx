import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#0a1d37] text-white min-h-screen py-10 px-6">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#00aaff]">Get in Touch</h1>
        <p className="text-lg text-gray-300 mt-4">
          We'd love to hear from you! Contact us using the form below or through the provided channels.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#112240] rounded-lg shadow-lg p-8">
        {/* Custom Form Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#00aaff] mb-4">Send Us a Message</h2>
          <p className="text-gray-300 mb-6">
            Fill out the form below, and we’ll respond as soon as possible:
          </p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#0a1d37] border border-[#00aaff] rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#0a1d37] border border-[#00aaff] rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full bg-[#0a1d37] border border-[#00aaff] rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00aaff]"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#00aaff] hover:bg-[#008ecc] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details Section */}
        <div>
          {/* Contact Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00aaff] mb-4">Contact Details</h2>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@quiizler.com" className="text-[#00aaff] hover:underline">
                support@quiizler.com
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-[#00aaff] hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-gray-300">
              <strong>Address:</strong> 123 Learning Street, Knowledge City, World
            </p>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#00aaff] mb-4">Follow Us</h2>
            <p className="text-gray-300 mb-4">Stay connected through our social media platforms:</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/quiizler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00aaff] hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/quiizler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00aaff] hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/quiizler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00aaff] hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
