import React, { Component } from 'react';

class SearchPeople extends Component{
  render(){
    return(
      <div>
        <label>
          Search
          <input
            placeholder="type a name"/>
          <input
            type="checkbox"/> Show inactive
        </label>
      </div>
    );
  }
}
export default SearchPeople;
