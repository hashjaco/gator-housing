import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input,Button, FormText, FormFeedback,Row} from 'reactstrap';


class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
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
    console.log(`Email: ${ this.state.email }`)
  }

  render() {
    const { email, password ,conpassword, fname,lname } = this.state;
    return (
      <Container className="App">
      <br></br><br></br><br></br><br></br>
        <h2>Sign ups</h2>
        <br></br>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col>
          <Row>
          <Col>
            <FormGroup>
              <Label for="examplePassword">First Name</Label>
              <Input
                type="firstname"
                name="fn"
                id="firstname"
                placeholder="john"
                value={ fname }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Last Name</Label>
              <Input
                type="lastname"
                name="ln"
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
          </Row>
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