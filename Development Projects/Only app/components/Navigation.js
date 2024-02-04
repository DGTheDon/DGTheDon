import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white text-2xl font-bold">AppName</a>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                </Link>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Blog
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;