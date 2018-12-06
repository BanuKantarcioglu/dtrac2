import React, { Component } from 'react';
import axios from 'axios';

import SearchPeople from './searchpeople.js';
import NewPerson from './newperson.js';
import PeopleList from './peoplelist.js';

class App extends Component {
  render(props) {
    return(
      <div>
        <SearchPeople />
        <NewPerson />
        <hr />
        <PeopleList people = {this.props.people}/>
      </div>
      )
  }
}

export default App;
