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
      people:[],
      isHNewidden:true,
      newPerson:{
        name:"",
        pno:"",
        jobdescription:"",
        active:true
      }
    }
    this.clearNewPerson = this.clearNewPerson.bind(this); //TODO check why need this how it works wo
    this.toggleNew = this.toggleNew.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewPerson = this.addNewPerson.bind(this);
  }

  addNewPerson(){
    console.log("adding new person")
    }
  clearNewPerson(){
    this.setState({
      newPerson:{
        name:"",
        pno:"",
        jobdescription:"",
        active:true
      }
    });
  }
  toggleNew(){
    this.clearNewPerson();
    this.setState({
      isHNewidden: !this.state.isHNewidden
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      newPerson:{...prevState.newPerson,[name]:value}
    }));

  }
  componentDidMount(){
    axios.get(`${Api.url()}/document_types.json`)
      .then(response => {
        this.setState({document_types:response.data})
      })
      .catch(error => console.log(error))

    axios.get(`${Api.url()}/personnels.json`)
      .then(response => {
        console.log("got personnel");
        console.log(response.data.personnels);
        this.setState({people:response.data.personnels})
      })
      .catch(error => console.log(error))


  }
  render(props) {
    return(
      <div>
        <SearchPeople onAddNewClicked={this.toggleNew} isHNewidden={this.state.isHNewidden}/>
        {!this.state.isHNewidden && <NewPerson newPerson ={this.state.newPerson} onNewPersonChange={this.handleInputChange} addNewPerson={this.addNewPerson}/>}
        <hr />
        <PeopleList people = {this.state.people} document_types={this.state.document_types}/>
      </div>
      )
  }
}

export default App;
