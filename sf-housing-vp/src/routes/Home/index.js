import React, { Component } from 'react';
import ListingsDisplay from '../../components/ListingsDisplay';
import { Form, FormGroup, Label, Input, Button, } from 'reactstrap';


class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      searchClicked: false,
      topicBox: null,
      searchWord: "",
    };

    // This binding is necessary to make `this` work in the callback
    this.clickSearch = this.clickSearch.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

   clickSearch() {
    console.log( this.state.topicBox); 
    this.setState({searchClicked: true });
  }

  renderListings(){
    var listingToDisplay;
    if (this.state.searchClicked) {
      listingToDisplay = <ListingsDisplay searchType= {"/searchproperties/"+this.state.topicBox}  />;
    } else {
      listingToDisplay = <ListingsDisplay searchType= '/properties' />;
    }

    return(
          <div>
            {listingToDisplay}
          </div>
      );
  }

  render() {
    return (
      // Main Div
      <div style={{maxWidth:"60rem", margin:"auto"}}>

        {/* Spacer */}
        <div style={{height:"3rem"}}/>

        {/* Title */}
        <div style={{textAlign:"center"}}>
          <h1>SFSU Housing (Vertical Prototype)</h1>
          <h2>CSC 648 Team 14</h2>
        </div>

        {/* Spacer */}
        <div style={{height:"2rem"}}/>

        {/* Search Form */}
        <Form>
          <FormGroup>
            <Label for="searchText">Search</Label>
            <Input type="text" name="topicBox"  id="searchBar" placeholder='e.g. "Studio near Stonestown"' value={this.state.topicBox }
              onChange={ this.handleChange } />
          </FormGroup>

          <FormGroup>
            <Label for="roomType">Listing Type</Label>
            <Input type="select" id="roomType" >
              <option>Any</option>
              <option>Room</option>
              <option>Studio</option>
              <option>House</option>
            </Input>
          </FormGroup>

          {/* Spacer */}
          <div style={{height:"1rem"}}/>

          <Button color="primary" style={{width:"100%", height:"3rem"}} onClick={this.clickSearch}>Search</Button>
        </Form>

        {/* Spacer */}
        <div style={{height:"1rem"}}/>

        {/* The listings are here */}
        <div>
        {this.renderListings()}
        </div>
        
      </div>
    );
  }
}

export default App;
