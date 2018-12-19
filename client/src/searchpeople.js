import React, { Component } from 'react';

class SearchPeople extends Component{
  render(props){
    return(
      <div>
        <label>
          Search
          <input
            placeholder="type a name"
            name="text"
            value={this.props.search.text}
            onChange={(e)=>  this.props.onSearchChange(e)}/>
          <input
            type="checkbox"
            name="showInactive"
            value={this.props.search.showInactive}
            onChange={(e)=>  this.props.onSearchChange(e)} /> Show inactive
        </label>
        {this.props.isNewHidden && <button onClick={this.props.onAddNewClicked}>+ Add New Personnel</button>}
        {!this.props.isNewHidden && <button onClick={this.props.onAddNewClicked}> Cancel Add</button>}
      </div>
    );
  }
}
export default SearchPeople;
