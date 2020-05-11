import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import TeamsList from '../components/TeamsList'
import NewTeamModal from '../components/NewTeamModal'
import Loader from '../components/Loader'

const ALL_TEAMS = gql`
  query AllTeams {
    teams {
      id
      name
      sport
      img
    }
  }
`

const NEW_TEAM = gql`
  mutation CreateAPet($newTeam: NewTeamInput!) {
    addTeam(input: $newTeam) {
      id
      name
      sport
      img
    }
  }
`

export default function Pets () {
  const [modal, setModal] = useState(false)
  const {data, loading, error} = useQuery(ALL_TEAMS)
  const [createTeam, newTeam] = useMutation(NEW_TEAM,{
    update(cache, {data: {addTeam}}) {
      const {teams} = cache.readQuery({query: ALL_TEAMS})
      cache.writeQuery({
        query: ALL_TEAMS,
        data: {teams: [addTeam, ...teams]}
      })
    }
  })

  const onSubmit = input => {
    setModal(false)
    createTeam({
      variables: {newTeam: input}
    })
  }
  
  if(loading) {
    return <Loader />
  }

  if(error) {
    return <p>Error</p>
  }

  if (modal) {
    return <NewTeamModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  return (
    <div className="page team-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Your favorite teams</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>New Team</button>
          </div>
        </div>
      </section>
      <section>
        <TeamsList teams={data.teams}/>
      </section>
    </div>
  )
}