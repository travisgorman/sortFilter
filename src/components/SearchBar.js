import React from 'react'

const SearchBar = React.createClass({
  render() {
    return (  
      <form className="SearchBar">
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
              {' '}
            Only show products in stock
          </p>
      </form> 
    );
  }
});

export default SearchBar;