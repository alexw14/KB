import React from 'react';
import Team from '../Team';

const Teams = (props) => {

  const { games } = props;

  const teamNames = Object.keys(games);

  const renderTeamList = (teams) => {
    return teams.map((team, i) => {
      return <Team key={i} team={team} game={games[`${team}`]} />
    });
  }

  return (
    <div>
      {renderTeamList(teamNames)}
    </div>
  );
};

export default Teams;