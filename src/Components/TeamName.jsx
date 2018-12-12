import React from 'react';
import './TeamName.css';

const TeamName = (props)=>{
  console.log(props);
  if (props.name.crestUrl === null){
  return(
    <>
    <p ><section className="team-name"> {props.name.name} </section><br/>
    </p>
    </>
  )}else{
  return(
    <>
    <p ><section className="team-name"> {props.name.name} </section><br/>
    <img src={props.name.crestUrl} alt={props.name.name} height="100"/></p>
    </>
  )
}
}

export default TeamName;
