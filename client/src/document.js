import React, { Component } from 'react';

class Document extends Component{
  render(props){
    const document = this.props.document;
    return(
      <li>
        {document.id},{document.type},{document.startdate},{document.enddate},{document.status}
      </li>
    )
  }
}

export default Document;
