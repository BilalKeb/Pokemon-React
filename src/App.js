import React, { Component, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Errore404 from './pages/Errore404'
import Nav from './component/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  

  return (
    <div>
      <BrowserRouter>
      <Nav />
      <switch>
            <Route exact path="/" component={Home} />
            <Route  path="/Login" component={Login} />
            <Route path="/Errore404" component={Errore404} />

      </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;