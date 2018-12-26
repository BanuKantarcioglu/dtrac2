import React, { Component } from 'react';


class NewDocument extends Component{
  render(props){

    return(
      <div >
        <h3> New Document </h3>
        <label>
          Document:
          <select
            name="document_type_id"
            value={this.props.newDocument.document_type}
            onChange={(e)=>  this.props.onNewDocumentChange(e)}>
            {this.props.document_types.map(
              (item) => <option key={item.id} value={item.id}>{item.description}</option>)}
          </select>
        </label>
        <label>
          Status:
          <select
            name="status"
            value={this.props.newDocument.status}
            onChange={(e)=>  this.props.onNewDocumentChange(e)}>

            <option defaultValue value={0}>initial</option>
            <option value={1}>processing</option>
            <option value={2}>complete</option>
          </select>
        </label>
        <label>
          Start Date:
          <input
            placeholder="start date "
            name="startdate"
            value={this.props.newDocument.startdate}
            onChange={(e)=>  this.props.onNewDocumentChange(e)}/>
        </label>
        <label>
          End Date:
          <input
            placeholder="end date "
            name="enddate"
            value={this.props.newDocument.enddate}
            onChange={(e)=>  this.props.onNewDocumentChange(e)} />
        </label>
        <button
          onClick={this.props.addNewDocument}> Ekle</button>
      </div>
    );
  }
}

export default NewDocument;
