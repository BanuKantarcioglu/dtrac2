import React, { Component } from 'react';
import Document from './document.js';

class DocumentList extends Component{
  render(props){
    const documentlist = this.props.documents.map((item,index) =>{
      return(
        <Document
          document={item}
          key={item.id}
          doNotTrackDocument = {this.props.doNotTrackDocument}
          deleteDocument = {this.props.deleteDocument}
          />
      )
    });
    return(
      <table>
        <thead>
          <tr>
            <th></th>
            <th> Document Type </th>
            <th> Start Date </th>
            <th> End Date </th>
            <th> Is Tracking </th>
          </tr>
        </thead>
        <tbody>
          {documentlist}
        </tbody>
      </table>
    )
  }
}
export default DocumentList;
