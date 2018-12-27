import React, { Component } from 'react';
import NewDocument from './newdocument.js';
import DocumentList from './documentlist.js';

class Documents extends Component{
  render(props){
    return (
      <div>
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
          doNotTrackDocument = {this.props.doNotTrackDocument}
          />
      </div>
    );
  }
}

export default Documents;
