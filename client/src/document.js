import React, { Component } from 'react';

class Document extends Component{
  render(props){
    const document = this.props.document;
    return(
      <tr>
        <td>
          <button> E </button>
          <button
            onClick={()=>this.props.deleteDocument(document.id)}
            > D </button>
        </td>
        <td>
          {document.document_type.description}
        </td>
        <td>
          {document.startdate}
        </td>
        <td>
          {document.enddate}
        </td>
        <td>
          {document.istracking?"✔":"✖"}
          <button
            
            > Do Not Track </button>
        </td>

      </tr>
    )
  }
}

export default Document;
