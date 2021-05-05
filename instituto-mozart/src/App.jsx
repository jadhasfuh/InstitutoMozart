import React from 'react';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/style/styles.css';
import Home from './componentes/Home';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
