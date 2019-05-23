import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Disclaimer extends Component {

  render() {
    return (
      <div>
        <Alert color="warning">
          SFSU Software Engineering Project CSC 648-848, Spring 2018. For Demonstration Only.
        </Alert>
      </div>
    )
  }

}

export default Disclaimer;