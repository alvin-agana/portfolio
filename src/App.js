import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Home';
import Work from './Work';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/work'} component={Work} />
        <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
