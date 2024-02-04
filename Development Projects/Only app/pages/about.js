import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg">
            Welcome to our OnlyFans rival platform. Our mission is to provide a
            safe and secure environment for content creators to share their
            work and connect with their fans. We are dedicated to ensuring the
            privacy and security of our users while offering a seamless
            browsing experience.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;