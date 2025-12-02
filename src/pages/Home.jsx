import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameList from '../components/GameList';

const Home = () => {
  const games = useLoaderData();
  useEffect(() => {
    document.title = 'GameHub - Discover Indie Games';
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const slides = [
    {
      image: 'https://cdn2.unrealengine.com/egs-bloodlines-2-carousel-video-loop-screenshot-1920x1080-5dc3b319d479.jpg',
      title: 'Epic Adventures Await',
      subtitle: 'Discover the latest games from indie developers'
    },
    {
      image: 'https://cdn2.unrealengine.com/en-dwtdxfn-news-feed-asset-1920x1080-fe4f6730bb46.jpg',
      title: 'Open World Exploration',
      subtitle: 'Immerse yourself in stunning virtual worlds'
    },
    {
      image: 'https://wallpapers.com/images/high/pubg-thumbnail-badass-woman-s7b9qnotigfua99h.webp',
      title: 'Battle Royale Action',
      subtitle: 'Compete with players worldwide in intense matches'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToPopularGames = () => {
    const element = document.getElementById('popular-games');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        {/* Banner Slider */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <div
            key={currentSlide}
            className="absolute inset-0"
          >
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl tracking-wide">
                    <span className="bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                      {slides[currentSlide].title}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-lg font-light tracking-wide max-w-2xl mx-auto">
                    {slides[currentSlide].subtitle}
                  </p>
                  <button 
                    onClick={scrollToPopularGames}
                    className="btn btn-primary btn-lg bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-none shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Games
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Popular Games */}
        <section id="popular-games" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center text-white mb-12"
            >
              Popular Games
            </h2>
            <GameList games={games} />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-gray-400 text-lg">
                Explore games across different genres and find your next favorite
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['FPS', 'RPG', 'Strategy', 'Adventure', 'Puzzle', 'Simulation'].map((category, index) => (
                <motion.a
                  key={category}
                  href="/browse"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-500/30 hover:border-purple-500 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-3">
                    {category === 'FPS' && '🎯'}
                    {category === 'RPG' && '⚔️'}
                    {category === 'Strategy' && '🧠'}
                    {category === 'Adventure' && '🗺️'}
                    {category === 'Puzzle' && '🧩'}
                    {category === 'Simulation' && '🎮'}
                  </div>
                  <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                    {category}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Developers Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Developers
              </h2>
              <p className="text-gray-400 text-lg">
                Meet the talented creators behind your favorite indie games
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Indie Studios', games: 5, icon: '🎨', color: 'from-purple-600 to-pink-600' },
                { name: 'Cosmic Devs', games: 7, icon: '🚀', color: 'from-blue-600 to-cyan-600' },
                { name: 'Pixel Pioneers', games: 4, icon: '👾', color: 'from-green-600 to-emerald-600' }
              ].map((dev, index) => (
                <motion.a
                  key={dev.name}
                  href="/developers"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`text-5xl mb-4 bg-linear-to-r ${dev.color} bg-clip-text text-transparent`}>
                    {dev.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {dev.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{dev.games} games published</p>
                  <div className="flex items-center gap-2 text-purple-400 font-semibold">
                    <span>View Profile</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-linear-to-r from-purple-900 via-indigo-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Stay Updated with Latest Games
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Subscribe to our newsletter and be the first to know about new game releases, updates, and exclusive content!
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="alert alert-success max-w-md mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Successfully subscribed to newsletter!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-lg border border-purple-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive content</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;