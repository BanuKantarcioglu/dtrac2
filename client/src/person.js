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

  render(props){
    const person = this.props.person;
    return (

      <li onClick={this.toggleHidden}>
          {person.id},{person.name},{person.jobdescription},{person.active},{person.numberofdocs}
          {!this.state.isHidden && <Documents documents={person.documents} document_types={this.props.document_types}/>}
      </li>
    );
  }

}

export default Person;
