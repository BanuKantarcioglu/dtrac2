import React, { Component } from 'react';

class SearchPeople extends Component{
  render(props){
    return(
      <div>
        <label>
          Search
          <input
            placeholder="type a name"/>
          <input
            type="checkbox"/> Show inactive
        </label>
        {this.props.isHNewidden && <button onClick={this.props.onAddNewClicked}>+ Add New Personnel</button>}
        {!this.props.isHNewidden && <button onClick={this.props.onAddNewClicked}> Cancel Add</button>}
      </div>
    );
  }
}
export default SearchPeople;
