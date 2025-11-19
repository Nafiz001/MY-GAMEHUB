import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found - GameHub';
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div
        className="text-center"
      >
        <div className="text-9xl font-bold text-purple-400 mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;