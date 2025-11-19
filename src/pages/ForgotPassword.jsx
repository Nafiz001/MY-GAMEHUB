import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  // Pre-fill email if coming from login
  React.useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
    document.title = 'Forgot Password - GameHub';
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // console.log('Sending password reset email to:', email);
      // console.log('Current domain:', window.location.origin);
      await resetPassword(email);
      // console.log('Password reset email sent successfully');
      
      // Redirect to Gmail
      window.location.href = 'https://mail.google.com';
    } catch (error) {
      console.error('Password reset error:', error);
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many reset attempts. Please try again later.');
      } else {
        setError('Failed to send reset email. Please check your email address and try again.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <main className="flex items-center justify-center px-4 pt-24 pb-8 min-h-[calc(100vh-64px)]">
        <div
          className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
        >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
          <p className="text-gray-300">Enter your email to receive reset instructions</p>
        </div>

        {error && (
          <div className="alert alert-error mb-6">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-white/20 text-white placeholder-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-none"
          >
            {loading ? <span className="loading loading-spinner"></span> : 'Send Reset Email'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-300">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-300 hover:text-blue-200 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default ForgotPassword;