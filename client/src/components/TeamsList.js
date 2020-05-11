import React from 'react'
import TeamBox from './TeamBox'

export default function TeamsList({teams}) {
  return (
    <div className="row">
      {teams.map(team => (
        <div className="col-xs-12 col-md-4 col" key={team.id}>
          <div className="box">
            <TeamBox team={team} />
          </div>
        </div>
      ))}
    </div>
  )
}

TeamsList.defaultProps = {
  teams: []
}