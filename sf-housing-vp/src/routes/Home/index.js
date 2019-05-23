import React, { Component } from 'react';
import ListingsDisplay from '../../components/ListingsDisplay';
import { Row, Col, Label, Input } from 'reactstrap';


const mainDivStyle = {
  maxWidth:"65rem", 
  margin:"auto", 
  padding:"0 2rem"
}

/**
 * Home is the first page shown to the user. It displays the user's 
 * search results in a list. It also has parameters that the user can
 * use to filter search results.
 */
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
    // Get params from URL
    var params = this.props.match.params;
    // If no params or searchQuery found, do default behavior
    if (params == null || params.searchQuery == null || params.searchQuery == "") {
      return <ListingsDisplay 
        searchType= {"/searchproperties/default/"+this.state.propertyType} 
        propertyType={this.state.propertyType} />;
    }
    // Otherwise, use searchQuery to filter results
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
        <Row>
          <Col md='2'>
            <Label for="roomType">Listing Type</Label>
            <Input type="select" name="propertyType" id="roomType" onChange={this.handleChange}>
              <option>Any</option>
              <option>Room</option>
              <option>Studio</option>
              <option>House</option>
            </Input>
          </Col>
        </Row>

        <div style={{height:"2rem"}}/>

        {this.renderListings()}
        
      </div>
    );
  }
}

export default Home;
