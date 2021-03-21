import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Menu from './Menu/Menu';
import Home from './Home/Home';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';
import Error from './Error/Error';

function App() {
  return <Router>
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cars/:name" component={CarDetail} />
        <Route path="/cars" component={Cars} />
        <Route path="/404" component={Error} />
        <Redirect to={'/404'} />
      </Switch>
    </div>
  </Router>
};

export default App;