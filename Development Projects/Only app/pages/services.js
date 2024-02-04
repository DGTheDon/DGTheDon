import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContentCard from '../components/ContentCard';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center mt-10">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <ContentCard
            title="Service 1"
            description="Description of Service 1"
            imageUrl="/images/service1.jpg"
          />
          <ContentCard
            title="Service 2"
            description="Description of Service 2"
            imageUrl="/images/service2.jpg"
          />
          <ContentCard
            title="Service 3"
            description="Description of Service 3"
            imageUrl="/images/service3.jpg"
          />
          {/* Add more ContentCard components for additional services */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;