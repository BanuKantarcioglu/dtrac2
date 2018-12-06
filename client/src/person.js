import React, { Component } from 'react';
import Documents from './documents.js';

class PeopleList extends Component{
  render(props){
    const person = this.props.person;
    return (
      <li>
          {person.id},{person.name},{person.jobdescription},{person.active},{person.numberofdocs}
          <Documents documents={person.documents}/>
      </li>
    );
  }
}

export default PeopleList;
