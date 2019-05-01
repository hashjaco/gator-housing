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
      console.log(this.props.searchType);
      if (!this.props.searchType) return;
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

    if (!this.state.properties) {
      return(
        <div>Properties does not exist!</div>
      )
    }

    if (this.state.properties.length === 0) {
      return(
        <div>No results found.</div>
      )
    }

    return (
      <div class="d-flex flex-column">
        {this.state.properties.map(member =>
          <ListingCard 
            title= {member.title} 
            type={member.property_type} 
            src=  {'./assets/' +member.image_path}
            description={member.address}
            price={member.price} />
        )}
      </div>
    )
  }

}

export default ListingsDisplay;