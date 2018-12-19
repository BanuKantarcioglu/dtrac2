import React, { Component } from 'react';
import Documents from './documents.js';

class Person extends Component{

  constructor(props){
    super(props)
    this.state={
      isHidden:true
    }
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden () {

    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  //        <li onClick={this.toggleHidden}>
  //          {person.id},{person.name},{person.jobdescription},{person.status},{person.documents.length}
  //          {!this.state.isHidden && <Documents documents={person.documents} document_types={this.props.document_types}/>}
  //      </li>
    


  render(props){
    const person = this.props.person;
    return (
      <tr>
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
          {person.status}
        </td>
        <td>
          {person.documents.length}
        </td>
      </tr>


    );
  }

}

export default Person;
