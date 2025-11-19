import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from "motion/react"

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    photoURL: user?.photoURL || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Update Profile - GameHub';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await updateUserProfile(formData.name, formData.photoURL);
      navigate('/profile');
    } catch {
      setError('Failed to update profile. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="card bg-gray-800 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-white text-2xl mb-6">Update Profile</h2>

              {error && (
                <div className="alert alert-error mb-6">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label">
                    <span className="label-text text-gray-300">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-gray-700 text-white border-gray-600"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-gray-300">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-gray-700 text-white border-gray-600"
                    placeholder="Enter photo URL"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-none"
                >
                  {loading ? <span className="loading loading-spinner"></span> : 'Update Information'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateProfile;