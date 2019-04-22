import React, { Component } from 'react';

import { Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap'
import ListingsDisplay from '../../components/ListingsDisplay';
import { AvForm, AvInput, } from 'availity-reactstrap-validation';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {
      data: []
    }
  }

  // Reads values from form and puts them in state.
  // Called when the Search button is pressed.
  handleValidSubmit(event, values) {
    this.setState({values});

    // >> (Do something with the submission values here) <<

    // This will put the data in this.state.data
    // which will be rendered by ListingsDisplay
    let self = this;
    fetch('/properties', {
      method: 'GET'
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function(data) {
      self.setState({
        data: data
      });
    }).catch(err => {
    console.log('caught it!',err);
    })
  }

  render() {
    return (
      <div style={{marginTop:"2rem"}}>
        {/* Title */}
        <div style={{textAlign:"center"}}>
          <h1>SFSU Housing (Vertical Prototype)</h1>
          <h2>CSC 648 Team 14</h2>
        </div>

        {/* Spacer */}
        <div style={{height:"2rem"}}/>

        {/* Search Form */}
        <AvForm onValidSubmit={this.handleValidSubmit} style={{marginTop:"2rem"}}>
          <FormGroup row>
            <Label sm={2}>Search</Label>
            <Col sm={10}>
              <AvInput name='searchText' placeholder='(e.g. "Studio near Stonestown")' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Listing Type</Label>
            <Col sm={10}>
              <AvInput type="select" name='type' >
                <option>Any</option>
                <option>Room</option>
                <option>Studio</option>
                <option>House</option>
              </AvInput>
            </Col>
          </FormGroup>

          {/* Spacer */}
          <div style={{height:"1rem"}}/>

          <Button color="primary" style={{width:"100%", height:"3rem"}}>Search</Button>
        </AvForm>
        {this.state.values && <div>
          <h5>Search values</h5>
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}

        {/* Spacer */}
        <div style={{height:"1rem"}}/>

        {/* The listings are here */}
        <ListingsDisplay data={this.state.data}/>
      </div>
      
    )
  }
}

export default Home;