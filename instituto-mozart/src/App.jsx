import React from 'react';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/style/styles.css';
import Home from './componentes/Home';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      ReactDOM.render(
      <MessengerCustomerChat
        pageId="211411636121167"
        appId="880827699137359"
      />
    </>
  );
}

export default App;
