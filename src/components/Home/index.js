import React, { Component } from 'react';
import games from '../../games';

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
        Games
      </div>
    );
  }
}

export default Home;