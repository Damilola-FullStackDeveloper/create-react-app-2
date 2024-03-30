/* eslint-disable no-unused-vars */
import React from 'react';
import Player from './Player'; // Assuming Player.js is in the same directory
import playersData from './players'; // Assuming players.js is in the same directory

const PlayerList = () => {
  return (
    <div>
      <h1>Player List</h1>
      <div className="player-list">
        {playersData.map((player, index) => (
          <Player
            key={index}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageUrl={player.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
