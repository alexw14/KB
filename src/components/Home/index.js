import React, { Component } from 'react';

import Featured from './Featured';
import TeamIcon from '../TeamIcon';
import gamesData from '../../games.json';

class Home extends Component {

  state = {
    teams: []
  }

  componentDidMount() {
    const teamList = Object.keys(gamesData);
    this.setState({ teams: teamList });
  }

  renderTeamLogos = (teams) => {
    return this.state.teams ?
      teams.map((team, i) => {
        return <TeamIcon key={i} team={team} />
      })
      : null
  }

  render() {
    return (
      <div className="homepage-wrapper">
        <Featured />
        <div className="homepage-container">
          {this.renderTeamLogos(this.state.teams)}
        </div>
      </div>
    );
  }
}

export default Home;