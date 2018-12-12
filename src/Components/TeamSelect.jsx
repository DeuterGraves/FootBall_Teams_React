import React from 'react';

const TeamSelect = (props) =>{
  // if(!props.teams) return null;
  const options = props.teams.map((team, index) => {
    return <option value={team.id} key={index}>{team.name}</option>
  })

  function handleSelectChange(event){
    // console.log("what's in event", event.target.value);
    props.onTeamSelected(event.target.value);
    // props.onNameSelected(event.target.value);
  }

  return(
    <select id="team-selector" defaultValue="default" onChange={handleSelectChange}>
    <option disabled value = "default"> Choose a team...</option>
    {options}
    </select>
  )
}

export default TeamSelect;
