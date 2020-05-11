import React, {useState} from 'react'
import Select from 'react-select'

const options = [
  { value: 'FOOTBALL', label: 'Football' },
  { value: 'BASKETBALL', label: 'Basketball' },
  { value: 'ESPORT', label: 'E-sport' }
]

export default function NewPet({onSubmit, onCancel}) {
  const [sport, setSport] = useState('FOOTBALL')
  const [name, setName] = useState('')
  const [img, setImage] = useState('')

  const activeOption = options.find(o => o.value === sport)

  const submit = e => {
    e.preventDefault()
    onSubmit({name, sport, img})
  }

  const cancel = e => {
    e.preventDefault()
    onCancel()
  }

  return (
    <div className="new-team page">
      <h1>New Team</h1>
      <div className="box">
        <form onSubmit={submit}>
          <Select
            value={activeOption}
            defaultValue={options[0]}
            onChange={e => setSport(e.value)}
            options={options}
          />

          <input
            className="input"
            type="text"
            placeholder="team name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input 
            className="input"
            type="url"
            placeholder="image url"
            value={img}
            onChange={e => setImage(e.target.value)}
          />
          <a className="error button" onClick={cancel}>cancel</a>          
          <button type="submit" name="submit">add team</button>
        </form>
      </div>
    </div>
  )
}