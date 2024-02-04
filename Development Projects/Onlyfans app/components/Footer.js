import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} OnlyFans Rival App. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="/terms" className="text-sm">
              Terms of Service
            </a>
            <a href="/privacy" className="text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;