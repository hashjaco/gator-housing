import React, { Component } from 'react';
import { Table } from 'reactable'

class MessageTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          Name: 'Jonathan',
          Date: 'May 2, 2019',
          Message: 'Property Question',
        },
        {
          Date: 'May 2,2019',
          Name: 'Kevin',
          Message: 'Rent Question',
        },
        {
          Date: 'May 2,2019',
          Message: 'How far away from campus?',
          Name: 'Davis',
        },
        {
          Date: 'May 1,2019',
          Message: 'Public Transporation Question',
          Name: 'Hashim',
        },
      ],
    }
  }

  render() {
    return (
      <>
        <Table className="table" data={this.state.data} />
      </>
    )
  }
}
  
export default MessageTable