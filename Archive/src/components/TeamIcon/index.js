import React from 'react';
import { Link } from 'react-router-dom';

const TeamIcon = (props) => {

  const { team } = props;
  const bgImg = require(`../../assets/images/team_icons/${team}.png`);

  return (
    <Link to={`/team/${team}`}>
      <div className="team-icon" style={{backgroundImage: `url(${bgImg})`}}></div>
    </Link>
  );
};

export default TeamIcon;
