import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;