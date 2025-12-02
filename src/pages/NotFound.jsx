import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found - GameHub';
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-9xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          404
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Oops! Game Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Looks like this level doesn't exist. The page you're looking for might have been removed or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="btn btn-primary bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-none text-white font-bold px-8 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            <Link 
              to="/browse" 
              className="btn btn-outline border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 font-bold px-8 transform hover:scale-105 transition-all duration-300"
            >
              Browse Games
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <Link to="/" className="p-4 bg-white/5 backdrop-blur-lg rounded-lg hover:bg-white/10 transition-colors border border-purple-500/20">
              <div className="text-2xl mb-2">🏠</div>
              <div className="text-sm text-gray-300">Home</div>
            </Link>
            <Link to="/browse" className="p-4 bg-white/5 backdrop-blur-lg rounded-lg hover:bg-white/10 transition-colors border border-purple-500/20">
              <div className="text-2xl mb-2">🎮</div>
              <div className="text-sm text-gray-300">Games</div>
            </Link>
            <Link to="/contact" className="p-4 bg-white/5 backdrop-blur-lg rounded-lg hover:bg-white/10 transition-colors border border-purple-500/20">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm text-gray-300">Contact</div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;