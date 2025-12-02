import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  const shortDescription = game.description?.length > 100 
    ? game.description.substring(0, 100) + '...' 
    : game.description;

  return (
    <Link to={`/game/${game.id}`}>
      <div className="card bg-gray-800 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
        <figure className="relative h-48 overflow-hidden">
          <img 
            src={game.coverPhoto || '/placeholder-game.jpg'} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <div className="badge badge-primary bg-purple-600 border-none text-white">
              ⭐ {game.ratings || 'N/A'}
            </div>
          </div>
        </figure>
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title text-white text-lg line-clamp-1">{game.title}</h2>
          <p className="text-sm text-gray-400 mb-2">
            <span className="font-semibold">By:</span> {game.developer}
          </p>
          <p className="text-sm text-gray-300 flex-grow line-clamp-2">{shortDescription}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="badge badge-secondary badge-sm bg-blue-600/80 border-none text-white">
              {game.category}
            </div>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary btn-sm bg-purple-600 hover:bg-purple-700 border-none w-full">
              See More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;