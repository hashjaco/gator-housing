import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Container, Col, Form,FormGroup, Label, Input,Button, FormText, FormFeedback, Row } from 'reactstrap';


class Login extends Component {
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
    this.formRef = React.createRef();

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

  formReset() {
    this.formRef.current.reset()
    }

  submitForm(e) {
    e.preventDefault();
      fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if(response.length > 0){
        alert("Welcome " + response[0].first_name);
        console.log(response[0].user_id);
        this.formReset();
      }
        else{
          alert("Try again!");
          this.formReset();
        }
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <div style={{height:"3rem"}} /> 
        <h2>Log In</h2>
        <br></br>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) } innerRef={this.formRef}>
          <Col>
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
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
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
              <FormText><NavLink href="#forgotPass">Forgot password?</NavLink></FormText>
            </FormGroup>
          </Col>
          <Container>
            <Row>
              <Col><Button color="success">Login</Button></Col>
              <Col><Button color="primary" tag={Link} to="/signup">Sign Up</Button></Col>
            </Row>
          </Container>
      </Form>
      </Container>
    );
  }
}

export default Login;