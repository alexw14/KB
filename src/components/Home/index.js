import React, { Component } from 'react';
import games from '../../games';
import Teams from '../Teams';

class Home extends Component {

  state = {
    games: {}
  }

  componentDidMount(){
    this.setState({games: games});
  }


  render() {
    return (
      <div>
        <Teams games={this.state.games}/>
      </div>
    );
  }
}

export default Home;