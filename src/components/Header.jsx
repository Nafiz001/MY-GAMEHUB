import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch {
      alert('Failed to logout. Please try again.');
    }
  };

  return (
    <header className="bg-black/80 backdrop-blur-lg shadow-lg fixed top-0 z-50 w-full">
      <nav className="navbar container mx-auto px-4">
      <div className="navbar-start">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white font-bold">
            <span className="text-purple-400">Game</span>Hub
          </Link>
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-purple-400' : ''}`}>Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/browse" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/browse' ? 'border-b-2 border-purple-400' : ''}`}>Browse</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/developers" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/developers' ? 'border-b-2 border-purple-400' : ''}`}>Developers</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/about" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/about' ? 'border-b-2 border-purple-400' : ''}`}>About</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/contact" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/contact' ? 'border-b-2 border-purple-400' : ''}`}>Contact</Link>
          </motion.li>
        </ul>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="navbar-center lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/90 backdrop-blur-lg rounded-box w-52">
            <li>
              <Link to="/" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/' ? 'text-purple-400' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/browse" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/browse' ? 'text-purple-400' : ''}`}>Browse</Link>
            </li>
            <li>
              <Link to="/developers" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/developers' ? 'text-purple-400' : ''}`}>Developers</Link>
            </li>
            <li>
              <Link to="/about" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/about' ? 'text-purple-400' : ''}`}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={`text-white hover:text-purple-400 transition-colors duration-300 ${location.pathname === '/contact' ? 'text-purple-400' : ''}`}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/profile" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'User')}&background=6366f1&color=fff&size=96`}
                    alt="User"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'User')}&background=6366f1&color=fff&size=96`;
                    }}
                  />
                </div>
              </Link>
            </motion.div>
            <motion.button 
              onClick={handleLogout} 
              className="btn btn-ghost text-white hover:text-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Logout
            </motion.button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-ghost text-white hover:text-blue-500">Login</Link>
            <Link to="/register" className="btn btn-primary bg-purple-600 hover:bg-purple-700">Register</Link>
          </div>
        )}
      </div>
      </nav>
    </header>
  );
};

export default Header;