import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Container, Col, Form,FormGroup, Label, Input,Button, FormText, FormFeedback,Row} from 'reactstrap';


class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
      'fname': '',
      'lname' : '',
      validate: {
        emailState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    //console.log(`Email: ${ this.state.fname }`);
      fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.fname,
        last_name: this.state.lname,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then( (response) => { 
      alert("User Created")
    });
  }

  render() {
    const { email, password ,conpassword, fname,lname } = this.state;
    return (
      <Container className="App">
        <div style={{height:"3rem"}} /> 
        <h2>Sign ups</h2>
        <br></br>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col>
          <Row>
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="fname"
                id="firstname"
                placeholder="john"
                value={ fname }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lname"
                id="lastname"
                placeholder="doe"
                value={ lname }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          </Row>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                Valid Email
              </FormFeedback>
              <FormFeedback>
               Invalid Email
              </FormFeedback>
              <FormText>Sign up with your email as your Username</FormText>
            </FormGroup>
          </Col>
          <Row>
            <Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input
                type="password"
                name="conpassword"
                id="examplePassword"
                placeholder="********"
                value={ conpassword }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          </Col>
          </Row>

          <Col>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' />{' '}
              I agree to the <Link href="/">terms and services</Link>
            </Label>
          </FormGroup>
          </Col>
          
          <br/>

          <Container>
            <Row>
              <Col><Button color="primary">submit</Button></Col>
            </Row>
          </Container>
      </Form>
      </Container>
    );
  }
}

export default Signup;