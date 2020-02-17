import React from 'react';
import { Link } from 'react-router-dom';

const TeamIcon = (props) => {

  const { team } = props;

  const style = {
    backgroundImage: `url(/images/team_icons/${team}.png)`
  }

  return (
    <Link to={`/${team}`}>
      <div className="team-icon" style={style}></div>
    </Link>
  );
};

export default TeamIcon;