import React, { Component } from 'react';
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
    const gameData = this.state.game[0];
    return gameData ?
      <div>{gameData['TeamName']}</div>
      : null
  }

  render() {
    return (
      <div>
        {this.renderGameData()}
      </div>
    );
  }
}

export default TeamPage;