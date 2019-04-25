import React, { Component } from 'react';

import shalakapic from '../img/shalaka.png'



class ShalakaPage extends Component {
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
    <h1 className="text-center">Shalaka Aigal</h1>
    {/* Link your picture */}
    <img src= {shalakapic} alt="A lovely image of Shalaka" className="rounded mx-auto d-block" style={{width: '15rem', margin: '1rem'}} />
    {/* Briefly describe yourself */}
    <div style={{margin: 'auto', maxWidth: '25rem'}}>
      <p className="text-center">Hi my name is Shalaka. I am a Computer Science graduate student at SFSU.</p>
    </div>
  </div>
</div>
</div>
      )
}
}

export default ShalakaPage;
