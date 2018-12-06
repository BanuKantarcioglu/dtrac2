import React, { Component } from 'react';
import NewDocument from './newdocument.js';
import DocumentList from './documentlist.js';

class Documents extends Component{
  render(props){
    return (
      <div>
        <input
            type="checkbox"/> Show old docs
        <NewDocument />
        <hr/>
        <DocumentList documents={this.props.documents}/>
      </div>
    );
  }
}

export default Documents;
