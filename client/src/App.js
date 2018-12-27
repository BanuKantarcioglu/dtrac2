import React, { Component } from 'react';
import axios from 'axios';
import SearchPeople from './searchpeople.js';
import NewPerson from './newperson.js';
import PeopleList from './peoplelist.js';
import Documents from './documents.js';

import Api from './Api';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      document_types:[],
      people:[],

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
      },
      isDocumentsVisible:false,
      currentPerson:{
        documents:[]
      },
      newDocument:{
        document_type_id:0,
        istracking:true,
        startdate:"",
        enddate:"",
        personnel_id:""
      }
    }
    this.clearNewPerson = this.clearNewPerson.bind(this); //TODO check why need this how it works wo
    this.toggleNew = this.toggleNew.bind(this);
    this.filter = this.filter.bind(this);
    this.handleNewPersonInputChange = this.handleNewPersonInputChange.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.addNewPerson = this.addNewPerson.bind(this);
    this.setNotification = this.setNotification.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.toggleDocuments = this.toggleDocuments.bind(this);
    this.handleNewDocumentInputChange = this.handleNewDocumentInputChange.bind(this);
    this.addNewDocument = this.addNewDocument.bind(this);
    this.deleteDocument = this.deleteDocument.bind(this);
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
  filter(value){
    const searchText = this.state.search.text;
    const showInactive =  this.state.search.showInactive;
    return this.state.people.filter(item =>{
      return item.name.toLowerCase().search(
        searchText.toLowerCase()) !== -1 && ( showInactive || item.status);
    });
  }
  findPersonIndex(id){
    return  this.state.people.findIndex((item) => {return item.id === id })
  }

  handleNewPersonInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      newPerson:{...prevState.newPerson,[name]:value}
    }));

  }
  handleNewDocumentInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      newDocument:{...prevState.newDocument,[name]:value}
    }));

  }
  handleSearchInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      search:{...prevState.search,[name]:value}
    }));

    if (name ==="text"){


    }
    else // show records of inactive
    {
       this.getPeople(value);
    }
  }

  componentDidMount(){
      this.getPeople();
      axios.get(`${Api.url()}/document_types.json`)
        .then(response => {
          console.log(response.data);
          const docty = response.data.document_types.map((dt)=> {return {id:dt.id,description:dt.description}})
          this.setState({document_types:[{id:0,description:""}].concat(docty)})
          this.setNotification("");
        })
        .catch(error => console.log(error))
  }
  getPeople(showInactive){
    this.setNotification("Loading People");
    axios.get(`${Api.url()}/personnels.json`,{params:{showinactive:showInactive}})
      .then(response => {
        this.setState({people:response.data.personnels} );
        this.setNotification(this.state.people.length +" People loaded"); //TODO this maybe wrong due to async state update
      })
      .catch(error => console.log(error))
  }
  toggleNew(){
    this.clearNewPerson();
    this.setState({
      isNewHidden: !this.state.isNewHidden
    });
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

          isNewHidden:true,
        }));
        this.clearNewPerson();
      })
      .catch(error => {
        this.setNotification("Error occured during saving new person: " + error.message);
        this.logError(error);
      });
  }
  deletePerson(id){
    const i = this.findPersonIndex(id)
    if(this.state.people[i].documents.length>0){
      this.setNotification("Person has active documents can't inactivate.")
      return;
    }
    axios.delete(`${Api.url()}/personnels/${id}`)
    .then(response => {
      this.setState(function(prevstate)  {
        prevstate.people[i].status =false
          return{people:prevstate.people}
      }

      )
      this.setNotification( "1 person updated");
    })
    .catch(error => console.log(error))
  }

  toggleDocuments(i){
    const current=this.state.people[this.findPersonIndex(i)];
    this.setState({
      isDocumentsVisible:true,
      currentPerson:current,
      newDocument:{personnel_id:i}
    })
  }
  addNewDocument(){
    this.setNotification("Saving new Document.");
    axios.post(`${Api.url()}/documents`,  {document:this.state.newDocument})
      .then(response => {
        console.log(response)
        const newdocument = response.data.document;
        const peopleIndex = this.findPersonIndex(newdocument.personnel_id);
        this.setState(function(prevstate)  {
          prevstate.people[peopleIndex].documents.push(newdocument);
            return{people:prevstate.people}
        });

        this.setNotification("New Document saved")

      })
      .catch(error => {
        this.setNotification("Error occured during saving new document: " + error.message);
        this.logError(error);
      });
  }
  deleteDocument(id){
    axios.delete(`${Api.url()}/documents/${id}`)
    .then(response => {
      //current persondan bu dökümanı çıkar
      const i = this.findPersonIndex(this.state.currentPerson.id)
      this.setState(function(prevstate)  {
        prevstate.people[i].documents =prevstate.people[i].documents.filter((item)=>  item.id !==id)
          return{people:prevstate.people}
      }

      )
      this.setNotification( "1 document deleted");
    })
    .catch(error => console.log(error))
  }

  render(props) {
    const filtered =  this.filter();
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
        <div className = "flex-container">
        <div className="flex-child">
          <PeopleList

            people = {filtered}
            current = {this.state.currentPerson}
            document_types={this.state.document_types}
            onPersonDelete = {this.deletePerson}
            toggleDocuments = {this.toggleDocuments}
            />
            </div>
          {this.state.isDocumentsVisible &&
            <div className="flex-child">
            <Documents
              className="flex-child"
              documents={this.state.currentPerson.documents}
              newDocument={this.state.newDocument}
              document_types={this.state.document_types}
              onNewDocumentChange={this.handleNewDocumentInputChange}
              addNewDocument={this.addNewDocument}
              deleteDocument = {this.deleteDocument}/>
            </div>}
        </div>

      </div>
      )
  }
}

export default App;
