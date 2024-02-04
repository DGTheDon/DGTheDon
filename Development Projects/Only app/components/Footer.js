import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="font-bold mb-4">OnlyFans Rival App</h3>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <ul className="mb-4">
              <li className="inline-block mx-2">
                <a href="/about" className="hover:text-gray-300">About</a>
              </li>
              <li className="inline-block mx-2">
                <a href="/services" className="hover:text-gray-300">Services</a>
              </li>
              <li className="inline-block mx-2">
                <a href="/blog" className="hover:text-gray-300">Blog</a>
              </li>
              <li className="inline-block mx-2">
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>Follow us on social media:</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;