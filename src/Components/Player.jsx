import React from "react";
import './Player.css';

const Player = ({key, name, position, shirtNumber, role}) =>{

  return(
    <section className="one-player">
    <p className="player-name">Name: {name}</p>
    <p>Position: {position}</p>
    <p>Shirt Number: {shirtNumber}</p>
    <p>Role: {role}</p>
    </section>
  )


}



export default Player;
