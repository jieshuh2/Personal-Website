import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js'
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/home"
import Contacts from './components/contacts'
import Aboutme from './components/aboutme'
import project from './components/project'
import { CssBaseline, makeStyles } from '@material-ui/core';
import Particles from 'react-particles-js';
import particlesConfig from './components/configParticles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './picture/wp2390549.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <CssBaseline />
      <div style={{ position: 'absolute'} }> 
                <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      {/* <Router>
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/contact" component = {contacts}/>
              <Route path = "/aboutme" component = {Aboutme}/>
              <Route path = "/projects" component = {project}/>
            </Switch>
       </Router> */}
       <Home></Home>
       <Aboutme></Aboutme>
       {/* <Contacts></Contacts> */}
    </div>
  );
}

export default App;
