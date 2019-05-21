import React, { Component } from 'react';
import { Table } from 'reactable';
import { Alert } from "reactstrap";


class MessageTable extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        messages: []
    }
    this.updateListing = this.updateListing.bind(this);
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
    <div>No messages recieved!</div>
  )
}

if (this.state.messages.length === 0) {
  return(
    <Alert color="danger">No messages recieved.</Alert>
  )
}
    return (
      <>
        <Table className="table" data={this.state.messages} />
      </>
    )
  }
}
  
export default MessageTable;