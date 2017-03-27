import React from 'react'

const Search = React.createClass({
  render(){
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox"  />
          Show in stock items only
        </p>
      </form>
    )
  }
})

export default SearchBar;