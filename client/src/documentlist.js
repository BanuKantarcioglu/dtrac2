import React, { Component } from 'react';
import Document from './document.js';

class DocumentList extends Component{
  render(props){
    const documentlist = this.props.documents.map((item,index) =>{
      return(
        <Document document={item} key={index} />
      )
    });
    return(
      <ul>
        {documentlist}
      </ul>
    )
  }
}
export default DocumentList;
