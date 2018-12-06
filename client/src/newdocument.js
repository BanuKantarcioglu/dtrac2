import React, { Component } from 'react';


class NewDocument extends Component{
  render(props){
    return(
      <div>
        <h3> New Document </h3>
        <label>
          Document:
          <select>
            <option value="cathandbook">Cat Handbook</option>
            <option value="lightsabermanual">Lightsaber Manual</option>
            <option selected value="howtoloseabattle">How to lose a battle</option>
            <option value="anewbeginning">A new beginning</option>
          </select>
        </label>
        <label>
          Status:
          <select>
            <option value="initial">initial</option>
            <option value="processing">processing</option>
            <option selected value="complete">complete</option>
          </select>
        </label>
        <label>
          Start Date:
          <input
            placeholder="start date " />
        </label>
        <label>
          End Date:
          <input
            placeholder="end date " />
        </label>
        <button> Ekle</button>
      </div>
    );
  }
}

export default NewDocument;
