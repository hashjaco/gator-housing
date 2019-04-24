import React, { Component } from 'react';
import { 
  Form, FormGroup, Col, Label, Button, 
  Input, InputGroup, InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvField, AvInput, } from 'availity-reactstrap-validation';

class Post extends Component {

  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {}
  }

  handleValidSubmit(event, values) {
    this.setState({values});
  }

  render() {
    return (
      <div style={{marginTop:"2rem"}}>
        <h1>Post a Listing</h1>
        <AvForm onValidSubmit={this.handleValidSubmit} style={{marginTop:"2rem"}}>
          <FormGroup row>
            <Label sm={2}>Title</Label>
            <Col sm={10}>
              <AvInput name='title' required/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Listing Type</Label>
            <Col sm={10}>
              <AvField type='select' name='type'>
                <option value="Studio">Studio</option>
                <option value="House">House</option>
                <option value="Room">Room only</option>
              </AvField>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Rent per Month</Label>
            <Col sm={10}>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
                <Input type='number' step='0.01' id='price' min='0' placeholder="(e.g. 1000.00)" />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Description</Label>
            <Col sm={10}>
              <InputGroup>
                <Input type='textarea' id='title' placeholder='(Provide an informative description)'/>
              </InputGroup>
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