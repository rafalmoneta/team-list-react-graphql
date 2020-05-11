import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Teams from '../pages/Teams'

const App = () => (
  <Fragment>
    <div>
      <Switch>
        <Route exact path="/" component={Teams} />
      </Switch>
    </div>
  </Fragment>
)

export default App