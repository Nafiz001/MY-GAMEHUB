
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameList from '../components/GameList';


const Browse = () => {
  const games = useLoaderData();
  useEffect(() => {
    document.title = 'Browse Games - GameHub';
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl text-purple-500 font-bold mb-6">Browse Games</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search games..."
            className="p-3 border flex-1 placeholder-gray-500 text-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedGenre}
            className="bg-white text-gray-900 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="" className="text-gray-500">All Genres</option>
            <option value="battle royale" className="text-gray-900 bg-white">Battle Royale</option>
            <option value="sports" className="text-gray-900 bg-white">Sports</option>
            <option value="rpg" className="text-gray-900 bg-white">RPG</option>
            <option value="moba" className="text-gray-900 bg-white">MOBA</option>
            <option value="fps" className="text-gray-900 bg-white">FPS</option>
            <option value="social deduction" className="text-gray-900 bg-white">Social Deduction</option>
            <option value="sandbox" className="text-gray-900 bg-white">Sandbox</option>
          </select>
        </div>

        <GameList games={games} searchTerm={searchTerm} genre={selectedGenre} />
      </main>
      <Footer />
    </div>
  );
};

export default Browse;