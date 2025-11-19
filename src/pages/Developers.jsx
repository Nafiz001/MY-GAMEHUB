import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Developers = () => {
  useEffect(() => {
    document.title = 'Game Developers - GameHub';
  }, []);

  const developers = [
    {
      name: 'Indie Studios',
      games: 5,
      description: 'Creating unique adventure games that push the boundaries of storytelling and player immersion.',
      founded: '2018',
      location: 'San Francisco, CA',
      specialty: 'Adventure & RPG',
      avatar: 'https://ui-avatars.com/api/?name=Indie+Studios&background=6366f1&color=fff&size=96',
      achievements: ['Best Indie Game 2022', 'Player Choice Award']
    },
    {
      name: 'Brain Games Inc',
      games: 3,
      description: 'Puzzle masters extraordinaire, crafting mind-bending challenges that test your intellect and creativity.',
      founded: '2016',
      location: 'Seattle, WA',
      specialty: 'Puzzle & Strategy',
      avatar: 'https://ui-avatars.com/api/?name=Brain+Games&background=10b981&color=fff&size=96',
      achievements: ['Puzzle Innovation Award', 'Mind Games Champion']
    },
    {
      name: 'Cosmic Devs',
      games: 7,
      description: 'Exploring the universe through games, creating epic space adventures and sci-fi experiences.',
      founded: '2019',
      location: 'Austin, TX',
      specialty: 'Sci-Fi & Space',
      avatar: 'https://ui-avatars.com/api/?name=Cosmic+Devs&background=8b5cf6&color=fff&size=96',
      achievements: ['Space Game Excellence', 'Sci-Fi Innovation']
    },
    {
      name: 'Pixel Pioneers',
      games: 4,
      description: 'Retro-inspired games with modern twists, bringing back the golden age of gaming with fresh perspectives.',
      founded: '2017',
      location: 'Portland, OR',
      specialty: 'Retro & Arcade',
      avatar: 'https://ui-avatars.com/api/?name=Pixel+Pioneers&background=f59e0b&color=fff&size=96',
      achievements: ['Retro Revival Award', 'Pixel Art Excellence']
    },
    {
      name: 'Neon Nights Studio',
      games: 6,
      description: 'Cyberpunk and futuristic games that capture the neon glow of tomorrow\'s cities and technologies.',
      founded: '2020',
      location: 'Los Angeles, CA',
      specialty: 'Cyberpunk & Action',
      avatar: 'https://ui-avatars.com/api/?name=Neon+Nights&background=ef4444&color=fff&size=96',
      achievements: ['Cyberpunk Innovation', 'Future Games Award']
    },
    {
      name: 'Mystic Realms',
      games: 8,
      description: 'Fantasy worlds come alive through immersive storytelling and magical gameplay experiences.',
      founded: '2015',
      location: 'Boston, MA',
      specialty: 'Fantasy & Magic',
      avatar: 'https://ui-avatars.com/api/?name=Mystic+Realms&background=06b6d4&color=fff&size=96',
      achievements: ['Fantasy Excellence', 'Magic & Wonder Award']
    }
  ];

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
            Game Developers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the creative minds behind your favorite indie games. These talented developers are pushing the boundaries of gaming innovation and storytelling.
          </p>
          <div className="divider divider-primary my-8"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">{developers.length}</div>
            <div className="text-gray-300">Active Studios</div>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {developers.reduce((sum, dev) => sum + dev.games, 0)}
            </div>
            <div className="text-gray-300">Games Created</div>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-green-400 mb-2">
              {new Date().getFullYear() - Math.min(...developers.map(dev => parseInt(dev.founded)))}
            </div>
            <div className="text-gray-300">Years Combined</div>
          </div>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card bg-black/40 backdrop-blur-lg border border-purple-500/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full overflow-hidden">
                {/* Header with Avatar */}
                <div className="card-body p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-full ring ring-purple-500/30 ring-offset-2 ring-offset-slate-900">
                        <img src={dev.avatar} alt={dev.name} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {dev.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {dev.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {dev.description}
                  </p>

                  {/* Specialty Badge */}
                  <div className="mb-4">
                    <span className="badge badge-primary bg-purple-600/80 border-purple-400 text-white font-medium px-3 py-1">
                      {dev.specialty}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dev.achievements.map((achievement, idx) => (
                        <span key={idx} className="badge badge-secondary bg-blue-600/60 border-blue-400 text-xs px-2 py-1">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="flex justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Founded {dev.founded}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {dev.games} Games
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-linear-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Join Our Community?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Are you a game developer looking to showcase your work? Join our platform and connect with players worldwide.
          </p>
          <button className="btn btn-primary bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
            Become a Developer
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Developers;