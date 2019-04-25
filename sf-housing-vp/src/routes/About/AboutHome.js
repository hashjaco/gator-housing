import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import davispic from './img/davish.jpg'
import jonpic from './img/jon-pic.jpg'
import ericpic from './img/eric-pic.jpg'
import kevinpic from './img/kevin-pic.PNG'
import hashimpic from './img/hashpic.jpg'
import jarretpic from './img/jarrett.jpg'
import shalakapic from './img/shalaka.png'


class AboutHome extends Component {

  render() {
    return (
      <div>
        {/* This imports Bootstrap stuff */}
        <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n\t\t.card {\n\t\t\twidth: 15rem;\n\t\t\tmargin: 1rem;\n\t\t}\n\t\t@media only screen and (max-width: 600px) {\n\t\t  .card {\n\t\t\t\twidth: 12rem;\n\t\t\t\tmargin: 1rem;\n\t\t\t}\n\t\t}\n\t\t#profile {\n\t\t\theight: 198px;\n\t\t\twidth: 198px;\n\t\t}\n\t" }} />
          <div className="container-fluid" style={{margin: '2rem 0'}}>
            <h1 className="text-center">Software Engineering class SFSU</h1>
            <h2 className="text-center">Spring 2019</h2>
            <h2 className="text-center">Section 2</h2>
            <h2 className="text-center">Team 14</h2>
            
            {/* Individual Cards */}
            
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="card">
                <div className="card-body">
                  <img src={davispic} className="card-img-top" id="profile" alt="Davis" />
                  <h5 className="card-title">Davis</h5>
                  <p className="card-text">Team Lead / Github Master</p>
                  <Link to="/about/davis-page">Go To Page</Link>
                  {/* <a href="views/davis-page" className="btn btn-primary">Go to page</a> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src= {jonpic} className="card-img-top" id="profile" alt="Jonathan" />
                  <h5 className="card-title">Jonathan</h5>
                  <p className="card-text">Frontend Lead</p>
                  <Link to="/about/jon-page"> Go To Page </Link>
                  {/* <a href="views/jon-page" className="btn btn-primary">Go to page</a> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src= {kevinpic} className="card-img-top" id="profile" alt="Kevin" />
                  <h5 className="card-title">Kevin</h5>
                  <p className="card-text">Frontend</p>
                 < Link to="/about/kevin-page"> Go To Page </Link>
                  {/* <a href="/views/kevin-page" className="btn btn-primary">Go to page</a> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src= {jarretpic} className="card-img-top" id="profile" alt="Jarrett" />
                  <h5 className="card-title">Jarrett</h5>
                  <p className="card-text">Frontend</p>
                  < Link to="/about/jarrett-page"> Go To Page </Link>
                  {/* <a href="/views/jarrett-page" className="btn btn-primary">Go to page</a> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src= {hashimpic} className="card-img-top" id="profile" alt="Hashim" />
                  <h5 className="card-title">Hashim</h5>
                  <p className="card-text">Backend Lead</p>
                  <Link to="/about/hashim-page"> Go To Page </Link>
                
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src= {ericpic} className="card-img-top" id="profile" alt="Eric" />
                  <h5 className="card-title">Eric</h5>
                  <p className="card-text">Backend</p>
                  <Link to="/about/eric-page"> Go To Page </Link>
                  {/* <a href="/views/eric-page" className="btn btn-primary">Go to page</a> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src ={shalakapic} className="card-img-top" id="profile" alt="Shalaka" />
                  <h5 className="card-title">Shalaka</h5>
                  <p className="card-text">Backend</p>
                  <Link to="/about/shalaka-page"> Go To Page </Link>
                  {/* <a href="/views/shalaka-page" className="btn btn-primary">Go to page</a> */}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default AboutHome;
