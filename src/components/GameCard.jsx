import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure>
        <img src={game.coverPhoto || '/placeholder-game.jpg'} alt={game.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.title}</h2>
        <p className="text-sm text-gray-600">{game.developer}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          <div className="badge badge-outline badge-sm">{game.category}</div>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/game/${game.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default GameCard;