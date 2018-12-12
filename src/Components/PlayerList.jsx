import React from 'react';
import Player from './Player.jsx';
// import TeamName from './TeamName.jsx'
import './PlayerList.css';

const PlayerList = (props) => {

  if (!props.players)  {
    return null;
  };

  const playerNodes = props.players.map((player, index) =>{
    // console.log("player", player);
    return(
      <div>

      <Player
      key={player.id}
      name={player.name}
      position={player.position}
      shirtNumber={player.shirtNumber}
      role={player.role}
      />
      </div>
    )}
  );

  return (
    <div className="player-list">
    {playerNodes}
    </div>
  );
};


export default PlayerList;
