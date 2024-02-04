import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContentCard from '../components/ContentCard';

const Home = () => {
  return (
    <>
      <Head>
        <title>OnlyFans Rival App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Featured Content</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;