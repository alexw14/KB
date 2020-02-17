import React, { Component } from 'react';

import GameStatDisplay from '../GameStatDisplay';
import gamesData from '../../games.json';

class TeamPage extends Component {

  state = {
    game: []
  }

  componentDidMount() {
    const team = this.props.match.params.team;
    this.setState({ game: gamesData[team] });
  }

  renderGameData = () => {
    const gameData = this.state.game;
    return gameData ? <GameStatDisplay gameData={gameData[0]} /> : <div>Loading...</div>;
  }

  render() {
    return (
      <div className="teampage-container">
        {this.renderGameData()}
      </div>
    );
  }
}

export default TeamPage;