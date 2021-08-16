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
        <Route path="/work" exact component={Work} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
