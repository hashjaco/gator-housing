import './index.css'
import React, { Component, } from 'react';
import { Link } from 'react-router-dom';


class ListingCard extends Component {

  toPriceString = (number) => {
    return "$" + number.toLocaleString(undefined, {maximumFractionDigits:2, minimumFractionDigits:2});
  }

  render() {
    return (
      <Link className="listingcard d-flex flex-row" to="/desc">

        {/* Image */}
        <div>
          <img className="listingcard-image" src={this.props.src} alt={this.props.title}/>
          <div className="listingcard-image-text">
            <p>{this.toPriceString(this.props.price)}</p>
          </div>
        </div>

        {/* Spacer */}
        <div style={{width:"1rem"}} />

        {/* Info */}
        <div class="d-flex flex-column">
          <div style={{marginBottom:"auto"}}>
            <div style={{height:"0.5rem"}} />
            <p className="listingcard-type">{this.props.type}</p>
            <p className="listingcard-title">{this.props.title}</p>
            <p>{this.props.description}</p>
          </div>
        </div>

      </Link>
    )
  }

}

export default ListingCard;