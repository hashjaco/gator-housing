import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, withRouter} from 'react-router-dom';

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
        {/* The BrowserRouter displays a different container based on the current url.
        These containers are imported from the routes directory. */}
        <HashRouter>
            <HeaderBar 
            />
            <div style={{height:"3.5rem"}} />
            <Disclaimer />
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Home} />
            <Route exact path='/search/:searchQuery' component={Home} />
            <Route path='/post' component={Post} />
            <Route path='/login' component={Login} />           
            <Route path='/signup' component={Signup} />
            <Route path='/about' component={About} />
            <Route path='/dashboard' component={Dashboard} /> 
        </HashRouter>
      </div>
    );
  }
}

export default App;