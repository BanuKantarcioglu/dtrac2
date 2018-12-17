import React, { Component } from 'react';


class NewDocument extends Component{
  render(props){
    const document_types = this.props.document_types;
    let optionItems = [<option key="0"></option>]
    if (document_types && document_types.length>0){
      optionItems.concat(
          document_types.map((dt) =>
                <option key={dt.id}>{dt.description}</option>
            ));
          }
    return(
      <div>
        <h3> New Document </h3>
        <label>
          Document:
          <select>
              {optionItems}
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
