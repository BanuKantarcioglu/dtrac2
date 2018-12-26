import React, { Component } from 'react';
import NewDocument from './newdocument.js';
import DocumentList from './documentlist.js';

class Documents extends Component{
  render(props){
    return (
      <div>
        <input
            type="checkbox"/> Show old docs
        <NewDocument
          document_types={this.props.document_types}
          newDocument={this.props.newDocument}
          onNewDocumentChange = {this.props.onNewDocumentChange}
          addNewDocument={this.props.addNewDocument}
          />
        <hr/>
        <DocumentList
          documents={this.props.documents}
          deleteDocument= {this.props.deleteDocument}
          />
      </div>
    );
  }
}

export default Documents;
