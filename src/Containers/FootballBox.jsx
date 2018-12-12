import React from 'react';
import TeamSelect from '../Components/TeamSelect.jsx';
import PlayerList from '../Components/PlayerList.jsx'
import TeamName from '../Components/TeamName.jsx'

class FootballBox extends React.Component {
  constructor(props){
    // to ask: confirm this is just like super() inheriting in java?
    super(props);
    this.state = {
      players:[],
      teams:[]
    }
    this.handleTeamSelected = this.handleTeamSelected.bind(this);
  }

  componentDidMount(){
    // this.loadStuff(teamlistURL)
    this.loadTeamsOrPlayers("http://api.football-data.org/v2/teams", "teams");
    // calls to populate the dropdown list of teams
    // console.log("what are we getting", result);
  }

  loadTeamsOrPlayers(url, target){
    // this.loadPlayers(this.props.teams[0].url)
    // const url = "http://api.football-data.org/v2/teams"
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("X-Auth-Token", "f533c120b21b4135ae2acfbd31c5ae13")
    request.addEventListener("load", ()=>{
      if (request.status === 200){
        console.log("we got a 200!");
        const jsonString = request.responseText;
        const teamsOrPlayers = JSON.parse(jsonString);
        // return teamsOrPlayers;
        if (target === "teams"){
        this.setState({teams: teamsOrPlayers.teams});
      } else {
        this.setState({players: teamsOrPlayers});
      }
      }
    });
    request.send();
  }

  handleTeamSelected(id){
    // we're getting a team id
    // we trigger an api call to /teams/{id}
    // console.log("what is id", id);
    let url = "http://api.football-data.org/v2/teams/"+id;
    // console.log("request url",url);
    this.loadTeamsOrPlayers(url, "players");
    // sets state to the data returned from the selected team

  }

  render(){
    return(
      <div>
      <TeamSelect teams = {this.state.teams}
      onTeamSelected={this.handleTeamSelected}/>
      <TeamName data={this.state.players} />
      <PlayerList
      players={this.state.players.squad}/>
      </div>
      // if response = list of teams render details for team drop down lost
      // if response = a specific team send data for team player render
    )
  }

}




export default FootballBox;
