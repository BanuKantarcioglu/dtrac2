import React, { Component } from 'react';
import Person from './person.js';

class PeopleList extends Component{
  render(props){
    const peoplelist = this.props.people.map((item,index) =>{
      return(
        <Person
          person={item}
          key={index}
          document_types={this.props.document_types}
          onDelete= {this.props.onPersonDelete}
          showDocuments= {this.props.handleDocumentPane}
          isDocumentsVisible = {this.props.isDocumentsVisible}
          />
      )
    });
    return(
      <table>
        <thead>
          <tr>
            <th></th>
            <th> Name </th>
            <th> Person Number </th>
            <th> Job Description </th>
            <th> Active </th>
            <th> # of Docs </th>
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
