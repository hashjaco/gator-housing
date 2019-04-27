import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';
import Home from './routes/Home';
import Post from './routes/Post';
import About from './routes/About';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import Signup from './routes/Signup';


class App extends Component {

  render() {
    return (
      // Main Div
      <div style={{maxWidth:"50rem", margin:"auto", padding:"3rem"}}>

        {/* The BrowserRouter displays a different container based on the current url. */}
        {/* These containers are imported from the routes directory. */}
        <BrowserRouter>
          <HeaderBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/post' component={Post} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/signup' component={Signup} />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;