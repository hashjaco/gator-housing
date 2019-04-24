import React, { Component } from "react";
import ListingCard from "./ListingCard";

class ListingsDisplay extends Component {
	constructor(props) {
        super(props)
        this.state = {
            properties: []
        }
        this.updateListing = this.updateListing.bind(this);
    }

    componentDidMount() {
        this.updateListing();
    }

    componentDidUpdate(prevProps){
      if((JSON.stringify(this.props.searchType) !== JSON.stringify(prevProps.searchType)) || (JSON.stringify(this.props.propertyType) !== JSON.stringify(prevProps.propertyType)))
      {
            this.updateListing();
      }
    }

    updateListing(){
      console.log(this.props.propertyType);
      let self = this;
        fetch(this.props.searchType, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({properties: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }



  render() {

    if (this.state.properties) {
      console.log(JSON.stringify(this.state.properties))
    }

    return (
      <div class="d-flex flex-column">
        {this.state.properties.map(member =>
 
                   
        <ListingCard title="A House" type={member.property_type} src="https://media.gettyimages.com/photos/traditional-suburban-house-picture-id103761767?s=612x612"
          description={member.address}
          price={member.price} />
		   )}
      </div>
    )
  }

}

export default ListingsDisplay;