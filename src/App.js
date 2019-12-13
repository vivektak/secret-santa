import React, { useEffect } from 'react';

import './App.css';
import SecretSanta from './secret-santa';
import { Route, Redirect } from 'react-router';


const App = props => {

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>

      <Route path='/secret-santa' component={SecretSanta} />
      <Redirect from="/" exact to="/secret-santa" />
    </React.Fragment>

  );
}

export default App;
