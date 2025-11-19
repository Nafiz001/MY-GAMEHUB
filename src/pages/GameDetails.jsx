
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GameDetails = () => {
  const game = useLoaderData();

  useEffect(() => {
    if (game) {
      document.title = `${game.title} - GameHub`;
    } else {
      document.title = 'Game Details - GameHub';
    }
  }, [game]);

  if (!game) {
    return (
      <div className="min-h-screen bg-base-200">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Game not found!</span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-12 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="card lg:card-side bg-black/40 backdrop-blur-lg shadow-2xl border border-purple-500/20 overflow-hidden">
            <figure className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img
                src={game.coverPhoto || game.image}
                alt={game.title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4 z-20">
                <div className="badge badge-primary bg-purple-600 border-purple-400 text-white font-semibold px-3 py-1">
                  {game.category}
                </div>
              </div>
            </figure>
            <div className="card-body lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4">
                    {game.title}
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="badge badge-secondary bg-blue-600/80 border-blue-400 text-white font-medium px-3 py-1">
                      {game.developer}
                    </div>
                    <div className="badge badge-accent bg-green-600/80 border-green-400 text-white font-medium px-3 py-1">
                      Available Now
                    </div>
                  </div>
                </div>

                <div className="divider divider-primary"></div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">About This Game</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {game.description}
                  </p>
                </div>

                <div className="divider divider-primary"></div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">High-quality graphics and gameplay</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Regular updates and support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Cross-platform compatibility</span>
                  </div>
                </div>

                <div className="card-actions justify-end mt-8">
                  <button className="btn btn-primary bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Install Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GameDetails;