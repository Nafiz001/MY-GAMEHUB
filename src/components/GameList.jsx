
import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games = [], searchTerm = '', genre = '' }) => {
  const filteredGames = games
    .filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.developer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !genre || game.category.toLowerCase().includes(genre.toLowerCase());
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;