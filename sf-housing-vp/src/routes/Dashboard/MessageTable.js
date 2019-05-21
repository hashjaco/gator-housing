import React, { Component } from 'react';
import { Alert, Table } from "reactstrap";


class MessageTable extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        messages: null
    }
    this.updateListing = this.updateListing.bind(this);
  }

  convertToDateString(timestamp) {
    console.log('timestamp: ' + timestamp);
    // Split off date part of timestamp
    timestamp = timestamp.split('T')[0];
    return timestamp;
  }

  componentDidMount() {
      this.updateListing();
  }

  componentDidUpdate(prevProps){
    if((JSON.stringify(this.props.searchType) !== JSON.stringify(prevProps.searchType)) || (JSON.stringify(this.props.propertyType) !== JSON.stringify(prevProps.propertyType)))
    {
          this.updateListing();
    }
  }

  updateListing(){
    //if (!this.props.searchType) return;
    let self = this;
      fetch('/messages/9', {
          method: 'GET'
      }).then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          self.setState({messages: data});
      }).catch(err => {
      console.log('caught it!',err);
      })
  }

  render() {

    if (!this.state.messages) {
      return(
        <div>Loading...</div>
      )
    }

    if (this.state.messages.length === 0) {
      return(
        <Alert color="muted">No messages recieved.</Alert>
      )
    }

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Listing</th>
            <th>Message</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date Sent</th>
          </tr>
        </thead>
        <tbody>
          {this.state.messages.map((message, index) =>
            <tr>
              {console.log(message)}
              <th scope="row">{index}</th>
              <td>{message.listingtitle}</td>
              <td>{message.message}</td>
              <td>{message.firstname + " " + message.lastname}</td>
              <td>{message.email}</td>
              <td>{this.convertToDateString(message.messagedon)}</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}
  
export default MessageTable;