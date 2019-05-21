import React, { Component } from "react";
import ListingCard from "./ListingCard";
import { Alert } from "reactstrap";

class ListingsDisplay extends Component {
	constructor(props) {
        super(props)
        this.state = {
            properties: null,
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
        <h5>Loading...</h5>
      )
    }

    if (this.state.properties.length === 0) {
      return(
        <Alert color="danger">No results found.</Alert>
      )
    }

    return (
      <>
        <h5>Displaying {this.state.properties.length} result(s).</h5>
        <div class="d-flex flex-wrap justify-content-between">
          {this.state.properties.map(member =>
            <ListingCard 
              title= {member.title} 
              type={member.property_type} 
              src=  {'./assets/' +member.image_path}
              description={member.address}
              price={member.price} 
              id={member.id}
              recipientId={member.user_id}/>
          )}
        </div>
      </>
    )
  }

}

export default ListingsDisplay;