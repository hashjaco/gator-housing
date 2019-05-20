import React, { Component } from 'react';
import ListingsDisplay from '../../components/ListingsDisplay';
import { Form, FormGroup, Label, Input, Button, } from 'reactstrap';


const mainDivStyle = {
  maxWidth:"50rem", 
  margin:"auto", 
  padding:"0 3rem"
}


class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      propertyType: "Any",
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.renderListings = this.renderListings.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  renderListings() {
    console.log(JSON.stringify(this.props, null, 2));
    // Get params from URL
    var params = this.props.match.params;
    // Default behavior if no searchQuery found
    if (params == null || params.searchQuery == null || params.searchQuery == "") {
      return <ListingsDisplay 
        searchType= {"/searchproperties/default/"+this.state.propertyType} 
        propertyType={this.state.propertyType} />;
    }
    var searchQuery = this.props.match.params.searchQuery;
    return <ListingsDisplay 
      searchType= {"/searchproperties/"+searchQuery+"/"+this.state.propertyType} 
      propertyType={this.state.propertyType} />;
  }

  render() {
    return (
      // Main Div
      <div style={mainDivStyle}>

        {/* Search By Tag */}
        <Label for="roomType">Listing Type</Label>
        <Input type="select" name="propertyType" id="roomType" onChange={this.handleChange}>
          <option>Any</option>
          <option>Room</option>
          <option>Studio</option>
          <option>House</option>
        </Input>

        <div style={{height:"2rem"}}/>

        {this.renderListings()}
        
      </div>
    );
  }
}

export default Home;
