import React from 'react';
import { Link } from 'react-router-dom';

const TeamIcon = (props) => {

  const { team } = props;

  return (
    <Link to={`/${team}`}>
      <div className="team-icon" style={{ backgroundImage: `url(/images/team_icons/${team}.png)` }}></div>
    </Link>
  );
};

export default TeamIcon;