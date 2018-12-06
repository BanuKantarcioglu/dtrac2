import React, { Component } from 'react';

class NewPerson extends Component{
  render(){
    return(
      <div>
        <h3> New Card </h3>
        <label>
          Name:
          <input
            placeholder="type a name"/>
        </label>
        <label>
          Person Number:
          <input
            placeholder="person number"/>
        </label>
        <label>
          Job description:
          <input
            placeholder="job description " />
        </label>
        <input
            type="checkbox"/> Active
        <button> Ekle</button>
      </div>
    );
  }
}
export default NewPerson;
