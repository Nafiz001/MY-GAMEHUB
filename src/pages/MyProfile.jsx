import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyProfile = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = 'My Profile - GameHub';
  }, []);

  if (!user) {
    return null; // Protected route should handle this
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div
          className="max-w-2xl mx-auto"
        >
          <div className="card bg-gray-800 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-white text-2xl mb-6">My Profile</h2>

              <div className="flex flex-col items-center mb-6">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}&background=6366f1&color=fff&size=96`}
                      alt="Profile" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{user.displayName || 'User'}</h3>
                <p className="text-gray-400">{user.email}</p>
              </div>

              <div className="divider text-gray-400">Account Information</div>

              <div className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text text-gray-300">Name</span>
                  </label>
                  <p className="text-white bg-gray-700 p-3 rounded">{user.displayName || 'Not set'}</p>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-gray-300">Email</span>
                  </label>
                  <p className="text-white bg-gray-700 p-3 rounded">{user.email}</p>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-gray-300">Photo URL</span>
                  </label>
                  <p className="text-white bg-gray-700 p-3 rounded break-all">{user.photoURL || 'Not set'}</p>
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <Link to="/update-profile" className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none">
                  Update Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyProfile;