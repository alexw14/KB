import React from 'react';

const TeamIcon = (props) => {

  const { team } = props;

  return (
    <div>
      <div className="team-icon" style={{ backgroundImage: `url(/images/team_icons/${team}.png)` }}></div>
    </div>
  );
};

export default TeamIcon;