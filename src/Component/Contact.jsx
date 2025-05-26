import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 ">
      <div className="w-full max-w-6xl bg-gray-700 rounded-lg shadow-lg flex flex-col sm:flex-row overflow-hidden">
        {/* Left side image (only visible on sm and up) */}
        <div className="hidden sm:block sm:w-1/2">
          <img
            src="https://images.hdqwalls.com/wallpapers/joker-man-without-fear-u3.jpg" // Replace with actual image
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-amber-300 mb-6">Contact Us</h2>
          <form action="/" onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full Name Here"
                className="mt-1 w-full text-amber-300 px-4 py-2 border-b  focus:outline-none focus:border-amber-300 focus:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Full Email"
                className="mt-1 w-full px-4 py-2 border-b text-amber-300 focus:outline-none focus:border-amber-300 focus:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 1234567890"
                className="mt-1 w-full px-4 py-2 border-b text-amber-300 focus:outline-none focus:border-amber-300 focus:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your Message Here"
                className="mt-1 w-full px-4 py-2 border-b text-amber-300 focus:outline-none focus:border-amber-300 focus:ring-amber-400"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
