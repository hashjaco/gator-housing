import React, { Component, } from 'react';

class ListingCard extends Component {

  toPriceString = (number) => {
    return "$" + number.toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2});
  }

  render() {
    return (
      <div class="d-flex flex-row bg-light" style={{margin:"1rem 0", height:"12rem", 
        borderRadius:"4px"}}>

        {/* Image */}
        <div>
          <img src={this.props.src} alt={this.props.title}
            style={{objectFit:"cover", width:"20rem", height:"100%", borderRadius:"4px"}}/>
        </div>

        {/* Spacer */}
        <div style={{width:"1rem"}} />

        {/* Info */}
        <div class="d-flex flex-column">
          <div style={{marginBottom:"auto"}}>
            <div style={{height:"0.5rem"}} />
            <p class="text-secondary" style={{lineHeight:"0.8rem", textTransform:"uppercase"}}>{this.props.type}</p>
            <p style={{lineHeight:"0.8rem", fontWeight:"bold", fontSize:"1.3rem"}}>{this.props.title}</p>
            <p>{this.props.description}</p>
          </div>
          <div>
            <p style={{fontSize:"1.3rem"}}>{this.toPriceString(this.props.price)}</p>
          </div>
        </div>

      </div>
    )
  }

}

export default ListingCard;