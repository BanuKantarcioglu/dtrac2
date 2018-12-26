import React, { Component } from 'react';


class Person extends Component{

  render(props){
    const person = this.props.person;
    return (
      <tr >
        <td>
          <button> E </button>
          {person.status &&
          <button
            onClick={()=>this.props.onDelete(person.id)}
            > D </button>
          }
        </td>
        <td>
          {person.name}
        </td>
        <td>
          {person.pno}
        </td>
        <td>
          {person.jobdescription}
        </td>
        <td>
          {person.status?"✔":"✖"}
        </td>
        <td >
          {person.documents.length}


          {
            this.props.isCurrent
          ?
          <button onClick={()=>this.props.showDocuments(person.id)}>v</button>
          :
          <button onClick={()=>this.props.showDocuments(person.id)}>></button>
          }
        </td>

      </tr>


    );
  }

}

export default Person;
