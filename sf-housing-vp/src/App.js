import React, { Component } from 'react';
import './App.css';
import Home from './routes/Home'

class App extends Component {

  render() {
    return (
      <div style={{maxWidth:'800px', padding:'1rem', margin:'auto'}}>
        <Home/>
      </div>
    );
  }
}

export default App;
