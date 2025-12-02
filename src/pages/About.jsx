import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - GameHub';
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
            About GameHub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering indie game developers and connecting players with unique gaming experiences worldwide.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="text-purple-400 text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At GameHub, we believe in the power of independent game development. Our mission is to create a platform where talented developers can showcase their creations and where players can discover innovative, unique gaming experiences that push the boundaries of creativity.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="text-blue-400 text-4xl mb-4">👁️</div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where indie games are celebrated and accessible to everyone. By providing developers with the tools and exposure they need, and players with curated, high-quality content, we're building a community that values creativity, innovation, and passion.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
            <div className="text-gray-300">Games</div>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Developers</div>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
            <div className="text-gray-300">Players</div>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-gray-300">Countries</div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Creativity</h3>
              <p className="text-gray-300">
                We celebrate innovation and encourage developers to push creative boundaries without limitations.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-300">
                Building strong connections between developers and players is at the heart of everything we do.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
              <p className="text-gray-300">
                We curate only the best indie games, ensuring players have access to exceptional experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-linear-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're more than just a platform—we're a passionate community of gamers, developers, and enthusiasts working together to shape the future of indie gaming.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
              Become a Developer
            </button>
            <button className="btn btn-outline border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Join Community
            </button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
