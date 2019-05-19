import React, { Component } from 'react';

import hashimpic from '../img/hashpic.jpg'



class HashimPage extends Component {
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
    <h1 className="text-center">Hashim Jacobs</h1>
    {/* Link your picture */}
    <img src= {hashimpic} alt="Hashim" className="rounded mx-auto d-block" style={{width: '15rem', margin: '1rem'}} />
    {/* Briefly describe yourself */}
    <div style={{margin: 'auto', maxWidth: '25rem'}}>
      <p className="text-center">Hi, I'm Hashim and I'm the lead backend engineer of team 14! I enjoy watching movies,
        riding bikes, and of course, writing code.</p>
    </div>
  </div>
</div>

</div>
      )
}
}

export default HashimPage;
