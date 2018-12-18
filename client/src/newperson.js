import React, { Component } from 'react';

class NewPerson extends Component{
  render(){
    return(
      <div >
      <hr />
        <h3> New Card </h3>
        <label>
          Name:
          <input
            placeholder="type a name"
            name="name"
            value={this.props.newPerson.name}
            onChange={(e)=>  this.props.onNewPersonChange(e)}/>
        </label>
        <label>
          Person Number:
          <input
            placeholder="person number"
            name="pno"
            value={this.props.newPerson.pno}
            onChange={(e)=>  this.props.onNewPersonChange(e)}/>
        </label>
        <label>
          Job description:
          <input
            placeholder="job description "
            name="jobdescription"
            value={this.props.newPerson.jobdescription}
            onChange={(e)=>  this.props.onNewPersonChange(e)}/>
        </label>
        <input
            type="checkbox"
            name="active"
            checked={this.props.newPerson.active}
            onChange={(e)=>  this.props.onNewPersonChange(e)}/> Active
        <button onClick={this.props.addNewPerson}> Ekle</button>
      </div>
    );
  }
}
export default NewPerson;
