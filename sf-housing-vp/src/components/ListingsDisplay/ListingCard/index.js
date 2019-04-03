import React, { Component, } from 'react';
import { Button, } from "reactstrap";

class ListingCard extends Component {

  render() {
    return (
      <div class="d-flex flex-row" style={{margin:"1rem 0", height:"12rem",}}>

        <img src={this.props.src} alt={this.props.title}
          style={{objectFit:"cover", width:"20rem", height:"100%", borderRadius:"4px"}}/>
        <div style={{width:"1rem"}} />

        <div class="d-flex flex-column">
          <div class="p-2 flex-grow-1">
            <div style={{height:"0.5rem"}} />
            <p class="text-secondary" style={{lineHeight:"0.8rem", textTransform:"uppercase"}}>{this.props.type}</p>
            <p style={{lineHeight:"0.8rem", fontWeight:"bold", fontSize:"1.3rem"}}>{this.props.title}</p>
            <p >{this.props.description}</p>
          </div>
        </div>

      </div>
    )
  }

}

export default ListingCard;