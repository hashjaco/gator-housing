import React, { Component } from 'react';
import { 
  Form, FormGroup, Col, Label, Button, 
  Input, InputGroup, InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvField, AvInput, } from 'availity-reactstrap-validation';

const mainDivStyle = {
  maxWidth:"65rem", 
  margin:"auto", 
  padding:"0 2rem"
}

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {    
      imageURL: 'default.jpeg',
      title: '',
      listingType:'Room',
      address:'',
      zipcode:'',
      noOfRoom:'',
      description:'',
      price: '',
    }
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.uploadInput.files[0].name);
    fetch('/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: this.uploadInput.files[0].name });
        console.log(this.state.imageURL);
      });
    });
  }

  handleValidSubmit(event, values) {
    event.preventDefault();
    this.form && this.form.reset();
    this.uploadInput.value = null;
    fetch('/listings', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        listingType: this.state.listingType,
        price: this.state.price,
        description: this.state.description,
        address: this.state.address,
        zipcode: this.state.zipcode,
        imageURL: this.state.imageURL,
        noOfRoom: this.state.noOfRoom,
      })
    })
    .then( (response) => { 
      alert("Listing Posted for Approval");
      //this.form && this.form.reset();
    });
    /*console.log(this.state.price);
    console.log(this.state.zipcode);
    console.log(this.state.address);
    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.noOfRoom);*/
  }

  render() {
    return (
      <div style={mainDivStyle}>
        <h1>Post a Listing</h1>
        <AvForm onValidSubmit={this.handleValidSubmit} ref={c => (this.form = c)} style={{marginTop:"2rem"}}>
          <FormGroup row>
            <Label md={2}>Title</Label>
            <Col md={10}>
              <AvInput name='title' name='title' 
              onChange={this.handleChange}  required />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label md={2}>Listing Type</Label>
            <Col md={10}>
            <AvInput type="select" name="listingType" id="roomType" onChange={this.handleChange} >
              <option>Room</option>
              <option>Studio</option>
              <option>House</option>
            </AvInput>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2}>Address</Label>
            <Col md={10}>
              <InputGroup>
                <AvInput type='textarea' name='address' placeholder='Property Address' 
                onChange={ (e) => this.handleChange(e)} required />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2}>ZipCode</Label>
            <Col md={10}>
              <InputGroup>
                <AvInput inputmode="numeric" type="number" name='zipcode' placeholder='e.g. 94132' 
                onChange={ (e) => this.handleChange(e)} required />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2}>Number of Rooms</Label>
            <Col md={10}>
              <InputGroup>
                <AvInput inputmode="numeric" type="number" name='noOfRoom' placeholder='e.g. 2'
                onChange={ (e) => this.handleChange(e)} required/>
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label md={2}>Description</Label>
            <Col md={10}>
              <InputGroup>
                <AvInput type='textarea' name='description' placeholder='Provide an informative description'
                onChange={ (e) => this.handleChange(e)} required/>
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label md={2}>Rent per Month</Label>
            <Col md={10}>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
                <AvInput type='number' step='0.01' name='price' min='0' required placeholder="(e.g. 1000.00)" 
                onChange={ (e) => this.handleChange(e)} required/>
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>  
            <Label md={2}>Image</Label>
            <Col md={10}>
              <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            
              <button onClick={this.handleUploadImage}>Upload</button>
              </Col>
          </FormGroup>

          <FormGroup>
            <Button color="primary" style={{width:"100%", height:"3rem"}}>Post</Button>
          </FormGroup>

        </AvForm>
        {this.state.values && <div>
          <h5>Submission values</h5>
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
      </div>
    )
  }
}

export default Post;