import React, { Component, } from 'react';

class ListingCard extends Component {

  render() {
    return (
      <div class="d-flex flex-row bg-light" style={{margin:"1rem 0", height:"12rem", 
        border:"1px solid var(--muted)", borderRadius:"4px"}}>

        {/* Image */}
        <img src={this.props.src} alt={this.props.title}
          style={{objectFit:"cover", width:"20rem", height:"100%", borderRadius:"4px"}}/>

        {/* Spacer */}
        <div style={{width:"1rem"}} />

        {/* Info */}
        <div class="d-flex flex-column" style={{height:"100%"}}>
          <div class="p-2 flex-grow-2">
            <div style={{height:"0.5rem"}} />
            <p class="text-secondary" style={{lineHeight:"0.8rem", textTransform:"uppercase"}}>{this.props.type}</p>
            <p style={{lineHeight:"0.8rem", fontWeight:"bold", fontSize:"1.3rem"}}>{this.props.title}</p>
            <p>{this.props.description}</p>
          </div>
          <div class="p-2">
            <p style={{fontSize:"1.3rem"}}>${this.props.price.toFixed(2)}</p>
          </div>
        </div>

      </div>
    )
  }

}

export default ListingCard;