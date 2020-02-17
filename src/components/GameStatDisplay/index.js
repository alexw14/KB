import React from 'react';

const GameStatDisplay = (props) => {

  const { gameData } = props;

  const renderStat = () => {
    return gameData ?
      <div className="gameStatDisplay-container">
        <div className="team-name">{gameData.TeamName}</div>
        <div className="game-date">{gameData.Date}</div>
        <div className="main-container">
          <div className="section">
            <div>{gameData.PTS}</div>
            <div>PTS</div>
          </div>
          <div className="section">
            <div>{gameData.REB}</div>
            <div>REB</div>
          </div>
          <div className="section">
            <div>{gameData.AST}</div>
            <div>AST</div>
          </div>
        </div>
        <div className="sub-container">
          <div className="section">
            <div>{gameData.STL}</div>
            <div>STL</div>
          </div>
          <div className="section">
            <div>{gameData.BLK}</div>
            <div>BLK</div>
          </div>
          <div className="section">
            <div>{gameData.FG} / {gameData.FGA}</div>
            <div>FG</div>
          </div>
          <div className="section">
            <div>{gameData.FT} / {gameData.FTA}</div>
            <div>FT</div>
          </div>
          <div className="section">
            <div>{gameData['3P']} / {gameData['3PA']}</div>
            <div>3P</div>
          </div>
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
