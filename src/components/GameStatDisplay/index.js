import React from 'react';

const GameStatDisplay = (props) => {

  const { gameData } = props;

  const renderStat = () => {
    return gameData ?
      <div className="gameStatDisplay-container">
        <div>{gameData.Date}</div>
        <div className="main-container">
          <div>{gameData.PTS}</div>
          <div>{gameData.REB}</div>
          <div>{gameData.AST}</div>
        </div>
      </div>
      : null
  }


  return (
    <div>
      {renderStat()}
    </div>
  );
};

export default GameStatDisplay;