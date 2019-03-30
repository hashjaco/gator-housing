import React, { Component } from 'react';
import './App.css';

// reactstrap imports
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div style={{maxWidth:"50rem", margin:"auto"}}>

        {/* Spacer */}
        <div style={{height:"8rem"}}/>

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
            <Input type="text" id="searchBar" placeholder='e.g. "Studio near Stonestown"' />
          </FormGroup>

          <FormGroup>
            <Label for="roomType">Room Type</Label>
            <Input type="select" id="roomType" >
              <option>Studio</option>
              <option>House</option>
              <option>Individual Room</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="numRooms">Rooms</Label>
            <Input type="select" id="numRooms" >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </Input>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

export default App;
