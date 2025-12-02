
import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games = [], searchTerm = '', genre = '', sortBy = 'rating-desc' }) => {
  const filteredGames = games
    .filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.developer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !genre || game.category.toLowerCase().includes(genre.toLowerCase());
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'rating-desc':
          return parseFloat(b.ratings) - parseFloat(a.ratings);
        case 'rating-asc':
          return parseFloat(a.ratings) - parseFloat(b.ratings);
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;