import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContentCard from '../components/ContentCard';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace the following with dynamic content fetched from your database */}
          <ContentCard title="Blog Post 1" description="This is a sample blog post." />
          <ContentCard title="Blog Post 2" description="This is another sample blog post." />
          <ContentCard title="Blog Post 3" description="Yet another sample blog post." />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;