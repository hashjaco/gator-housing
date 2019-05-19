import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Import our Components
import HeaderBar from  './components/HeaderBar';
import Disclaimer from './components/Disclaimer';

// Import our Route Components
import Home from       './routes/Home';
import Post from       './routes/Post';
import About from      './routes/About';
import Dashboard from  './routes/Dashboard';
import Login from      './routes/Login';
import Signup from     './routes/Signup';

/**
 * App is the main Component of our website. All other pages are routed to
 * from this Component.
 */
class App extends Component {

  render() {
    return (

      <div>
        {/* The BrowserRouter displays a different container based on the current url. */}
        {/* These containers are imported from the routes directory. */}
        <BrowserRouter>
          <HeaderBar/>
          <div style={{height:"3.5rem"}}/>
          <Disclaimer />
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