import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Message */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Crafted with ❤️ by Anupam</h3>
          <p className="text-gray-400 mt-1">
            Building beautiful UIs and smooth web experiences, one line of code at a time.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold">Get in Touch</h4>
          <a
            href="mailto:dev.anupamupadhyay@gmail.com"
            className="text-blue-400 hover:underline transition"
          >
            dev.anupamupadhyay@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        ©{new Date().toLocaleDateString()} Anupam Upadhyay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
