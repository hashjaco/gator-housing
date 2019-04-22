import React, { Component } from "react";
import ListingCard from "./ListingCard";




class ListingsDisplay extends Component {

  render() {
    if (!this.props.data) {
      return
    }

    return (
      <div class="d-flex flex-column">
        {this.props.data.map(member =>
 
                   
        <ListingCard title="A House" type={member.property_type} src="https://media.gettyimages.com/photos/traditional-suburban-house-picture-id103761767?s=612x612"
          description={member.address}
          price={member.price} />
		   )}
      </div>
    )
  }

}

export default ListingsDisplay;