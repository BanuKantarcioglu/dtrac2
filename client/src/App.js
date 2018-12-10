import React, { Component } from 'react';
import axios from 'axios';
import SearchPeople from './searchpeople.js';
import NewPerson from './newperson.js';
import PeopleList from './peoplelist.js';
import Api from './Api';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      document_types:[],
      people:this.props.people
    }
  }
  componentDidMount(){
    axios.get(`${Api.url()}/document_types.json`)
      .then(response => {
        this.setState({document_types:response.data})
      })
      .catch(error => console.log(error))

  }
  render(props) {
    return(
      <div>
        <SearchPeople />
        <NewPerson />
        <hr />
        <PeopleList people = {this.state.people} document_types={this.state.document_types}/>
      </div>
      )
  }
}

export default App;
