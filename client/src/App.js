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
      filtered:[],
      search:{
          text:"",
          showInactive:false,
      },
      isNewHidden:true,
      notification:"Loading data...",
      newPerson:{
        name:"",
        pno:"",
        jobdescription:"",
        active:true
      }
    }
    this.clearNewPerson = this.clearNewPerson.bind(this); //TODO check why need this how it works wo
    this.toggleNew = this.toggleNew.bind(this);
    this.filter = this.filter.bind(this);
    this.handleNewPersonInputChange = this.handleNewPersonInputChange.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.addNewPerson = this.addNewPerson.bind(this);
    this.setNotification = this.setNotification.bind(this);
  }

  setNotification(note){
    this.setState({notification: note});
  }
  logError(error){
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
  clearNewPerson(){
    this.setState({
      notification:"",
      newPerson:{
        name:"",
        pno:"",
        jobdescription:"",
        active:true
      }
    });
  }


  getPeople(showInactive){
    this.setNotification("Loading People");
    axios.get(`${Api.url()}/personnels.json`,{params:{showinactive:showInactive}})
      .then(response => {
        this.setState({people:response.data.personnels},
          ()=>{
            console.log("callback");
            let filteredList = this.state.people;
            if(this.state.search.text){
              console.log("filtering:" + this.state.search.text);
              filteredList = this.filter(this.state.search.text);

            }
            this.setState({filtered:filteredList});
            }
          );
        this.setNotification(this.state.people.length +" People loaded"); //TODO this maybe wrong due to async state update
      })
      .catch(error => console.log(error))
  }
  addNewPerson(){
    this.setNotification("Saving new person.");
    axios.post(`${Api.url()}/personnels`,  {personnel:this.state.newPerson})
      .then(response => {
        console.log(response)
        this.setNotification("New Person saved")
        this.setState(prevState => ({
          //TODO to add which state
          people:prevState.people.concat(response.data.personnel),
          filtered:prevState.filtered.concat(response.data.personnel),
          isNewHidden:true,
        }));
        this.clearNewPerson();
      })
      .catch(error => {
        this.setNotification("Error occured during saving new person: " + error.message);
        this.logError(error);
      });
  }
  toggleNew(){
    this.clearNewPerson();
    this.setState({
      isNewHidden: !this.state.isNewHidden
    });
  }
  handleNewPersonInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      newPerson:{...prevState.newPerson,[name]:value}
    }));

  }
  handleSearchInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      search:{...prevState.search,[name]:value}
    }));

    if (name =="text"){
      const filteredList = this.filter(value);
      this.setState({filtered:filteredList});
    }
    else // show records of inactive
    {
       this.getPeople(value);
    }
  }

  filter(value){
    return this.state.people.filter(item =>{
      return item.name.toLowerCase().search(
        value.toLowerCase()) !== -1;
    });
  }

  componentDidMount(){
      this.getPeople();
      axios.get(`${Api.url()}/document_types.json`)
        .then(response => {
          console.log(response.data);
          this.setState({document_types:response.data})
          this.setNotification("");
        })
        .catch(error => console.log(error))
  }
  render(props) {
    return(
      <div>
        <SearchPeople
          onAddNewClicked={this.toggleNew}
          isNewHidden={this.state.isNewHidden}
          search ={this.state.search}
          onSearchChange={this.handleSearchInputChange}
          />
        <span>{this.state.notification}</span>
        {!this.state.isNewHidden &&
          <NewPerson
            newPerson ={this.state.newPerson}
            onNewPersonChange={this.handleNewPersonInputChange}
            addNewPerson={this.addNewPerson}
          />}
        <hr />
        <PeopleList
          people = {this.state.filtered}
          document_types={this.state.document_types}/>
      </div>
      )
  }
}

export default App;
