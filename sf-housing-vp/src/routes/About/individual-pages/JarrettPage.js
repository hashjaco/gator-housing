import React, { Component } from 'react';

import jarrettpic from '../img/jarrett.jpg'



class JarrettPage extends Component {
    render() {
      return (
        <div style={{marginTop:"2rem"}}>
  

  <div>
  {/* This imports Bootstrap stuff */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
  <div className="container-fluid" style={{margin: '2rem 0'}}>
    {/* Replace with your name */}
    <h1 className="text-center">Jarrett Lee</h1>
    {/* Link your picture */}
    <img src= {jarrettpic} alt="Jarrett" className="rounded mx-auto d-block" style={{width: '15rem', margin: '1rem'}} />
    {/* Briefly describe yourself */}
    <div style={{margin: 'auto', maxWidth: '25rem'}}>
      <p className="text-center">A super senior here at SFSU, I love video games and sneakers! </p>
    </div>
  </div>
</div>

</div>
      )
}
}

export default JarrettPage;
