import React, { Component } from 'react';
import Person from './person.js';

class PeopleList extends Component{
  render(props){
    const peoplelist = this.props.people.map((item,index) =>{
      return(
        <Person person={item} key={index} document_types={this.props.document_types}/>
      )
    });
    return(
      <ul>
        {peoplelist}
      </ul>
    )
  }
}
export default PeopleList;
