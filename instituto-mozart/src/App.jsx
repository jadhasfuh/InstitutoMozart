import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './componentes/Home';
import './assets/style/styles.css';
import NavBar from './componentes/NavBar';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
