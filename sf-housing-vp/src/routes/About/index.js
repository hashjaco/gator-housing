import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import AboutHome from './AboutHome'
import DavisPage from './individual-pages/DavisPage'
import JonPage from './individual-pages/JonPage'
import EricPage from './individual-pages/EricPage'
import KevinPage from './individual-pages/KevinPage'
import HashimPage from './individual-pages/HashimPage'
import JarrettPage from './individual-pages/JarrettPage'
import ShalakaPage from './individual-pages/ShalakaPage'

const mainDivStyle = {
  maxWidth:"50rem", 
  margin:"auto", 
  padding:"0 3rem"
}

class About extends Component {
  render() {
    return (
      <div style={mainDivStyle}>

        <HashRouter>
          <Route exact path='/about/' component={AboutHome} />
          <Route exact path='/about/davis-page' component={DavisPage} />
          <Route exact path='/about/jon-page' component={JonPage} />
          <Route exact path='/about/eric-page' component={EricPage} />
          <Route exact path ='/about/kevin-page' component={KevinPage}/>
          <Route exact path ='/about/hashim-page' component={HashimPage}/>
          <Route exact path ='/about/jarrett-page' component={JarrettPage}/>
          <Route exact path ='/about/shalaka-page' component={ShalakaPage}/>
        </HashRouter>

      </div>
    )
  }
}

export default About;