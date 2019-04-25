import React, { Component } from 'react';

import jonpic from '../img/jon-pic.jpg'



class JonPage extends Component {
    render() {
      return (
        <div style={{marginTop:"2rem"}}>
  

  <div>
  {/* This imports Bootstrap stuff */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
  <div className="container-fluid" style={{margin: '2rem 0'}}>
    {/* Put Your Name */}
    <h1 className="text-center">Jonathan Fox</h1>
    {/* Link your picture */}
    <img src= {jonpic} alt="A lovely image of Jonathan" className="rounded mx-auto d-block" style={{width: '15rem', margin: '1rem'}} />
    {/* Briefly describe yourself */}
    <div style={{margin: 'auto', maxWidth: '25rem'}}>
      <p className="text-center">Hi, I'm Jonathan! I study Computer Science to build products that can help people. My main areas of interest are web and app development. </p>
    </div>
  </div>
</div>

</div>
      )
}
}

export default JonPage;
