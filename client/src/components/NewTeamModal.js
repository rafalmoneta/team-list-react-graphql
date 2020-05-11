import React from 'react'

import NewTeam from './NewTeam'

export default function NewTeamModal({onSubmit, onCancel}) {
  return (
    <div className="row center-xs">
      <div className="col-xs-8">
        <NewTeam onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  )
}