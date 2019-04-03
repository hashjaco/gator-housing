import React, { Component } from "react";
import ListingCard from "./ListingCard";




class ListingsDisplay extends Component {

  render() {
    return (
      <div class="d-flex flex-column">
        <ListingCard title="A House" type="House" src="https://media.gettyimages.com/photos/traditional-suburban-house-picture-id103761767?s=612x612"
          description="A house with all the stuff a house has! Floor, walls, a door, to name a few.
          IT CAN BE LIVED INSIDE OF.  Quite the steal!"
          price={10000.00} />
        <ListingCard title="A Studio" type="Studio" src="https://s-ec.bstatic.com/images/hotel/max1024x768/917/91703960.jpg"
          description="Do you enjoy living? Inside of a thing? By yourself? This is for you.
          Everything you need to live inside something without having to deal with human interaction."
          price={1} />
        <ListingCard title="Not a Studio..?" type="Room" src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg"
          description="What's the difference between a Studio and a Room?" 
          price={420.69}/>
      </div>
    )
  }

}

export default ListingsDisplay;