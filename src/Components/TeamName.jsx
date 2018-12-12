import React from 'react';
import './TeamName.css';

const TeamName = (props)=>{
  console.log(props);
  if (props.data.crestUrl === null){
  return(
    <>
    <p ><section className="team-name"> {props.data.name} </section><br/>
    </p>
    </>
  )}else{
  return(
    <>
    <p ><section className="team-name"> {props.data.name} </section><br/>
    <img src={props.data.crestUrl} alt={props.data.name} height="100"/></p>
    </>
  )
}
}

export default TeamName;
