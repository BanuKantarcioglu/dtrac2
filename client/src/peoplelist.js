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
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Person Number </th>
            <th> Job Description </th>
            <th> Active </th>
            <th> Number of Documents </th>
          </tr>
        </thead>
        <tbody>
          {peoplelist}
        </tbody>
      </table>
    )
  }
}
export default PeopleList;
