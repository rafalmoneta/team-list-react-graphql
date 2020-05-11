import React from 'react'

const TeamBox = ({team}) => (
  <div className="team">
    <figure>
      <img src={team.img + `?team=${team.id}`} alt=""/>
    </figure>
    <div className="team-name">{team.name}</div>
    <div className="team-type">{team.sport}</div>
  </div>
)

export default TeamBox
